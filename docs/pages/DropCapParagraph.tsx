'use client';

import { useEffect, useRef, useState } from 'react';
import {
  prepareWithSegments,
  layoutNextLine,
  walkLineRanges,
  type LayoutCursor,
  type LayoutLine,
} from '@chenglou/pretext';

// pretext uses canvas.measureText — CSS variables are NOT resolved in canvas context.
// These must be actual font names and pixel sizes.
const DEFAULT_BODY_FONT = "16px 'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif";
const DEFAULT_DROP_CAP_FAMILY = "'Playfair Display', Georgia, serif";
// 16px × 1.8 line-height = 28.8, rounded to 29
const DEFAULT_LINE_HEIGHT = 29;

type PositionedLine = {
  x: number;
  y: number;
  text: string;
};

export interface DropCapParagraphProps {
  /** Full paragraph text. The first character becomes the drop cap. */
  children: string;
  /** Number of body lines the drop cap spans. @default 3 */
  dropCapLines?: number;
  /** Extra horizontal gap after the drop cap letter (px). @default 10 */
  dropCapGap?: number;
  /**
   * CSS font string for body text. Must use actual font names and px sizes —
   * CSS variables are not resolved inside canvas.measureText.
   * @default "16px 'Geist', sans-serif"
   */
  bodyFont?: string;
  /** Body line height in px. @default 29 */
  bodyLineHeight?: number;
  /**
   * CSS font-family for the drop cap. Must use actual font names.
   * @default "'Libre Baskerville', Georgia, serif"
   */
  dropCapFontFamily?: string;
  /** Color of the drop cap letter. */
  dropCapColor?: string;
}

export function DropCapParagraph({
  children,
  dropCapLines = 3,
  dropCapGap = 10,
  bodyFont = DEFAULT_BODY_FONT,
  bodyLineHeight = DEFAULT_LINE_HEIGHT,
  dropCapFontFamily = DEFAULT_DROP_CAP_FAMILY,
  dropCapColor = 'var(--mantine-color-deep-ocean-7)',
}: DropCapParagraphProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [lines, setLines] = useState<PositionedLine[]>([]);
  const [dropCapWidth, setDropCapWidth] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);

  // Track container width via ResizeObserver
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    // Read initial width immediately
    setContainerWidth(el.getBoundingClientRect().width);
    const ro = new ResizeObserver(([entry]) => {
      const w = entry?.contentBoxSize[0]?.inlineSize ?? entry?.contentRect.width ?? 0;
      setContainerWidth(w);
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // Run pretext layout after fonts are ready
  useEffect(() => {
    if (containerWidth <= 0 || !children) return;

    const letter = children[0]!;
    const rest = children.slice(1);

    const dropCapSize = bodyLineHeight * dropCapLines - 4;
    const dropCapFont = `700 ${dropCapSize}px ${dropCapFontFamily}`;

    // Wait for fonts before any canvas measurement
    document.fonts.ready.then(() => {
      // Measure drop cap letter width
      const preparedCap = prepareWithSegments(letter, dropCapFont);
      let capW = 0;
      walkLineRanges(preparedCap, 9999, (line) => { capW = line.width; });
      const totalCapWidth = Math.ceil(capW) + dropCapGap;
      setDropCapWidth(totalCapWidth);

      // Layout body text with obstacle-aware line widths
      const preparedBody = prepareWithSegments(rest, bodyFont);
      const result: PositionedLine[] = [];
      let cursor: LayoutCursor = { segmentIndex: 0, graphemeIndex: 0 };
      let lineIndex = 0;

      while (true) {
        const besideDropCap = lineIndex < dropCapLines;
        const lineMaxWidth = besideDropCap ? containerWidth - totalCapWidth : containerWidth;
        const lineX = besideDropCap ? totalCapWidth : 0;

        const line: LayoutLine | null = layoutNextLine(preparedBody, cursor, lineMaxWidth);
        if (line === null) break;

        result.push({ x: lineX, y: lineIndex * bodyLineHeight, text: line.text });
        cursor = line.end;
        lineIndex++;
      }

      setLines(result);
    });
  }, [children, containerWidth, bodyLineHeight, dropCapLines, dropCapGap, bodyFont, dropCapFontFamily]);

  const totalHeight = lines.length * bodyLineHeight;
  const dropCapSize = bodyLineHeight * dropCapLines - 4;
  const dropCapFont = `700 ${dropCapSize}px ${dropCapFontFamily}`;
  const capHeight = bodyLineHeight * dropCapLines;

  return (
    // sr-only span provides full text to screen readers; visual elements are aria-hidden
    <p style={{ margin: 0 }}>
      <span
        style={{
          position: 'absolute',
          width: 1,
          height: 1,
          overflow: 'hidden',
          clip: 'rect(0 0 0 0)',
          whiteSpace: 'nowrap',
        }}
      >
        {children}
      </span>
      <span
        ref={containerRef}
        aria-hidden="true"
        style={{
          display: 'block',
          position: 'relative',
          height: totalHeight || undefined,
        }}
      >
        {/* Drop cap letter */}
        {dropCapWidth > 0 && (
          <span
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              font: dropCapFont,
              lineHeight: `${capHeight}px`,
              color: dropCapColor,
            }}
          >
            {children[0]}
          </span>
        )}
        {/* Pretext-positioned body lines */}
        {lines.map((line, i) => (
          <span
            key={i}
            style={{
              position: 'absolute',
              left: line.x,
              top: line.y,
              font: bodyFont,
              lineHeight: `${bodyLineHeight}px`,
              whiteSpace: 'pre',
            }}
          >
            {line.text}
          </span>
        ))}
      </span>
    </p>
  );
}
