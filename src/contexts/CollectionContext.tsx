import { LOCAL_STORAGE_KEY } from '@/constants';
import { Collection } from '@/interfaces/context';
import { createContext, useContext, useEffect, useState } from 'react';

interface CollectionContext {
  collectionList: Collection[];
  setCollectionList: (collections: Collection[]) => void;
}

export const CollectionContext = createContext<CollectionContext>({
  collectionList: [],
  setCollectionList: () => { }
});

export function CollectionProvider({ children }: { children: JSX.Element }) {
  const [collectionList, setCollectionList] = useState<Collection[]>([]);

  useEffect(() => {
    // Retrieve the collectionList from localStorage on component mount
    const storedCollectionList = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storedCollectionList) {
      setCollectionList(JSON.parse(storedCollectionList));
    }
    else {
      setCollectionList([
        {
          collectionName: "Test Steven Collection",
          animes: []
        }
      ])
    }
  }, []);

  useEffect(() => {
    // Update localStorage whenever the collectionList changes
    if (collectionList) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(collectionList));
    }
  }, [collectionList]);

  return (
    <CollectionContext.Provider value={{ collectionList, setCollectionList }}>
      {children}
    </CollectionContext.Provider>
  );
}