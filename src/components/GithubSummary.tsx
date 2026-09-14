import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import {
  BookOpen,
  ExternalLink,
  GitFork,
  Star,
  Users,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";

interface GithubUser {
  public_repos: number;
  followers: number;
  following: number;
}

interface GithubRepo {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
}

const username = "SivaBalajiEevana-12";

export default function GithubSummary() {
  const [user, setUser] = useState<GithubUser | null>(null);
  const [repos, setRepos] = useState<GithubRepo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGithubData = async () => {
      try {
        const [userResponse, reposResponse] = await Promise.all([
          fetch(`https://api.github.com/users/${username}`),
          fetch(
            `https://api.github.com/users/${username}/repos?sort=updated&per_page=4`
          ),
        ]);

        if (!userResponse.ok || !reposResponse.ok) {
          throw new Error("Failed to fetch GitHub data");
        }

        const userData: GithubUser = await userResponse.json();
        const repoData: GithubRepo[] = await reposResponse.json();

        setUser(userData);
        setRepos(repoData);
      } catch (error) {
        console.error("GitHub API Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGithubData();
  }, []);

  return (
    <section id="github" className="relative bg-[#050505] py-28">
      <div className="mx-auto max-w-6xl px-6">

        {/* Section Header */}
        <div className="mb-14">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-cyan-400">
            05 / GitHub
          </p>

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <h2 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
                Code in the open.
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-zinc-400 md:text-base">
                A snapshot of my GitHub activity, repositories, and
                development work.
              </p>
            </div>

            {/* GitHub Profile */}
            <a
              href={`https://github.com/${username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex w-fit items-center gap-3 border border-white/10 bg-white/[0.03] px-5 py-3 text-sm text-zinc-300 transition hover:border-cyan-400/40 hover:bg-cyan-400/[0.05] hover:text-white"
            >
              <FaGithub className="text-lg" />

              <span>View GitHub</span>

              <ExternalLink
                size={15}
                className="text-zinc-500 transition group-hover:text-cyan-400"
              />
            </a>
          </div>
        </div>

        {/* Stats */}
        {loading ? (
          <div className="grid gap-4 sm:grid-cols-3">
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
          </div>
        ) : user ? (
          <div className="mb-12 grid gap-4 sm:grid-cols-3">
            <StatCard
              icon={<BookOpen size={18} />}
              label="Public Repositories"
              value={user.public_repos}
            />

            <StatCard
              icon={<Users size={18} />}
              label="Followers"
              value={user.followers}
            />

            <StatCard
              icon={<Star size={18} />}
              label="Following"
              value={user.following}
            />
          </div>
        ) : (
          <div className="border border-white/10 bg-white/[0.02] p-6 text-sm text-zinc-500">
            Unable to load GitHub information.
          </div>
        )}

        {/* Repository Heading */}
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-white">
              Recently updated
            </p>

            <p className="mt-1 text-xs text-zinc-500">
              Latest repositories from GitHub
            </p>
          </div>

          <div className="hidden h-px flex-1 bg-white/10 md:ml-8 md:block" />
        </div>

        {/* Repositories */}
        <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2">
          {loading
            ? Array.from({ length: 4 }).map((_, index) => (
                <RepoSkeleton key={index} />
              ))
            : repos.map((repo, index) => (
                <RepositoryCard
                  key={repo.id}
                  repo={repo}
                  index={index}
                />
              ))}
        </div>

        {/* Bottom GitHub Link */}
        <div className="mt-10 flex justify-center">
          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-sm text-zinc-400 transition hover:text-cyan-400"
          >
            Explore all repositories

            <ExternalLink
              size={15}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------- */
/* Stat Card                           */
/* ---------------------------------- */

function StatCard({
  icon,
  label,
  value,
}: {
  icon: ReactNode;
  label: string;
  value: number;
}) {
  return (
    <div className="group relative overflow-hidden border border-white/10 bg-white/[0.02] p-6 transition duration-300 hover:border-cyan-400/30 hover:bg-white/[0.04]">
      {/* Cyan Glow */}
      <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-cyan-400/5 blur-3xl transition group-hover:bg-cyan-400/10" />

      <div className="relative">
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center border border-cyan-400/20 bg-cyan-400/5 text-cyan-400">
            {icon}
          </div>

          <span className="text-xs uppercase tracking-wider text-zinc-500">
            {label}
          </span>
        </div>

        <p className="text-4xl font-semibold tracking-tight text-white">
          {value}
        </p>
      </div>
    </div>
  );
}

/* ---------------------------------- */
/* Repository Card                     */
/* ---------------------------------- */

function RepositoryCard({
  repo,
  index,
}: {
  repo: GithubRepo;
  index: number;
}) {
  return (
    <a
      href={repo.html_url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative min-h-[210px] bg-[#050505] p-7 transition duration-300 hover:bg-[#0a0a0a]"
    >
      {/* Number */}
      <span className="absolute right-7 top-7 font-mono text-xs text-zinc-700 transition group-hover:text-cyan-400/50">
        0{index + 1}
      </span>

      {/* Repository Name */}
      <div className="mb-5 flex items-center gap-3">
        <FaGithub className="text-lg text-zinc-600 transition group-hover:text-cyan-400" />

        <h3 className="text-lg font-medium text-white transition group-hover:text-cyan-400">
          {repo.name}
        </h3>
      </div>

      {/* Description */}
      <p className="mb-8 max-w-md text-sm leading-6 text-zinc-500">
        {repo.description || "No description available."}
      </p>

      {/* Bottom Information */}
      <div className="absolute bottom-7 left-7 right-7 flex items-center justify-between">
        <div className="flex items-center gap-5 text-xs text-zinc-500">

          {/* Language */}
          {repo.language && (
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-cyan-400/70" />
              {repo.language}
            </span>
          )}

          {/* Stars */}
          <span className="flex items-center gap-1.5">
            <Star size={14} />
            {repo.stargazers_count}
          </span>

          {/* Forks */}
          <span className="flex items-center gap-1.5">
            <GitFork size={14} />
            {repo.forks_count}
          </span>
        </div>

        <ExternalLink
          size={16}
          className="text-zinc-700 transition group-hover:text-cyan-400"
        />
      </div>
    </a>
  );
}

/* ---------------------------------- */
/* Loading Components                  */
/* ---------------------------------- */

function SkeletonCard() {
  return (
    <div className="h-[150px] animate-pulse border border-white/10 bg-white/[0.02]" />
  );
}

function RepoSkeleton() {
  return (
    <div className="h-[210px] animate-pulse bg-[#050505] p-7">
      <div className="h-5 w-40 bg-white/5" />
      <div className="mt-6 h-3 w-4/5 bg-white/5" />
      <div className="mt-3 h-3 w-3/5 bg-white/5" />
    </div>
  );
}