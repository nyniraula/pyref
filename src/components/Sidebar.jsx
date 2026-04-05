import { ChevronRight, ChevronDown, PanelLeftClose, PanelLeft } from "lucide-react";
import { useState } from "react";

export default function Sidebar({
  data,
  activeId,
  onSelect,
  collapsed,
  onToggleCollapse,
  expandedSections,
  setExpandedSections,
}) {
  const toggleSection = (sectionId) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  const expandAll = () => {
    const all = {};
    const walk = (sections) => {
      sections.forEach((s) => {
        all[s.id] = true;
        if (s.children) walk(s.children);
      });
    };
    walk(data);
    setExpandedSections(all);
  };

  const collapseAll = () => {
    setExpandedSections({});
  };

  return (
    <aside
      className={`
        fixed top-0 left-0 h-screen bg-white border-r border-cream-300
        flex flex-col z-50 transition-all duration-300 ease-in-out
        ${collapsed ? "w-12" : "w-72"}
      `}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-3 py-3 border-b border-cream-300 min-h-[52px]">
        {!collapsed && (
          <span className="text-sm font-bold text-teal-600 tracking-tight truncate">
            Python Cheatsheet
          </span>
        )}
        <button
          onClick={onToggleCollapse}
          className="p-1 rounded hover:bg-cream-200 text-ink-light transition-colors flex-shrink-0"
          title={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {collapsed ? <PanelLeft size={18} /> : <PanelLeftClose size={18} />}
        </button>
      </div>

      {collapsed ? null : (
        <>
          {/* Controls */}
          <div className="flex gap-1.5 px-3 py-2 border-b border-cream-300">
            <button
              onClick={expandAll}
              className="text-[0.7rem] px-2 py-1 rounded border border-cream-300 text-ink-light hover:border-teal-600 hover:text-teal-600 transition-colors"
            >
              Expand all
            </button>
            <button
              onClick={collapseAll}
              className="text-[0.7rem] px-2 py-1 rounded border border-cream-300 text-ink-light hover:border-teal-600 hover:text-teal-600 transition-colors"
            >
              Collapse all
            </button>
          </div>

          {/* Nav Tree */}
          <nav className="flex-1 overflow-y-auto sidebar-scroll py-2">
            {data.map((section) => (
              <SectionNode
                key={section.id}
                section={section}
                depth={0}
                activeId={activeId}
                expandedSections={expandedSections}
                onToggle={toggleSection}
                onSelect={onSelect}
              />
            ))}
          </nav>
        </>
      )}
    </aside>
  );
}

function SectionNode({ section, depth, activeId, expandedSections, onToggle, onSelect }) {
  const isExpanded = expandedSections[section.id];
  const hasChildren = section.children && section.children.length > 0;
  const hasSubsections = section.subsections && section.subsections.length > 0;

  // Check if any subsection in this node or its children is active
  const isActiveDeep = checkActiveDeep(section, activeId);

  const indentPx = depth * 16;

  return (
    <div className="mb-0.5">
      {/* Section header */}
      <button
        onClick={() => onToggle(section.id)}
        className={`
          sidebar-item w-full flex items-center gap-1.5 py-1.5
          text-left font-semibold
          hover:bg-cream-200 rounded-md mx-1
          ${depth === 0 ? "text-[0.82rem]" : "text-[0.78rem]"}
          ${isActiveDeep ? "text-teal-600" : "text-ink"}
        `}
        style={{
          width: "calc(100% - 8px)",
          paddingLeft: `${12 + indentPx}px`,
          paddingRight: "12px",
        }}
      >
        {isExpanded ? (
          <ChevronDown size={14} className="flex-shrink-0 text-ink-muted" />
        ) : (
          <ChevronRight size={14} className="flex-shrink-0 text-ink-muted" />
        )}
        <span className="truncate">{section.title}</span>
      </button>

      {/* Children (nested sections like String Methods / String Features) */}
      {isExpanded && hasChildren && (
        <div>
          {section.children.map((child) => (
            <SectionNode
              key={child.id}
              section={child}
              depth={depth + 1}
              activeId={activeId}
              expandedSections={expandedSections}
              onToggle={onToggle}
              onSelect={onSelect}
            />
          ))}
        </div>
      )}

      {/* Subsections (leaf items) */}
      {isExpanded && hasSubsections && (
        <div>
          {section.subsections.map((sub) => (
            <button
              key={sub.id}
              onClick={() => onSelect(sub.id)}
              className={`
                sidebar-item w-full text-left py-1 rounded-md mx-1
                text-[0.76rem] truncate block
                ${
                  activeId === sub.id
                    ? "bg-teal-600/10 text-teal-600 font-semibold"
                    : "text-ink-light hover:bg-cream-200 hover:text-ink"
                }
              `}
              style={{
                width: "calc(100% - 8px)",
                paddingLeft: `${28 + indentPx}px`,
                paddingRight: "12px",
              }}
              title={sub.title}
            >
              {sub.title}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function checkActiveDeep(section, activeId) {
  if (section.subsections) {
    if (section.subsections.some((s) => s.id === activeId)) return true;
  }
  if (section.children) {
    return section.children.some((c) => checkActiveDeep(c, activeId));
  }
  return false;
}
