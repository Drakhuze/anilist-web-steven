export interface Page {
  media: Anime[];
  pageInfo: PageInfo;
}

export interface Anime {  
  id: number
  title: Title
  coverImage: CoverImage;
}

export interface Title {
  romaji: string;
  english: string;
  native: string;
  userPreferred: string;
}

export interface CoverImage {
  extraLarge: string;
}

export interface PageInfo {
  currentPage: number;
  hasNextPage: boolean;
  lastPage: number;
  perPage: number;
  total: number;
}

export interface AnimeDetail {
  id: number
  title: Title
  description: string
  episodes: number
  status: string
  coverImage: CoverImage
  bannerImage: any
  genres: string[]
  averageScore: number
}
