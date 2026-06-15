import { NextResponse } from 'next/server';
import { getNowPlaying } from '../../lib/spotify';

// Revalidate every 30 seconds
export const revalidate = 30;

export async function GET() {
  // If credentials aren't set, return the fallback
  if (
    !process.env.SPOTIFY_CLIENT_ID ||
    !process.env.SPOTIFY_CLIENT_SECRET ||
    !process.env.SPOTIFY_REFRESH_TOKEN
  ) {
    return NextResponse.json({ configured: false });
  }

  const track = await getNowPlaying();

  if (!track) {
    return NextResponse.json({ configured: true, track: null });
  }

  return NextResponse.json({ configured: true, track });
}
