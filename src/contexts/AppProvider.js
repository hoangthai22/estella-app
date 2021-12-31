import React, { useEffect, useState } from "react";
import { Categorys, productList } from "../constants/DataMock";

export const AppContext = React.createContext();

export default function AppProvider({ children }) {
  const [currentPage, setCurrentPage] = useState("");
  const [listProducts, setlistProducts] = useState([]);
  const [listProductsCurrent, setListProductsCurrent] = useState([]);
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    setlistProducts(productList);
    setCategoryList(Categorys);
  }, []);

  return (
    <AppContext.Provider
      value={{
        currentPage,
        setCurrentPage,
        listProducts,
        setlistProducts,
        categoryList,
        setCategoryList,
        listProductsCurrent,
        setListProductsCurrent,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
