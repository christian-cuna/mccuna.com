export interface IPageContext {
  next?: INavigationLink;
  prev?: INavigationLink;
}

interface INavigationLink {
  frontmatter: {
    title: string;
  };
  fields: {
    blogSlug: string;
  };
}
