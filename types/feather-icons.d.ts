declare module 'feather-icons' {
  interface FeatherIcon {
    name: string;
    contents: string;
    tags: string[];
    attrs: Record<string, string | number>;
    toSvg(attrs?: Record<string, string | number>): string;
  }

  interface FeatherStatic {
    icons: Record<string, FeatherIcon>;
    replace(attrs?: Record<string, string | number>): void;
    toSvg(name: string, attrs?: Record<string, string | number>): string;
  }

  const feather: FeatherStatic;
  export default feather;
}
