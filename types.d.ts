interface IDynamicContent {
  data: any;
}

interface IButton {
  children: string;
}

interface ITopNav {
  title: string;
  link: string;
}

interface IImageAttributes {
  attributes: {
    url: string;
  }
}

interface IImage {
  data: IImageAttributes
}

interface IImages {
  data: IImageAttributes[]
}

interface IMeta {
  title: string;
  description: string;
}

interface IComponentIcon {
  title: string;
  icon: IImage;
  content: string;
}

interface ILink {
  text: string;
  link: string;
}

interface IComponentArticles {
  title: string;
  image: IImage;
  content: string;
  link: ILink;
}

interface IComponentClients {
  title: string;
  images: IImages;
}

interface IPageTop {
  title: string;
  imageUrl: string;
}

// Components?: [
//   {icon: IComponentIcon[]},
//   {articles: IComponentArticles[]},
//   {articles: IComponentArticles[]},
  
// ]

interface IHomepage {
  title: string;
  image: IImage;
  content: string;
  meta: IMeta;
  Components?: any
}

interface IIconItem {
  title: string;
  content: string;
  icon: IImage;
}

interface IArticleShort {
  title: string;
  content: string;
  link: ILink;
  image: IImage;
}

interface IComponentSmallItem {
  title: string;
  content: string;
}

interface IArticlePage {
  title: string;
  content: string;
  meta: IMeta;
  image: IImage;
  components: any;
}