import React from "react";
import { useContext } from "react";
import { useState } from "react";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);


  function handleSidebar(e) {
    setIsSidebarOpen(prev => !prev);
  // const appContent = e.currentTarget.parentElement.nextElementSibling
  // const sidebar = appContent.children[0]
  // const otherContent = appContent.children[1]
  // const sidebarTop = sidebar.getBoundingClientRect().top
  //  const otherContentTop = otherContent.getBoundingClientRect().top

  // if(sidebarTop <= 64  ){
  //   sidebar.style.marginTop = `${-otherContentTop + 64 }px  ` 
  //   console.log(`add height ${otherContentTop}px`)
  //  }else{
  //   sidebar.style.marginTop = 0
  //   console.log(otherContentTop)
  //  }

  
  }




  
  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        handleSidebar,
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
