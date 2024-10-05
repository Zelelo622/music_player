import { createContext, PropsWithChildren, useContext } from "react";
import { HomeStore } from "../modules/home/dal/store";

interface IRootStore {
  HomeStore: HomeStore;
}

export const createStore = (): IRootStore => ({
  HomeStore: new HomeStore()
});

export const StoresContext = createContext<IRootStore | null>(null);

export const useStores = (): IRootStore => {
  const stores = useContext(StoresContext);

  if (!stores) {
    throw new Error(
      "useStores() следует использовать внутри <StoresContext.provider />"
    );
  }

  return stores;
};

export const StoresProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const stores = createStore();

  return (
    <StoresContext.Provider value={stores}>{children}</StoresContext.Provider>
  );
};
