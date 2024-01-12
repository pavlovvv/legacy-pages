"use client";

import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import store from "../redux/store";
import { createContext } from "react";
import { useContext } from "react";
import { IUserState } from "../typescript/interfaces/data";

const LayoutContext = createContext({ user: {} });

export const Providers = ({
  children,
  ...props
}: {
  children: React.ReactNode;
  user: IUserState;
}) => {
  return (
    <SessionProvider>
      <Provider store={store}>
        <LayoutContext.Provider value={props}>
          {children}
        </LayoutContext.Provider>
      </Provider>
    </SessionProvider>
  );
};

export const useUserData = () => {
  return useContext(LayoutContext);
};
