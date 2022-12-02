export interface IArtwork {
  artistDisplay: string;
  dateDisplay: string;
  id: number;
  artistTitle: string;
  title: string;
  imageId: string;
  mediumDisplay?: string;
}

interface IConfig {
  iiifUrl: string;
  websiteUrl: string;
}

interface IPagination {
  currentPage: number;
  limit: number;
  offset: number;
  totalPages: number;
}

export interface IArtworkResponse<T> {
  config: IConfig;
  data: T;
  pagination: IPagination;
}
