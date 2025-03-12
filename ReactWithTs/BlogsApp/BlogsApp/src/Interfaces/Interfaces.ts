export interface BlogInterface {
  image: string;
  title: string;
  description: string;
  date: string;
}

export interface BlogInterfaceWithIndex extends BlogInterface {
  index: number
}

export interface BlogsContextInterface {
  Blogs: BlogInterface[];
  setBlogs: (state: BlogInterface[]) => void;
}

export interface SidebarContextInterface {
  OpenSidebar: boolean;
}