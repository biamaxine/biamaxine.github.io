import { SocialMediaIcon, TechnologyIcon } from '../types/icon.type';

export interface Server {
  projects: Project[];
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  medias: {
    ico: SocialMediaIcon;
    link?: string;
  }[]
  tech: {
    ico: TechnologyIcon;
    link?: string;
  }[]
  files: {
    pdf?: string;
    img?: string;
    doc?: string;
  }
  resume: {
    article_left: string[];
    article_right: string[];
  }
}
