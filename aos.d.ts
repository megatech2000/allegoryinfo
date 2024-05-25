declare module "aos" {
  interface AosOptions {
    duration?: number;
    once?: boolean;
    easing?: string;
    delay?: number;
    offset?: number;
    anchor?: string;
    anchorPlacement?: string;
    mirror?: boolean;
  }

  interface AosInstance {
    init(options?: AosOptions): void;
    refresh(): void;
    refreshHard(): void;
  }

  const AOS: AosInstance;
  export default AOS;
}
