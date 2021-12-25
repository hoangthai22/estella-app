import React from "react";

export const AppContext = React.createContext();

export default function AppProvider({ children }) {

  return (
    <AppContext.Provider
      value={{
       
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
