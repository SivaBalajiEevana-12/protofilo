import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import {
  ExternalLink,
  Trophy,
  Code2,
  Target,
  BarChart3,
} from "lucide-react";
import { SiLeetcode } from "react-icons/si";

interface LeetcodeData {
  totalSolved: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
  ranking: number;
  contributionPoint: number;
  contestRating: number;
}

const username = "EEVANA_SIVABALAJI";

const API_URL = "https://alfa-leetcode-api.onrender.com";

export default function LeetcodeStats() {
  const [data, setData] = useState<LeetcodeData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchLeetcodeData() {
      try {
        const [profileResponse, contestResponse] = await Promise.all([
          fetch(`${API_URL}/${username}/profile`),
          fetch(`${API_URL}/${username}/contest`),
        ]);

        if (!profileResponse.ok) {
          throw new Error("Failed to fetch LeetCode profile");
        }

        const profile = await profileResponse.json();

        let contestRating = 0;

        if (contestResponse.ok) {
          const contest = await contestResponse.json();

          console.log("LeetCode contest data:", contest);

          contestRating =
            Number(
              contest.contestRating ??
                contest.rating ??
                contest.contest_rating ??
                0
            ) || 0;
        }

        console.log("LeetCode profile data:", profile);

        setData({
          totalSolved: Number(profile.totalSolved) || 0,
          easySolved: Number(profile.easySolved) || 0,
          mediumSolved: Number(profile.mediumSolved) || 0,
          hardSolved: Number(profile.hardSolved) || 0,
          ranking: Number(profile.ranking) || 0,
          contributionPoint:
            Number(profile.contributionPoint) || 0,
          contestRating,
        });
      } catch (error) {
        console.error("LeetCode API Error:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchLeetcodeData();
  }, []);

  return (
    <section
      id="leetcode"
      className="relative bg-[#050505] py-28"
    >
      <div className="mx-auto max-w-6xl px-6">

        {/* Header */}
        <div className="mb-14">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-cyan-400">
            06 / LeetCode
          </p>

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <h2 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
                Problem solving.
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-zinc-400 md:text-base">
                Consistent problem solving and algorithmic practice
                on LeetCode.
              </p>
            </div>

            <a
              href={`https://leetcode.com/u/${username}/`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex w-fit items-center gap-3 border border-white/10 bg-white/[0.03] px-5 py-3 text-sm text-zinc-300 transition hover:border-cyan-400/40 hover:bg-cyan-400/[0.05] hover:text-white"
            >
              <SiLeetcode className="text-lg" />

              <span>View LeetCode</span>

              <ExternalLink
                size={15}
                className="text-zinc-500 transition group-hover:text-cyan-400"
              />
            </a>
          </div>
        </div>

        {/* Loading */}
        {loading ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
          </div>
        ) : data ? (
          <>
            {/* Main Stats */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

              <StatCard
                icon={<Code2 size={18} />}
                label="Problems Solved"
                value={data.totalSolved}
              />

              <StatCard
                icon={<Trophy size={18} />}
                label="Contest Rating"
                value={data.contestRating}
              />

              <StatCard
                icon={<Target size={18} />}
                label="Global Ranking"
                value={data.ranking}
              />

              <StatCard
                icon={<BarChart3 size={18} />}
                label="Contribution"
                value={data.contributionPoint}
              />

            </div>

            {/* Difficulty */}
            <div className="mt-4 grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-3">

              <DifficultyCard
                label="Easy"
                value={data.easySolved}
              />

              <DifficultyCard
                label="Medium"
                value={data.mediumSolved}
              />

              <DifficultyCard
                label="Hard"
                value={data.hardSolved}
              />

            </div>
          </>
        ) : (
          <div className="border border-white/10 bg-white/[0.02] p-6 text-sm text-zinc-500">
            Unable to load LeetCode statistics.
          </div>
        )}

        {/* Bottom Link */}
        <div className="mt-10 flex justify-center">
          <a
            href={`https://leetcode.com/u/${username}/`}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-sm text-zinc-400 transition hover:text-cyan-400"
          >
            Explore my LeetCode profile

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

      {/* Glow */}
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

        <p className="text-3xl font-semibold tracking-tight text-white">
          {value.toLocaleString()}
        </p>

      </div>
    </div>
  );
}

/* ---------------------------------- */
/* Difficulty Card                     */
/* ---------------------------------- */

function DifficultyCard({
  label,
  value,
}: {
  label: string;
  value: number;
}) {
  return (
    <div className="group bg-[#050505] p-6 transition hover:bg-[#0a0a0a]">

      <div className="mb-4 flex items-center justify-between">

        <span className="text-sm text-zinc-400">
          {label}
        </span>

        <span className="font-mono text-xs text-zinc-700">
          LEETCODE
        </span>

      </div>

      <p className="text-3xl font-semibold text-white transition group-hover:text-cyan-400">
        {value.toLocaleString()}
      </p>

      <div className="mt-5 h-px bg-white/10">
        <div className="h-px w-1/3 bg-cyan-400/60" />
      </div>

    </div>
  );
}

/* ---------------------------------- */
/* Skeleton                            */
/* ---------------------------------- */

function SkeletonCard() {
  return (
    <div className="h-[150px] animate-pulse border border-white/10 bg-white/[0.02]" />
  );
}