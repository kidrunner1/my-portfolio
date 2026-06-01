"use client";

import { motion, useReducedMotion } from "framer-motion";
import { JSX, useEffect, useMemo, useRef, useState } from "react";

type HighlightToken = {
    text: string;
    className: string;
};

export type AnimatedCodeWindowProps = {
    filename?: string;
    language?: string;
    codeContent?: string;
    typingSpeed?: number;
    restartDelay?: number;
    statusLocation?: string;
    tabs?: readonly string[];
    className?: string;
};

const DEFAULT_CODE = `<!doctype html>

<html lang="th">
<head>
  <meta charset="utf-8" />
  <title>MilerDev Course</title>
  <link rel="stylesheet" href="./styles.css" />
</head>
<body>
  <h1>Hello World</h1>
</body>
</html>`;

const CSS_CODE = `* {
  box-sizing: border-box;
}

body {
  margin: 0;
  min-height: 100vh;
  background: #0b1322;
  color: #ffffff;
  font-family: system-ui, sans-serif;
}

h1 {
  color: #38bdf8;
}`;

const JS_CODE = `const title = "KRIT DAOWASET";

function createHero() {
  const heading = document.querySelector("h1");
  heading.textContent = title;
}

createHero();`;

const DEFAULT_TABS = ["index.html", "styles.css", "app.js"] as const;

const CODE_BY_TAB: Record<string, string> = {
    "index.html": DEFAULT_CODE,
    "styles.css": CSS_CODE,
    "app.js": JS_CODE,
};

const LANGUAGE_BY_TAB: Record<string, string> = {
    "index.html": "HTML",
    "styles.css": "CSS",
    "app.js": "JavaScript",
};

function cn(...classes: Array<string | false | null | undefined>): string {
    return classes.filter(Boolean).join(" ");
}

function useTypedCode(
    code: string,
    typingSpeed: number,
    restartDelay: number,
): string {
    const shouldReduceMotion = useReducedMotion();
    const [typedLength, setTypedLength] = useState(0);

    useEffect(() => {
        if (shouldReduceMotion) return;

        let timeoutId: ReturnType<typeof setTimeout>;

        const typeNextCharacter = (nextLength: number) => {
            if (nextLength <= code.length) {
                setTypedLength(nextLength);
                timeoutId = setTimeout(
                    () => typeNextCharacter(nextLength + 1),
                    typingSpeed,
                );
                return;
            }

            timeoutId = setTimeout(() => {
                setTypedLength(0);
                typeNextCharacter(1);
            }, restartDelay);
        };

        timeoutId = setTimeout(() => {
            setTypedLength(0);
            typeNextCharacter(1);
        }, typingSpeed);

        return () => clearTimeout(timeoutId);
    }, [code, restartDelay, shouldReduceMotion, typingSpeed]);

    return shouldReduceMotion ? code : code.slice(0, typedLength);
}

function getCursorPosition(code: string): { line: number; column: number } {
    const lines = code.split("\n");
    const lastLine = lines[lines.length - 1] ?? "";

    return {
        line: Math.max(lines.length, 1),
        column: lastLine.length + 1,
    };
}

function readTagName(
    value: string,
    startIndex: number,
): { token: string; nextIndex: number } {
    let nextIndex = startIndex;

    while (nextIndex < value.length && /[A-Za-z0-9!:-]/.test(value[nextIndex])) {
        nextIndex += 1;
    }

    return {
        token: value.slice(startIndex, nextIndex),
        nextIndex,
    };
}

function readAttribute(
    value: string,
    startIndex: number,
): { tokens: HighlightToken[]; nextIndex: number } {
    const tokens: HighlightToken[] = [];
    let nextIndex = startIndex;

    const whitespaceStart = nextIndex;
    while (nextIndex < value.length && /\s/.test(value[nextIndex])) {
        nextIndex += 1;
    }

    if (nextIndex > whitespaceStart) {
        tokens.push({
            text: value.slice(whitespaceStart, nextIndex),
            className: "text-slate-400",
        });
    }

    if (nextIndex >= value.length) {
        return { tokens, nextIndex };
    }

    if (value[nextIndex] === "/" || value[nextIndex] === ">") {
        tokens.push({
            text: value[nextIndex],
            className: "text-sky-300",
        });

        return { tokens, nextIndex: nextIndex + 1 };
    }

    const attributeStart = nextIndex;
    while (nextIndex < value.length && /[A-Za-z0-9:-]/.test(value[nextIndex])) {
        nextIndex += 1;
    }

    if (nextIndex > attributeStart) {
        tokens.push({
            text: value.slice(attributeStart, nextIndex),
            className: "text-amber-200",
        });
    }

    if (value[nextIndex] === "=") {
        tokens.push({ text: "=", className: "text-slate-400" });
        nextIndex += 1;
    }

    if (value[nextIndex] === '"' || value[nextIndex] === "'") {
        const quote = value[nextIndex];
        const stringStart = nextIndex;
        nextIndex += 1;

        while (nextIndex < value.length && value[nextIndex] !== quote) {
            nextIndex += 1;
        }

        if (value[nextIndex] === quote) {
            nextIndex += 1;
        }

        tokens.push({
            text: value.slice(stringStart, nextIndex),
            className: "text-emerald-300",
        });
    }

    if (attributeStart === nextIndex) {
        tokens.push({
            text: value[nextIndex],
            className: "text-white",
        });
        nextIndex += 1;
    }

    return { tokens, nextIndex };
}

