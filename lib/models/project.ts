export interface Project {
  id: string;
  title: string;
  subtitle: string;
  summary: string;
  description: string;
  thumbnail: Thumbnail;
  tags: string[];
  links: Link[] | null;
  isMine: boolean;
  builtAt: string;
  featured: boolean;
  projectType:  "mobile" | "cross-platform" | "web" | "desktop";
  screenshots: Screenshot[];
}

interface Thumbnail {
  url: string;
}

interface Link {
  provider: string;
  link: string;
}

interface Screenshot {
  url: string;
}
