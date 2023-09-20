import React, { useState } from "react";
import Sidebar from "../partials/Sidebar.jsx"
import { TEInput, TERipple } from "tw-elements-react";

import Header from "../partials/Header.jsx"


const Configuration = () => {

  const [sidebarOpen, setSidebarOpen] = useState(false);




  const [organization, setOrganization] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [logo, setLogo] = useState('');
  const [address, setAddress] = useState('');
  const [gst,  setGST] = useState('');
  const [description, setDescription] = useState('');
  const [tin,  setTin] = useState('');
  const [ass,  setAss] = useState('');

  

  const handleOrganizationChange = (event) => {
    setOrganization(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleContactChange = (event) => {
    setContact(event.target.value);
  };

  const handleLogoChange = (event) => {
    setLogo(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleGSTChange = (event) => {
    setGST(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleTINChange = (event) => {
    setTin(event.target.value);
  };

  const handleASSChange = (event) => {
    setAss(event.target.value);
  };

  const handleOrganization = (event) => {
    event.preventDefault();
    // Process and save configuration data here
  };


  function openNewPage() {
    // Create a new blank page or an empty HTML page
    const newPage = window.open('', '_blank');
    
    // You can add content to the new page using newPage.document.write()
    newPage.document.write('hiiiii ');
    
    
    
    
   
    
    // Close the document to ensure it's properly rendered
    newPage.document.close();
  }
  

  return (
              
    <div className="flex h-screen overflow-hidden">
        {/* Sidebar */}
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        {/* Content area */}
        <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
          {/*  Site header */}
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />


<main>

    <div className="container   w-full mb-0 px-2 md:px-4 py-3 max-w-full flex-grow flex-1  sm-auto ">
      <form className=" lg:bg-white p-8 ">
        <h3 className="text-2xl font-semibold mb-4">Configurations</h3>
        <hr className="h-px my-2 border-solid dark:bg-gray-700"/>
        <br />
        <div className="md:flex space-x-4 sm:px-2 md:shrink-0">
          <button onClick={handleOrganization} variant="contained" className=" md:shrink-0 bg-white-500 hover:bg-blue-600 text-xs sm:text-sm=true text-black font-semibold py-2 sm:px-4 rounded-s-lg ">
           ORGANIZATIONS
            </button>
              <button onClick={openNewPage} variant="contained" className=" md:shrink-0 bg-white-500 hover:bg-blue-600 text-xs sm:text-sm=true text-black font-semibold py-2 px-4 rounded-s-lg ">
          SIDEBAR
        </button>
         <button  onClick={openNewPage} variant="contained" className=" md:shrink-0 bg-white-500 hover:bg-blue-600 text-xs sm:text-sm=true text-black font-semibold py-2 px-4 rounded-s-lg  ">
              PAGES
         </button>
                <button  onClick={openNewPage} variant="contained" className="  md:shrink-0 bg-white-500 hover:bg-blue-600 text-xs sm:text-sm=true text-black font-semibold py-2 px-4 rounded-s-lg  ">
       TABS
         </button>
       <button  onClick={openNewPage} variant="contained" className=" md:shrink-0 bg-white-500 hover:bg-blue-600 text-xs sm:text-sm=true text-black font-semibold py-2 px-4 rounded-s-lg  ">
              ACTIVITIES
         </button>
          <button  onClick={openNewPage} variant="contained" className=" md:shrink-0 bg-white-500 :hover:bg-blue-600 text-xs sm:text-sm=true text-black font-semibold py-2 px-4 rounded-s-lg  ">
          ROLES
           </button>
          <button  onClick={openNewPage} variant="contained" className="  md:shrink-0 bg-white-500 :hover:bg-blue-600 text-xs sm:text-sm=true text-black font-semibold py-2 sm:px-4 rounded-s-lg  ">
         CONTROL PANEL
    </button>
  </div>
  <br />
  <hr text-xs="true"/>
  <br />
  < div className="flex-auto grid md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-4 mt-1">
          <div className=" flex-auto grid flex-grow">
       <div className="mb-4  ">
          <label htmlFor="OrganizationName" className="block font-medium mb-2 text-xs sm:text-sm=true ">Organization Name</label>
          <TEInput
             tabIndex={1}
            type="text"
            id="organization"
            value={organization}
            onChange={handleOrganizationChange}
            className=" px-4 py-2 rounded-lg border border-gray-300 focus:outline-none "
            autoComplete="none"
            required
          />
        </div> </div>
        <div className="mb-4 mr-4">
          <label htmlFor="email" className="block font-medium mb-2 text-xs sm:text-sm=true ">Email</label>
          <TEInput
             tabIndex={2}
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none "
            autoComplete="none"
            required
          />
        </div>
        <div className="mb-4 mr-4">
          <label htmlFor="contactno" className="block font-medium mb-2 text-xs sm:text-sm=true">Contact No</label>
          <TEInput
             tabIndex={3}
            type="Number"
            id="contact"
            value={contact}
            onChange={handleContactChange}
            className=" px-4 py-2 rounded-lg border border-gray-300 focus:outline-none "
            autoComplete="none"
            required
          />
        </div> 
        <div className="mb-4 mr-4 ">
          <label htmlFor="logo" className="block font-medium mb-2 text-xs sm:text-sm=true">Logo</label>
          <TEInput
           tabIndex={4}
            type="file"
            id="logo"
            value={logo}
            onChange={handleLogoChange}
            className=" px-4 py-2 rounded-lg border border-gray-300 focus:outline-none "
            autoComplete="none"
            required
          />
        </div>
        {/* </div> */}

        {/* <div className='flex items-center  gap-4 sm:px-2'> */}

        <div className="mb-4 mr-4">
          <label htmlFor="address" className="block font-medium mb-2 text-xs sm:text-sm=true">Address</label>
          <TEInput
           tabIndex={5}
            type="text"
            id="address"
            value={address}
            onChange={handleAddressChange}
            className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none "
            autoComplete="none"
            required
          />
        </div>
        <div className="mb-4 mr-4">
          <label htmlFor="gstno" className="block font-medium mb-2 text-xs sm:text-sm=true">GST No.</label>
          <TEInput
           tabIndex={6}
            type="number"
            id="gst"
            value={gst}
            onChange={handleGSTChange}
            className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none "
            autoComplete="none"
            required
          />
        </div>
        <div className="mb-4 mr-4">
          <label htmlFor="tin" className="block font-medium mb-2 text-xs sm:text-sm=true">TIN</label>
          <TEInput
           tabIndex={7}
            type="text"
            id="tin"
            value={tin}
            onChange={handleTINChange}
            className=" px-4 py-2 rounded-lg border border-gray-300 focus:outline-none "
            autoComplete="none"
            required
          />
        </div>
        <div className="mb-4 mr-4 ">
          <label htmlFor="description" className="block font-medium mb-2 ">Description</label>
          <TEInput
           tabIndex={8}
            type="text"
            id="description"
            value={description}
            onChange={handleDescriptionChange}
            className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none "
            autoComplete="none"
            required
          />
        </div>
       
        {/* </div> */}
        <div className="mb-4 mr-2 ">
          <label  htmlFor="ass"  className="block font-medium mb-2 ">ASS</label>
          <TEInput
           tabIndex={9}
            type="text"
            id="ass"
            value={ass}
          
            onChange={handleASSChange}
            className=" px-4 py-2 rounded-lg border border-gray-300 focus:outline-none "
            autoComplete="none"
            required
          />
         
        </div> </div>
        <div className='flex  justify-center gap-4 relative  '>
        <button 
          type="submit"
          className="inline-block rounded bg-blue-600 px-7 pb-2.5 pt-3 text-sm hover:bg-white hover:text-blue-600 font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
        >
          Add
        </button> 
       
     
        <button
          type="submit"
          className="bg-red-500 hover:bg-blue-600 text-white px-4 py-2 rounded "
        >
          Cancel
        </button>
        </div>
        <br />


      

                      {/* /table code */}
<body class="bg-gray-100   table-auto mt-2 flex flex-col ">
  <div class="container table-auto p-6 -my-2 overflow-x-auto -mx-4 sm:-mx-6 lg:-mx-8 ">
    <table class="min-w-full bg-white border  divide-y ">
      <thead>
        <tr class="bg-gray-200">
          <th class="border px-4 py-2">ORGANIZATION NAME</th>
          <th class="border px-4 py-2">EMAIL</th>
          <th class="border px-4 py-2">CONTACT NO</th>
          <th class="border px-4 py-2">LOGO</th>
          <th class="border px-4 py-2">ADDRESS</th>
          <th class="border px-4 py-2">GST NO.</th>
          <th class="border px-4 py-2">TIN</th>
          <th class="border px-4 py-2">DESCRIPTION</th>
          <th class="border px-4 py-2">CREATED AT</th>
          <th class="border px-4 py-2">UPDATED AT</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="border px-4 py-2">Data 1</td>
          <td class="border px-4 py-2">Data 2</td>
          <td class="border px-4 py-2">Data 3</td>
          <td class="border px-4 py-2">Data 4</td>
          <td class="border px-4 py-2">Data 5</td>
          <td class="border px-4 py-2">Data 6</td>
          <td class="border px-4 py-2">Data 7</td>
          <td class="border px-4 py-2">Data 8</td>
          <td class="border px-4 py-2">Data 9</td>
          <td class="border px-4 py-2">Data 10</td>
        </tr>
        
      </tbody>
    </table>
  </div>
</body>





























      </form>
    </div></main>
    </div></div>
    
  );
};




export default Configuration;