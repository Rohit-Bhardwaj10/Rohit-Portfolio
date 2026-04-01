"use client";

import { motion } from "framer-motion";
import { Github, BookUp, Star, GitFork, Clock } from "lucide-react";
import { GitHubCalendar } from "react-github-calendar";
import { useEffect, useState } from "react";

interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
}

export default function GithubGraph() {
  const [recentRepos, setRecentRepos] = useState<Repo[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.github.com/users/Rohit-Bhardwaj10/repos?sort=updated&per_page=3')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setRecentRepos(data);
        }
      })
      .catch(console.error)
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <section className="w-full py-20 bg-transparent relative border-b border-dashed border-white/10 overflow-hidden group/graph">
      {/* Huge Background Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[150px] md:text-[250px] lg:text-[300px] font-serif font-black text-white/[0.015] pointer-events-none select-none group-hover/graph:text-white/[0.025] transition-colors duration-1000 tracking-tighter z-0 whitespace-nowrap">
        COMMITS
      </div>
      
      {/* Aesthetic ambient lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-800/10 via-transparent to-transparent pointer-events-none blur-3xl z-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex items-center justify-between mb-12 pb-5 border-b border-dashed border-white/10 backdrop-blur-sm">
          <div className="flex items-center gap-5">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 to-zinc-400 tracking-tight uppercase drop-shadow-sm">
              Code History
            </h2>
            <div className="h-6 w-[1px] bg-white/20" />
            <p className="font-sans text-[9px] md:text-[10px] text-zinc-500 font-bold uppercase tracking-[0.3em]">
              Contributions // 02
            </p>
          </div>
          <a
            href="https://github.com/Rohit-Bhardwaj10"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 text-zinc-400 hover:text-zinc-100 transition-all duration-300 group"
          >
            <span className="font-sans text-[10px] font-bold uppercase tracking-[0.15em] border-b border-transparent group-hover:border-zinc-300 transition-all pb-0.5">
              @Rohit-Bhardwaj10
            </span>
            <Github className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" />
          </a>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full flex justify-center bg-black/20 border border-white/5 backdrop-blur-sm p-6 md:p-10 rounded-sm shadow-[0_8px_30px_rgba(0,0,0,0.5)] hover:border-white/10 transition-colors duration-500 mb-8"
        >
          <div className="w-full max-w-full overflow-x-auto custom-scrollbar flex justify-center">
            <GitHubCalendar 
              username="Rohit-Bhardwaj10" 
              colorScheme="dark"
              blockSize={14}
              blockMargin={5}
              fontSize={12}
              theme={{
                light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
                dark: ['#18181b', '#064e3b', '#059669', '#10b981', '#34d399']
              }}
            />
          </div>
        </motion.div>

        {/* Recent Activity Section */}
        <div className="mt-12">
          <div className="flex items-center gap-3 mb-6">
            <Clock className="w-4 h-4 text-zinc-500" />
            <h3 className="font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-400">
              Recent Activity
            </h3>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-white/10 to-transparent" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {isLoading ? (
              // Skeleton loading
              [...Array(3)].map((_, i) => (
                <div key={i} className="bg-black/20 border border-white/5 p-5 rounded-sm h-[130px] animate-pulse flex flex-col justify-between">
                  <div>
                    <div className="h-4 w-1/2 bg-white/10 rounded mb-3" />
                    <div className="h-3 w-3/4 bg-white/5 rounded" />
                  </div>
                  <div className="flex justify-between">
                    <div className="h-3 w-1/4 bg-white/10 rounded" />
                    <div className="h-3 w-1/4 bg-white/5 rounded" />
                  </div>
                </div>
              ))
            ) : recentRepos.length > 0 ? (
              recentRepos.map((repo, i) => (
                <motion.a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="bg-black/20 border border-white/5 backdrop-blur-sm p-5 rounded-sm hover:border-white/20 transition-all duration-300 group/repo flex flex-col justify-between h-full hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)]"
                >
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <BookUp className="w-4 h-4 text-zinc-500 group-hover/repo:text-zinc-300 transition-colors" />
                      <h3 className="text-sm font-bold text-zinc-200 group-hover/repo:text-white transition-colors truncate">
                        {repo.name}
                      </h3>
                    </div>
                    <p className="text-xs text-zinc-500 line-clamp-2 leading-relaxed">
                      {repo.description || "No description provided format this repository."}
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5 text-[10px] text-zinc-500 font-sans uppercase tracking-wider">
                    <div className="flex items-center gap-3">
                      {repo.language && (
                        <span className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
                          {repo.language}
                        </span>
                      )}
                      <span className="flex items-center gap-1">
                        <Star className="w-3 h-3.5" />
                        {repo.stargazers_count}
                      </span>
                      <span className="flex items-center gap-1">
                        <GitFork className="w-3 h-3.5" />
                        {repo.forks_count}
                      </span>
                    </div>
                    <span>{new Date(repo.updated_at).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}</span>
                  </div>
                </motion.a>
              ))
            ) : (
              <div className="col-span-3 text-center py-8 text-zinc-500 text-sm font-sans uppercase tracking-wider bg-black/20 border border-white/5 rounded-sm">
                No recent public activity found.
              </div>
            )}
          </div>
        </div>
        
        <div className="mt-8 flex justify-center md:hidden">
          <a
            href="https://github.com/Rohit-Bhardwaj10"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-zinc-400 hover:text-zinc-100 transition-all duration-300 group"
          >
            <span className="font-sans text-[10px] font-bold uppercase tracking-[0.15em] border-b border-transparent group-hover:border-zinc-300 transition-all pb-0.5">
              @Rohit-Bhardwaj10
            </span>
            <Github className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" />
          </a>
        </div>
      </div>
    </section>
  );
}