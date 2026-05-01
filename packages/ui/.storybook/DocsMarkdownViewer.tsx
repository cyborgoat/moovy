import type { ReactNode } from "react";
import { Markdown } from "@storybook/addon-docs/blocks";

type DocsMarkdownViewerProps = {
  content?: string;
  children?: ReactNode;
  copyLabel?: string;
  copyText?: string;
  className?: string;
};

const copyToClipboard = async (text: string) => {
  await navigator.clipboard.writeText(text);
};

export const DocsMarkdownViewer = ({
  content,
  children,
  copyText,
  copyLabel = "Copy",
  className = "",
}: DocsMarkdownViewerProps) => {
  const hasCopyText = Boolean(copyText);
  const rootClass = [
    "shadcn-docs__markdown-viewer",
    hasCopyText ? "shadcn-docs__markdown-viewer--with-copy" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={`${rootClass} shadcn-docs__markdown`}>
      {hasCopyText ? (
        <div className="shadcn-docs__markdown-copy-host">
          <Markdown>{content}</Markdown>
          <button
            type="button"
            className="shadcn-docs__markdown-copy-button"
            title={`${copyLabel} source`}
            aria-label={`${copyLabel} source`}
            onClick={() => {
              void copyToClipboard(copyText || "");
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className="shadcn-docs__markdown-copy-icon"
            >
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
            </svg>
          </button>
        </div>
      ) : children ? (
        <>{children}</>
      ) : (
        <Markdown>{content}</Markdown>
      )}
    </div>
  );
};
