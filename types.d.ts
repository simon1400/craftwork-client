interface IDynamicContent {
  data: any;
}

interface IButton {
  children: string;
}
interface ICta {
  children: string;
  onClick: () => void
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

interface IContactBlock {
  title: string
  description: string
  cta: {
    text: string
    link: string
  }
  imagePoint: IImage
  map: string
}

interface ISmallItem {
  title: string
  content: string
  image: IImage
  url?: string;
}

interface ISmallItemWrap {
  item: ISmallItem[]
}

interface IMeta {
  title: string;
  description: string;
}

interface IContact {
  title?: string
  phone?: string;
  email?: string;
  content?: string;
}

interface ISingleCarouselItem {
  content: string;
  image: IImage
}

interface ISingleCarousel {
  slides: ISingleCarouselItem[]
}

interface ICarouselItem {
  title: string;
  content: string;
  image: IImage;
}

interface ICarousel {
  items: ICarouselItem[]
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
  cta: ILink;
}

interface IPageTop {
  title: string;
  imageUrl: string;
  smallTitle?: string;
  content?: string; 
  cta?: {
    text: string;
    link: string;
  }
}

// Components?: [
//   {icon: IComponentIcon[]},
//   {articles: IComponentArticles[]},
//   {articles: IComponentArticles[]},
  
// ]

interface IHomepage {
  title: string;
  image: IImage;
  smallTitle: string;
  cta: {
    text: string;
    link: string;
  }
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
  smallTitile: string;
  cta: {
    text: string;
    link: string;
  }
  content: string;
  meta: IMeta;
  image: IImage;
  components: any;
}