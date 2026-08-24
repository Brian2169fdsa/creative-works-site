import { AlertCircle, Sparkles, Minus, Check } from "lucide-react";

interface ProblemSolutionProps {
  problems: string[];
  solutions: string[];
  problemTitle?: string;
  solutionTitle?: string;
}

export default function ProblemSolution({
  problems,
  solutions,
  problemTitle = "The common challenge",
  solutionTitle = "The Phoenix Creative Works solution",
}: ProblemSolutionProps) {
  return (
    <div className="flex flex-wrap gap-6">
      {/* Problems */}
      <div className="flex-1 min-w-[300px] bg-cloud border border-gray-200 rounded-xl p-8">
        <div className="flex items-center gap-3 mb-5">
          <AlertCircle className="w-5 h-5 text-gray-400" aria-hidden="true" />
          <h3 className="font-display font-bold text-xl text-navy-midnight">
            {problemTitle}
          </h3>
        </div>
        <ul className="grid gap-3">
          {problems.map((p, i) => (
            <li key={i} className="flex gap-3 text-gray-600 text-base leading-snug">
              <Minus
                className="w-4 h-4 flex-shrink-0 mt-1 text-gray-400"
                aria-hidden="true"
              />
              {p}
            </li>
          ))}
        </ul>
      </div>

      {/* Solutions */}
      <div className="flex-1 min-w-[300px] bg-white border border-orange/30 rounded-xl p-8 shadow-card">
        <div className="flex items-center gap-3 mb-5">
          <Sparkles className="w-5 h-5 text-orange" aria-hidden="true" />
          <h3 className="font-display font-bold text-xl text-navy-midnight">
            {solutionTitle}
          </h3>
        </div>
        <ul className="grid gap-3">
          {solutions.map((s, i) => (
            <li key={i} className="flex gap-3 text-gray-700 text-base leading-snug">
              <Check
                className="w-4 h-4 flex-shrink-0 mt-1 text-orange"
                aria-hidden="true"
              />
              {s}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
