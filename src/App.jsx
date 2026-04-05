import { useState, useCallback } from "react";
import { cheatsheetData } from "./data/cheatsheetData";
import Sidebar from "./components/Sidebar";
import ContentPanel from "./components/ContentPanel";
import LandingPage from "./components/LandingPage";

// Recursively find subsection by id across nested data
function findSubsection(sections, subId) {
  for (const section of sections) {
    if (section.subsections) {
      const sub = section.subsections.find((s) => s.id === subId);
      if (sub) return { section, subsection: sub };
    }
    if (section.children) {
      const result = findSubsection(section.children, subId);
      if (result) return result;
    }
  }
  return null;
}

export default function App() {
  const [activeSubId, setActiveSubId] = useState(null);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [expandedSections, setExpandedSections] = useState({});

  // Find the active section and subsection
  const found = activeSubId ? findSubsection(cheatsheetData, activeSubId) : null;
  const activeSection = found?.section || null;
  const activeSubsection = found?.subsection || null;

  const handleSelect = useCallback((subId) => {
    setActiveSubId(subId);
  }, []);

  const handleLandingSelect = useCallback((sectionId, subId) => {
    setActiveSubId(subId);

    // Find the path to the selected section ID and expand only those nodes
    const newExpanded = {};
    const walk = (sections, path) => {
      for (const s of sections) {
        const currentPath = [...path, s.id];
        if (s.id === sectionId) {
          currentPath.forEach((id) => {
            newExpanded[id] = true;
          });
          return true; // found
        }
        if (s.children) {
          if (walk(s.children, currentPath)) return true;
        }
      }
      return false;
    };
    walk(cheatsheetData, []);
    setExpandedSections(newExpanded);
  }, []);

  const handleGoHome = useCallback(() => {
    setActiveSubId(null);
  }, []);

  // Count all subsections recursively
  const countSubs = (sections) =>
    sections.reduce((sum, s) => {
      let count = s.subsections ? s.subsections.length : 0;
      if (s.children) count += countSubs(s.children);
      return sum + count;
    }, 0);

  return (
    <div className="min-h-screen bg-cream-100">
      <Sidebar
        data={cheatsheetData}
        activeId={activeSubId}
        onSelect={handleSelect}
        collapsed={sidebarCollapsed}
        onToggleCollapse={() => setSidebarCollapsed((c) => !c)}
        expandedSections={expandedSections}
        setExpandedSections={setExpandedSections}
      />

      {/* Main Content */}
      <main
        className={`
          transition-all duration-300 ease-in-out min-h-screen
          ${sidebarCollapsed ? "ml-12" : "ml-72"}
        `}
      >
        {/* Top bar */}
        <header className="sticky top-0 z-40 bg-cream-100/80 backdrop-blur-sm border-b border-cream-300">
          <div className="px-8 py-3 flex items-center justify-between">
            <button
              onClick={handleGoHome}
              className="text-sm font-bold text-ink hover:text-teal-600 transition-colors"
            >
              <span className="text-teal-600">⌂</span> Home
            </button>
            <span className="text-[0.72rem] text-ink-muted">
              {cheatsheetData.length} topics · {countSubs(cheatsheetData)} entries
            </span>
          </div>
        </header>

        <div className="px-8 py-8">
          {activeSubsection ? (
            <ContentPanel
              section={activeSection}
              subsection={activeSubsection}
            />
          ) : (
            <LandingPage
              data={cheatsheetData}
              onSelect={handleLandingSelect}
            />
          )}
        </div>
      </main>
    </div>
  );
}
