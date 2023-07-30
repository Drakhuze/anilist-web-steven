import { useAnimeList } from "@/hooks/useAnimeList";
import { useAnimeTrending } from "@/hooks/useAnimeTrending";
import { Anime } from "@/interfaces/anime";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const AnimeList = () => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const { loading, error, data } = useAnimeList(currentPage, 10);

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  }
  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  }

  return (
    <div>
      {loading && <div>Loading Data...</div>}
      {
        !loading &&
        <div className="text-center">
          <div className="flex flex-wrap justify-center">
            {
              data.Page.media.map((i: Anime) => {
                return (
                  <div key={i.id} className="flex flex-column xl:w-1/5 lg:w-1/4 sm:w-1/3 w-1/2 overflow-x-auto" onClick={() => router.push(`/detail/${i.id}`)}>
                    <div className="flex-1">
                      <div className="m-4 border h-80 text-center">
                        <div className="relative w-full h-full">
                          <Image src={i.coverImage.extraLarge} alt={""} layout="fill" objectFit="cover" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                        </div>
                      </div>
                      <div className="m-4 text-center">
                        {i.title.userPreferred}
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
          <div className="m-2">
            <button className="m-2 px-4 py-2 border" onClick={prevPage}>Prev</button>
            <button className="m-2 px-4 py-2 border" onClick={nextPage}>Next</button>
          </div>
        </div>
      }
    </div>
  )
}

export default AnimeList;