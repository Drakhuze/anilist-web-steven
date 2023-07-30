import { AnimeDetail } from "@/interfaces/anime";
import { gql, useQuery } from "@apollo/client";

const GET_ANIME_DETAIL = gql`
  query GetAnimeDetail($id: Int) {
    Media(id: $id, type: ANIME) {
      id
      title {
          romaji
          english
          native
          userPreferred
      }
      description
      episodes
      status
      coverImage {
        extraLarge
      }
      bannerImage
      genres
      averageScore
    }
  }
`;

interface AnimeDetailResponse {
  Media: AnimeDetail
}

export const useAnimeDetail = (id: number) => {
  const { data, error, loading } = useQuery(GET_ANIME_DETAIL, {
    variables: {
      id
    }
  })
  return { loading, error, data: data as AnimeDetailResponse }
}