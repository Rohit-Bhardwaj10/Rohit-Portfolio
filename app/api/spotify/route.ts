import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  const LASTFM_API_KEY = process.env.LASTFM_API_KEY;
  const LASTFM_USERNAME = process.env.LASTFM_USERNAME;

  if (!LASTFM_API_KEY || !LASTFM_USERNAME) {
    return NextResponse.json({ configured: false, track: null });
  }

  try {
    const response = await fetch(
      `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${LASTFM_USERNAME}&api_key=${LASTFM_API_KEY}&format=json&limit=1`,
      { cache: 'no-store' }
    );

    if (!response.ok) {
      console.error('Last.fm API Error:', await response.text());
      return NextResponse.json({ configured: true, track: { isPlaying: false } });
    }

    const data = await response.json();
    console.log('Last.fm API Response:', JSON.stringify(data, null, 2));
    const tracks = data?.recenttracks?.track;
    
    if (!tracks || tracks.length === 0) {
      return NextResponse.json({ configured: true, track: { isPlaying: false } });
    }

    const track = tracks[0];
    const isPlaying = track['@attr']?.nowplaying === 'true';
    const title = track.name;
    const artist = track.artist['#text'];
    const album = track.album['#text'];
    
    // Last.fm returns an array of images. We grab the extralarge one, or fallback to the last available.
    const imageObj = track.image?.find((img: any) => img.size === 'extralarge') || track.image?.[track.image.length - 1];
    const albumArt = imageObj ? imageObj['#text'] : null;
    const songUrl = track.url;

    return NextResponse.json({
      configured: true,
      track: {
        isPlaying,
        title,
        artist,
        album,
        albumArt,
        songUrl,
      }
    });

  } catch (error) {
    console.error('Failed to fetch from Last.fm', error);
    return NextResponse.json({ configured: true, track: { isPlaying: false } });
  }
}
