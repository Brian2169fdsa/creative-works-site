interface ProcessStep {
  title: string;
  desc?: string;
}

interface ProcessStepsProps {
  steps: ProcessStep[];
  columns?: number;
}

export default function ProcessSteps({ steps }: ProcessStepsProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {steps.map((step, i) => (
        <div
          key={i}
          className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 flex flex-col gap-3"
        >
          <span className="w-9 h-9 rounded-full bg-gradient-to-br from-orange to-orange-burnt text-white flex items-center justify-center font-display font-extrabold text-base">
            {i + 1}
          </span>
          <h3 className="font-display font-bold text-lg text-navy-midnight mt-1">
            {step.title}
          </h3>
          {step.desc && (
            <p className="text-sm text-gray-600 leading-relaxed">{step.desc}</p>
          )}
        </div>
      ))}
    </div>
  );
}
