import { CollectionContext } from "@/contexts/CollectionContext";
import { useAnimeDetail } from "@/hooks/useAnimeDetail";
import { useRouter } from "next/router"
import { useContext } from "react";

const AnimeDetail = () => {
  const router = useRouter();
  const animeId = Number(router.query.animeId) | 0;

  const { loading, error, data } = useAnimeDetail(animeId);

  return (
    <div>
      {loading && <div>Loading...</div>}
      {!loading &&
        <div className="">
          <div>
            {data.Media.title.userPreferred}
          </div>
          <div>
            {data.Media.description}
          </div>
          <div>
            
          </div>
        </div>
      }
    </div>
  )

}

export default AnimeDetail;