import { Page } from "@/interfaces/anime";
import { gql, useQuery } from "@apollo/client";

const GET_ANIME_LIST = gql`
  query GetAnimeList($page: Int, $perPage: Int){
    Page(page: $page, perPage: $perPage){
      pageInfo {
        total
        currentPage
        lastPage
        hasNextPage
        perPage
      }      
      media {
        id
        title {
          romaji
          english
          native
          userPreferred
        }
        coverImage {
          extraLarge
        }
      }
    }
  }
`

interface AnimeListResponse {
  Page: Page;
}

export const useAnimeList = (page: number, perPage: number) => {
  const { loading, error, data } = useQuery(GET_ANIME_LIST, {
    variables: {
      page, perPage
    }
  })
  return { loading, error, data: data as AnimeListResponse }
}