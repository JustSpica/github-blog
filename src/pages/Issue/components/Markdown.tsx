import React from "react";
import ReactMarkdown, { Components } from "react-markdown";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";
import tsx from "react-syntax-highlighter/dist/cjs/languages/prism/tsx";
import typescript from "react-syntax-highlighter/dist/cjs/languages/prism/typescript";
import scss from "react-syntax-highlighter/dist/cjs/languages/prism/scss";
import bash from "react-syntax-highlighter/dist/cjs/languages/prism/bash";
import markdown from "react-syntax-highlighter/dist/cjs/languages/prism/markdown";
import json from "react-syntax-highlighter/dist/cjs/languages/prism/json";
import jsx from "react-syntax-highlighter/dist/cjs/languages/prism/jsx";

SyntaxHighlighter.registerLanguage("tsx", tsx);
SyntaxHighlighter.registerLanguage("jsx", jsx);
SyntaxHighlighter.registerLanguage("typescript", typescript);
SyntaxHighlighter.registerLanguage("scss", scss);
SyntaxHighlighter.registerLanguage("bash", bash);
SyntaxHighlighter.registerLanguage("markdown", markdown);
SyntaxHighlighter.registerLanguage("json", json);

export interface MarkdownProps {
  content: string;
}

export function Markdown({ content }: MarkdownProps) {
  const MarkdownComponent: Components = {
    code({ node, inline, className, children, ...props }) {
      const match = /language-(\w+)/.exec(className || "");

      return !inline && match ? (
        <SyntaxHighlighter
          style={dracula as any}
          customStyle={{
            fontFamily: "Nunito, sans-serif",
            backgroundColor: "#112131",
          }}
          language={match[1]}
          showLineNumbers
          codeTagProps={{
            style: { fontFamily: "inherit", letterSpacing: "1px" },
          }}
          {...props}
        >
          {String(children)}
        </SyntaxHighlighter>
      ) : (
        <code className={className || ""} {...props}>
          {children}
        </code>
      );
    },
  };

  return (
    <ReactMarkdown
      className="px-8 py-10 text-slate-200 whitespace-pre-wrap"
      components={MarkdownComponent}
    >
      {content}
    </ReactMarkdown>
  );
}
