import { gql, useQuery } from "@apollo/client";

const GET_ANIME_TRENDING = gql`
  query GetAnimeList($page: Int, $perPage: Int){
    Page(page: $page, perPage: $perPage){
      pageInfo {
        total
        currentPage
        lastPage
        hasNextPage
        perPage
      }
      
      media(sort: POPULARITY_DESC) {
        id
        title {
          romaji
        }
        coverImage {
          extraLarge
        }
        bannerImage
        description(asHtml:false)
      }
    }
  }
`

export const useAnimeTrending = (page: number, perPage: number) => {
  const { data, error, loading } = useQuery(GET_ANIME_TRENDING, {
    variables: {
      page, perPage
    }
  })
  return { data, error, loading }
}