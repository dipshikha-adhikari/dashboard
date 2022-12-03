import React from "react";
import { useContext } from "react";
import { useState } from "react";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);


  function handleSidebar(e) {
    setIsSidebarOpen(prev => !prev);
  
 

  
  }




  
  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        handleSidebar,
        setIsSidebarOpen
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
