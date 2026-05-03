import { describe, expect, it, vi } from 'vitest';
import { createElement, isValidElement } from 'react';

vi.mock('react-native-svg', () => {
  const stub = (name: string) => {
    const Component = (props: Record<string, unknown>) => props;
    Component.displayName = name;
    return Component;
  };
  return {
    default: stub('Svg'),
    Circle: stub('Circle'),
    Ellipse: stub('Ellipse'),
    Line: stub('Line'),
    Path: stub('Path'),
    Polygon: stub('Polygon'),
    Polyline: stub('Polyline'),
    Rect: stub('Rect'),
  };
});

import * as Icons from '../src/icons';
import { createIcon } from '../src/createIcon';

const FORWARD_REF_TYPE = Symbol.for('react.forward_ref');

describe('createIcon', () => {
  it('returns a forwardRef component with the given displayName', () => {
    const Foo = createIcon('Foo', [['path', { d: 'M0 0', key: 'svg-0' }]]);
    expect(Foo.displayName).toBe('Foo');
    expect((Foo as { $$typeof?: symbol }).$$typeof).toBe(FORWARD_REF_TYPE);
  });

  it('produces a valid React element when invoked', () => {
    const Foo = createIcon('Foo', [['path', { d: 'M0 0', key: 'svg-0' }]]);
    const el = createElement(Foo, { size: 32, color: 'red' });
    expect(isValidElement(el)).toBe(true);
    expect(el.props.size).toBe(32);
    expect(el.props.color).toBe('red');
  });
});

describe('icon set', () => {
  it('exports the same number of icons as feather-icons ships', async () => {
    const feather = (await import('feather-icons')).default;
    const expectedCount = Object.keys(feather.icons).length;
    const exportedCount = Object.keys(Icons).length;
    expect(exportedCount).toBe(expectedCount);
  });

  it('every export is a forwardRef component with a displayName', () => {
    for (const [name, Icon] of Object.entries(Icons)) {
      expect(Icon, name).toBeDefined();
      expect(
        (Icon as { displayName?: string }).displayName,
        `${name} displayName`,
      ).toBe(name);
      expect(
        (Icon as { $$typeof?: symbol }).$$typeof,
        `${name} $$typeof`,
      ).toBe(FORWARD_REF_TYPE);
    }
  });

  it('exposes well-known icons by their PascalCase name', () => {
    expect(Icons.Activity).toBeDefined();
    expect(Icons.ArrowUpCircle).toBeDefined();
    expect(Icons.ZoomIn).toBeDefined();
    expect(Icons.AlertTriangle).toBeDefined();
  });
});
