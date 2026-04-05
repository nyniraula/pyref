import {
  List,
  Type,
  Parentheses,
  CircleDot,
  Asterisk,
  Zap,
  Layers,
  Braces,
  Infinity,
  Paintbrush,
  BookOpen,
  FileText,
  FileJson2,
  Clock,
} from "lucide-react";

const iconMap = {
  lists: List,
  strings: Type,
  "string-methods": Type,
  "string-features": Type,
  dictionaries: BookOpen,
  tuples: Parentheses,
  sets: CircleDot,
  "args-kwargs": Asterisk,
  lambda: Zap,
  "map-filter-reduce": Layers,
  comprehensions: Braces,
  generators: Infinity,
  decorators: Paintbrush,
  "file-handling": FileText,
  json: FileJson2,
  datetime: Clock,
};

// Flatten sections into cards: if a section has children, show children as cards.
// If it's a leaf section (has subsections directly), show the section itself.
function flattenForGrid(data) {
  const cards = [];
  for (const section of data) {
    if (section.children) {
      // Show each child as its own card
      for (const child of section.children) {
        cards.push(child);
      }
    } else if (section.subsections) {
      cards.push(section);
    }
  }
  return cards;
}

export default function LandingPage({ data, onSelect }) {
  const cards = flattenForGrid(data);

  return (
    <div className="max-w-4xl mx-auto">
      {/* Hero */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-extrabold text-ink tracking-tight mb-3">
          <span className="text-teal-600">Python</span> Cheatsheet
        </h1>
        <p className="text-ink-light text-sm max-w-lg mx-auto leading-relaxed">
          An interactive reference covering Python's core data structures,
          functional tools, and metaprogramming patterns. Click any topic to
          dive in.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
        {cards.map((section) => {
          const Icon = iconMap[section.id] || List;
          return (
            <button
              key={section.id}
              onClick={() => {
                if (section.subsections && section.subsections.length > 0) {
                  onSelect(section.id, section.subsections[0].id);
                }
              }}
              className="
                group text-left p-4 rounded-xl border border-cream-300
                bg-white hover:border-teal-600/40 hover:shadow-md
                transition-all duration-200 ease-out
              "
            >
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-teal-600/8 text-teal-600 group-hover:bg-teal-600/12 transition-colors flex-shrink-0">
                  <Icon size={18} strokeWidth={2} />
                </div>
                <div className="min-w-0">
                  <h3 className="font-bold text-sm text-ink group-hover:text-teal-600 transition-colors truncate">
                    {section.title}
                  </h3>
                  <p className="text-[0.75rem] text-ink-muted mt-0.5 line-clamp-2">
                    {section.description}
                  </p>
                  <span className="inline-block mt-2 text-[0.65rem] px-2 py-0.5 rounded bg-cream-200 text-ink-light font-medium uppercase tracking-wider">
                    {section.tag}
                  </span>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
