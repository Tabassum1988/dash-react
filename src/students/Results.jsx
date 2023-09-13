import React, { useState } from "react";
import Sidebar from "../partials/Sidebar.jsx"

import Header from "../partials/Header.jsx"

const Results = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (

    <div>
       <div className="flex h-screen overflow-hidden">
        {/* Sidebar */}
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        {/* Content area */}
        <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
          {/*  Site header */}
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          
          <main>
      <h1>results here</h1>  
        </main>
    </div>
    </div>
    </div>

  );
}

export default Results;







                    




















