import AnimeList from "@/components/dashboard/AnimeList";
import { CollectionContext } from "@/contexts/CollectionContext";
import { Collection } from "@/interfaces/context";
import { useContext } from "react";

const Home = () => {
  return (
    <div>
      <AnimeList />
    </div>
  )
}

export default Home;