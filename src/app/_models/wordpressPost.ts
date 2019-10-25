export interface WordpressPost {
  id: string;
  date: Date;
  modified: Date;
  title: string;
  excerpt: string;
  author: string;
  categories: string[];
  tags: string[];
  imageUrl: string;
  content: string;
}

export interface WordpressObject {
  rendered: string;
  protected: boolean;
}
