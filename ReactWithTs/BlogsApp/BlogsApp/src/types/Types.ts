export interface BlogInterface {
  image: string;
  title: string;
  description: string;
  date: string;
}

export interface BlogsContextInterface {
  Blogs: BlogInterface[];
  setBlogs: (state: BlogInterface[]) => void;
}