function highlightHtmlLine(line: string): HighlightToken[] {
    const tokens: HighlightToken[] = [];
    let index = 0;

    while (index < line.length) {
        if (line[index] !== "<") {
            const textEnd = line.indexOf("<", index);
            const nextIndex = textEnd === -1 ? line.length : textEnd;

            tokens.push({
                text: line.slice(index, nextIndex),
                className: "text-white",
            });

            index = nextIndex;
            continue;
        }

        tokens.push({ text: "<", className: "text-sky-300" });
        index += 1;

        if (line[index] === "/") {
            tokens.push({ text: "/", className: "text-sky-300" });
            index += 1;
        }

        const tag = readTagName(line, index);
        if (tag.token) {
            tokens.push({ text: tag.token, className: "text-sky-300" });
            index = tag.nextIndex;
        }

        while (index < line.length) {
            const attribute = readAttribute(line, index);
            tokens.push(...attribute.tokens);
            index = attribute.nextIndex;

            if (line[index - 1] === ">") {
                break;
            }
        }
    }

    return tokens;
}

function highlightCodeLine(line: string, activeTab: string): HighlightToken[] {
    if (activeTab.endsWith(".html")) {
        return highlightHtmlLine(line);
    }

    return [{ text: line, className: "text-slate-200" }];
}

