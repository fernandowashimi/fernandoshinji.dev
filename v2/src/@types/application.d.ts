declare module '*.svg' {
  const content: any;
  export default content;
}

declare namespace Application {
  interface Map<T> {
    [key: string]: T;
  }
}

declare namespace Theme {
  type Mode = 'light' | 'dark';

  interface ProviderProps {
    children: React.ReactNode;
  }

  interface Context {
    mode: Mode;
    toggle: () => void;
  }
}

declare namespace Layout {
  interface Props {
    children: React.ReactNode;
    title: string;
  }
}

declare namespace Icon {
  interface Props {
    url: string;
    icon: 'github' | 'instagram' | 'linkedin' | 'mail' | 'spotify';
  }
}

declare namespace Card {
  interface Props {
    name: string;
    html_url: string;
    description: string | null;
    homepage: string | null | undefined;
    language: string | null | undefined;
  }
}
