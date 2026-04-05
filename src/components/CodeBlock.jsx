import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import python from "react-syntax-highlighter/dist/esm/languages/hljs/python";

SyntaxHighlighter.registerLanguage("python", python);

const codeStyle = {
  hljs: {
    display: "block",
    overflowX: "auto",
    padding: "0.9rem 1.1rem",
    background: "#f0eeea",
    color: "#2c2c2a",
    fontFamily: '"SF Mono", "Cascadia Code", "Fira Code", "Source Code Pro", "Consolas", monospace',
    fontSize: "0.82rem",
    lineHeight: "1.7",
  },
  "hljs-keyword": { color: "#8b4513", fontWeight: "600" },
  "hljs-built_in": { color: "#1565a0" },
  "hljs-string": { color: "#2e7d32" },
  "hljs-number": { color: "#c66b20" },
  "hljs-comment": { color: "#9e9b93", fontStyle: "italic" },
  "hljs-function": { color: "#1565a0" },
  "hljs-title": { color: "#1565a0" },
  "hljs-params": { color: "#b44553" },
  "hljs-meta": { color: "#6a4fa0" },
  "hljs-decorator": { color: "#6a4fa0" },
  "hljs-literal": { color: "#8b4513", fontWeight: "600" },
};

export default function CodeBlock({ code }) {
  return (
    <div className="rounded-lg border border-cream-300 overflow-hidden">
      <SyntaxHighlighter
        language="python"
        style={codeStyle}
        customStyle={{
          margin: 0,
          borderRadius: "8px",
          border: "none",
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