export default function AnimatedCodeWindow({
    filename = "index.html",
    language = "HTML",
    codeContent = DEFAULT_CODE,
    typingSpeed = 28,
    restartDelay = 2000,
    statusLocation,
    tabs = DEFAULT_TABS,
    className,
}: AnimatedCodeWindowProps): JSX.Element {
    const [activeTab, setActiveTab] = useState(filename);

    const activeCode = CODE_BY_TAB[activeTab] ?? codeContent;
    const activeLanguage = LANGUAGE_BY_TAB[activeTab] ?? language;

    const typedCode = useTypedCode(activeCode, typingSpeed, restartDelay);
    const shouldReduceMotion = useReducedMotion();
    const editorRef = useRef<HTMLDivElement>(null);

    const cursorPosition = useMemo(() => getCursorPosition(typedCode), [typedCode]);
    const visibleLines = useMemo(() => typedCode.split("\n"), [typedCode]);

    const currentStatusLocation = statusLocation ?? "Ln 8, Col 5";

    useEffect(() => {
        const editor = editorRef.current;
        if (!editor) return;

        editor.scrollTop = editor.scrollHeight;
    }, [typedCode]);

    return (
        <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 22, scale: 0.98 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className={cn("relative w-full", className)}
        >
            <div
                className="absolute -inset-5 rounded-[28px] bg-[radial-gradient(circle_at_18%_0%,rgba(59,130,246,0.36),transparent_36%),radial-gradient(circle_at_84%_20%,rgba(45,212,191,0.22),transparent_32%)] blur-3xl"
                aria-hidden="true"
            />

            <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-[#070d18] shadow-[0_24px_90px_rgba(37,99,235,0.22),0_18px_50px_rgba(0,0,0,0.45)]">
                <div className="flex min-h-14 items-end gap-3 border-b border-white/10 bg-[#111827] px-4 pt-3 sm:px-5">
                    <div className="mb-3 flex shrink-0 items-center gap-2" aria-hidden="true">
                        <span className="size-3 rounded-full bg-[#ff5f57] shadow-[0_0_16px_rgba(255,95,87,0.36)]" />
                        <span className="size-3 rounded-full bg-[#ffbd2e] shadow-[0_0_16px_rgba(255,189,46,0.28)]" />
                        <span className="size-3 rounded-full bg-[#28c840] shadow-[0_0_16px_rgba(40,200,64,0.28)]" />
                    </div>

                    <div
                        className="flex min-w-0 flex-1 items-end overflow-x-auto"
                        role="tablist"
                        aria-label="Editor file tabs"
                    >
                        {tabs.map((tab) => {
                            const isActive = tab === activeTab;

                            return (
                                <motion.button
                                    key={tab}
                                    type="button"
                                    role="tab"
                                    onClick={() => setActiveTab(tab)}
                                    whileHover={shouldReduceMotion ? undefined : { y: isActive ? 0 : -2 }}
                                    transition={{ duration: 0.18, ease: "easeOut" }}
                                    className={cn(
                                        "relative h-11 min-w-28 shrink-0 rounded-t-[18px] border px-4 text-left font-mono text-xs font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-300",
                                        isActive
                                            ? "z-10 border-blue-300/30 bg-[#0b1322] text-blue-100 shadow-[0_-10px_34px_rgba(59,130,246,0.22)]"
                                            : "border-transparent bg-transparent text-slate-500 hover:bg-white/[0.04] hover:text-slate-300",
                                    )}
                                    aria-selected={isActive}
                                >
                                    {isActive && (
                                        <motion.span
                                            layoutId="active-code-tab"
                                            className="absolute inset-x-4 top-0 h-0.5 rounded-full bg-blue-400 shadow-[0_0_18px_rgba(96,165,250,0.9)]"
                                        />
                                    )}
                                    <span className="relative truncate">{tab}</span>
                                </motion.button>
                            );
                        })}
                    </div>
                </div>

                <div className="bg-[#0b1322]">
                    <div
                        ref={editorRef}
                        className="max-h-[340px] min-h-[340px] overflow-y-auto overflow-x-auto px-3 py-5 [scrollbar-color:#2563eb33_transparent] sm:max-h-[420px] sm:min-h-[420px] sm:px-5"
                        aria-label={`${activeTab} code preview`}
                    >
                        <pre className="font-mono text-[0.76rem] leading-6 text-slate-200 sm:text-[0.84rem]">
                            <code>
                                {visibleLines.map((line, lineIndex) => {
                                    const lineNumber = lineIndex + 1;
                                    const isCurrentLine = lineNumber === cursorPosition.line;
                                    const highlightedLine = highlightCodeLine(line, activeTab);

                                    return (
                                        <span
                                            key={`${activeTab}-${lineNumber}-${line}`}
                                            className={cn(
                                                "grid min-w-max grid-cols-[2.5rem_minmax(0,1fr)] gap-4 rounded-lg px-2",
                                                isCurrentLine && "bg-blue-400/[0.08] ring-1 ring-blue-300/10",
                                            )}
                                        >
                                            <span className="select-none text-right text-slate-600">
                                                {String(lineNumber).padStart(2, "0")}
                                            </span>

                                            <span className="whitespace-pre">
                                                {highlightedLine.map((token, tokenIndex) => (
                                                    <span
                                                        key={`${activeTab}-${lineNumber}-${tokenIndex}-${token.text}`}
                                                        className={token.className}
                                                    >
                                                        {token.text}
                                                    </span>
                                                ))}

                                                {isCurrentLine && (
                                                    <motion.span
                                                        aria-hidden="true"
                                                        animate={
                                                            shouldReduceMotion
                                                                ? { opacity: 1 }
                                                                : { opacity: [1, 1, 0, 0, 1] }
                                                        }
                                                        transition={{
                                                            duration: 1,
                                                            repeat: Infinity,
                                                            ease: "linear",
                                                        }}
                                                        className="ml-0.5 inline-block h-4 w-2 translate-y-0.5 rounded-[2px] bg-blue-300 shadow-[0_0_18px_rgba(147,197,253,0.9)]"
                                                    />
                                                )}
                                            </span>
                                        </span>
                                    );
                                })}
                            </code>
                        </pre>
                    </div>

                    <div className="flex min-h-10 items-center justify-between gap-4 border-t border-blue-300/15 bg-[#0f1f3a] px-4 font-mono text-[0.7rem] font-semibold text-blue-100 sm:px-5">
                        <div className="flex min-w-0 items-center gap-2">
                            <span className="size-2.5 shrink-0 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]" />
                            <span className="truncate">{currentStatusLocation}</span>
                        </div>

                        <div className="flex shrink-0 items-center gap-3 text-blue-100/80">
                            <span>{activeLanguage}</span>
                            <span>UTF-8</span>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
