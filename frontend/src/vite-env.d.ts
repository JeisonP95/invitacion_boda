/// <reference types="vite/client" />
/// <reference types="vite/client" />

declare module '*.svg' {
    const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
    export default ReactComponent;
  }
  