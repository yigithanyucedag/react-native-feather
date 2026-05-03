import type * as React from 'react';
import { createElement, forwardRef } from 'react';
import Svg, {
  Circle,
  Ellipse,
  Line,
  Path,
  Polygon,
  Polyline,
  Rect,
  type SvgProps,
} from 'react-native-svg';

type ElementTag =
  | 'circle'
  | 'ellipse'
  | 'line'
  | 'path'
  | 'polygon'
  | 'polyline'
  | 'rect';

const elementMap: Record<ElementTag, React.ComponentType<Record<string, unknown>>> = {
  circle: Circle as never,
  ellipse: Ellipse as never,
  line: Line as never,
  path: Path as never,
  polygon: Polygon as never,
  polyline: Polyline as never,
  rect: Rect as never,
};

export type IconNode = ReadonlyArray<
  readonly [tag: ElementTag, attrs: Record<string, string | number>]
>;

export interface IconProps
  extends Omit<SvgProps, 'width' | 'height' | 'stroke' | 'fill' | 'color'> {
  /** Sets both width and height. Defaults to `24`. */
  size?: number | string;
  /** Stroke color of the icon outline. Aliased to `stroke`. Defaults to `"currentColor"`. */
  color?: string;
  /** Width of the stroke. Defaults to `2`. */
  strokeWidth?: number | string;
  /**
   * When true, scales the stroke down as the icon grows so the perceived
   * stroke weight stays constant across sizes (`strokeWidth * 24 / size`).
   */
  absoluteStrokeWidth?: boolean;
  /** Overrides `size` for width only. */
  width?: number | string;
  /** Overrides `size` for height only. */
  height?: number | string;
  /** Fill color. Defaults to `"none"` (Feather icons are line-based). */
  fill?: string;
  testID?: string;
}

export type IconRef = React.ElementRef<typeof Svg>;

export type IconComponent = React.ForwardRefExoticComponent<
  IconProps & React.RefAttributes<IconRef>
>;

export const createIcon = (
  displayName: string,
  iconNode: IconNode,
): IconComponent => {
  const Component = forwardRef<IconRef, IconProps>(
    (
      {
        size = 24,
        color = 'currentColor',
        strokeWidth = 2,
        absoluteStrokeWidth,
        width,
        height,
        fill = 'none',
        ...rest
      },
      ref,
    ) =>
      createElement(
        Svg,
        {
          ref,
          width: width ?? size,
          height: height ?? size,
          viewBox: '0 0 24 24',
          fill,
          stroke: color,
          strokeWidth: absoluteStrokeWidth
            ? (Number(strokeWidth) * 24) / Number(size)
            : strokeWidth,
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          ...rest,
        },
        iconNode.map(([tag, attrs]) => createElement(elementMap[tag], attrs)),
      ),
  );
  Component.displayName = displayName;
  return Component;
};
