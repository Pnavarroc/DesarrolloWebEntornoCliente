export interface Season {
  season_id: string;
  season_title: string;
}

export interface ApiResponseChapterBySeason {
  data: SeasonDetail[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface SeasonDetail {
  _id: string;
  id: string;
  title: string;
  description: string;
  image: string;
  episode: string;
  season_title: string;
  season_id: string;
  next_episode_id: string;
  next_episode_title: string;
  url: string;
}
