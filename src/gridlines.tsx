import React, { useEffect, useState } from "react";
import buildGridSvg from "./svg-builder";

interface GridLinesProps {
  className?: string;
  component?: React.ElementType;
  cellWidth?: number | string;
  cellHeight?: number | string;
  format?: string;
  orientation?: string;
  lineColor?: string;
  strokeWidth?: number | string;
  dashArray?: string;
  cellWidth2?: number | string;
  cellHeight2?: number | string;
  lineColor2?: string;
  strokeWidth2?: number | string;
  scale?: number | string;
  dashArray2?: string;
  children?: React.ReactNode;
}

const GridLines: React.FC<GridLinesProps> = React.forwardRef((props, ref) => {
  const {
    component = "div",
    className,
    scale = 1,
    cellWidth = 60,
    cellHeight,
    lineColor = "#ccc",
    strokeWidth = 2,
    dashArray = "0",
    cellWidth2,
    cellHeight2,
    lineColor2 = "#ddd",
    strokeWidth2 = 1,
    dashArray2 = "0",
    format,
    orientation,
    children,
    ...rest
  } = props;
  const [bg, setBg] = useState("");
  const h = cellHeight || cellWidth;
  const h2 = cellHeight2 || cellWidth2;
  const ComponentProp = component;

  useEffect(() => {
    setBg(
      buildGridSvg(
        cellWidth,
        h,
        lineColor,
        strokeWidth,
        dashArray,
        cellWidth2,
        h2,
        lineColor2,
        strokeWidth2,
        dashArray2,
        scale,
        format,
        orientation
      )
    );
  }, [
    cellWidth,
    h,
    lineColor,
    strokeWidth,
    dashArray,
    cellWidth2,
    h2,
    lineColor2,
    strokeWidth2,
    dashArray2,
    format,
    orientation,
    scale
  ]);

  return (
    <ComponentProp
      className={className}
      ref={ref}
      style={{
        backgroundImage: bg
      }}
      {...rest}
    >
      {children}
    </ComponentProp>
  );
});

export default GridLines;
