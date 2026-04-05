import CodeBlock from "./CodeBlock";

export default function ContentPanel({ section, subsection }) {
  if (!section || !subsection) {
    return null;
  }

  return (
    <div className="max-w-3xl mx-auto">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 mb-6 text-[0.78rem] text-ink-muted">
        <span>{section.title}</span>
        <span>›</span>
        <span className="text-teal-600 font-medium">{subsection.title}</span>
      </div>

      {/* Card */}
      <div className="bg-white border border-cream-300 rounded-xl shadow-sm overflow-hidden">
        {/* Header */}
        <div className="px-6 py-4 border-b border-cream-300 bg-cream-50">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-ink tracking-tight">
              {subsection.title}
            </h2>
            <span className="text-[0.68rem] px-2.5 py-1 rounded-md bg-teal-600/8 text-teal-600 font-semibold uppercase tracking-wider">
              {section.tag}
            </span>
          </div>
        </div>

        {/* Body */}
        <div className="px-6 py-5">
          {/* Description */}
          <p className="text-[0.84rem] text-ink-light leading-relaxed mb-4">
            {renderDesc(subsection.desc)}
          </p>

          {/* Code */}
          <CodeBlock code={subsection.code} />
        </div>
      </div>
    </div>
  );
}

function renderDesc(text) {
  // Split on backtick-wrapped code and render as inline code spans
  const parts = text.split(/(`[^`]+`)/g);
  return parts.map((part, i) => {
    if (part.startsWith("`") && part.endsWith("`")) {
      return (
        <code
          key={i}
          className="bg-teal-600/8 text-teal-600 px-1.5 py-0.5 rounded text-[0.82em] font-medium"
        >
          {part.slice(1, -1)}
        </code>
      );
    }
    return part;
  });
}
