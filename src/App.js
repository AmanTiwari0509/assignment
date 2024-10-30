import { useContext, useEffect, useState } from "react";
import { ContectCreator } from "./Context/ContextData";
import UserTable from "./Components/UserTable";

function App() {
  const { toggleTheme, handleToggle,data,dataFetching } = useContext(ContectCreator);

  useEffect(() => {
    dataFetching();
  }, []);

  return <div className="w-full">
    
      <UserTable data={data} />
    
  </div>;
}

export default App;
