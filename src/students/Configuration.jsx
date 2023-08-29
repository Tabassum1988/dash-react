import React, { useState } from 'react';

const Configuration = () => {
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

  const handleSubmit = (event) => {
    event.preventDefault();
    // Process and save configuration data here
  };

  return (
    <div className="container mx-auto p-6">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Configurations</h2>
        <hr />
        <br />
        <div class="flex space-x-4 ">
          <button class="bg-white-500 hover:bg-blue-600 text-black font-semibold py-2 px-4 rounded">
           ORGANIZATIONS
            </button>
              <button class="bg-white-500 hover:bg-blue-600 text-black font-semibold py-2 px-4 rounded">
          SIDEBAR
        </button>
         <button class="bg-white-500 hover:bg-blue-600 text-black font-semibold py-2 px-4 rounded">
              PAGES
         </button>
                <button class="bg-white-500 hover:bg-blue-600 text-black font-semibold py-2 px-4 rounded">
       TABS
         </button>
       <button class="bg-white-500 hover:bg-blue-600 text-black font-semibold py-2 px-4 rounded">
              ACTIVITIES
         </button>
          <button class="bg-white-500 hover:bg-blue-600 text-black font-semibold py-2 px-4 rounded">
          ROLES
           </button>
          <button class="bg-white-500 hover:bg-blue-600 text-black font-semibold py-2 px-4 rounded">
         CONTROL PANEL
    </button>
  </div>
  <br />
  <hr />
  <br />
<div className='design mr-4 flex items-center gap-4 '>

        <div className="mb-4  ">
          <label htmlFor="OrganizationName" className="block font-medium mb-2 ">Organization Name</label>
          <input
            type="text"
            id="organization"
            value={organization}
            onChange={handleOrganizationChange}
            className=" border rounded-md p-2 md:p-3"
          />
        </div>
        <div className="mb-4 ">
          <label htmlFor="email" className="block font-medium mb-2 ">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            className=" border rounded-md p-2 md:p-3"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="contactno" className="block font-medium mb-2">Contact No</label>
          <input
            type="Number"
            id="contact"
            value={contact}
            onChange={handleContactChange}
            className=" border rounded-md p-2 md:p-3 "
          />
        </div> 
        <div className="mb-4  ">
          <label htmlFor="logo" className="block font-medium mb-2 ">Logo</label>
          <input
            type="file"
            id="logo"
            value={logo}
            onChange={handleLogoChange}
            className=" border rounded-md p-2 md:p-3"
          />
        </div>
        </div>

        <div className='flex items-center  gap-4'>

        <div className="mb-4">
          <label htmlFor="address" className="block font-medium mb-2">Address</label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={handleAddressChange}
            className=" border rounded-md p-2 md:p-3"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="gstno" className="block font-medium mb-2">GST No.</label>
          <input
            type="number"
            id="gst"
            value={gst}
            onChange={handleGSTChange}
            className=" border rounded-md p-2 md:p-3"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="tin" className="block font-medium mb-2">TIN</label>
          <input
            type="text"
            id="tin"
            value={tin}
            onChange={handleTINChange}
            className=" border rounded-md p-2 md:p-3"
          />
        </div>
        <div className="mb-4  ">
          <label htmlFor="description" className="block font-medium mb-2 ">Description</label>
          <input
            type="text"
            id="description"
            value={description}
            onChange={handleDescriptionChange}
            className=" border rounded-md p-2 md:p-3"
          />
        </div>
        </div>
        <div className="mb-4">
          <label  htmlFor="ass"  className="block font-medium mb-2 ">ASS</label>
          <input
            type="text"
            id="ass"
            value={ass}
          
            onChange={handleASSChange}
            className="mr-2"
          />
         
        </div>

        <div className='flex  justify-center gap-4 relative  '>
        <button 
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded "
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
<body class="bg-gray-100">
  <div class="container mx-auto p-6">
    <table class="min-w-full bg-white border">
      <thead>
        <tr class="bg-gray-200">
          <th class="border px-4 py-2">ORGANIZATION NAME</th>
          <th class="border px-4 py-2">EMAI</th>
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
    </div>
  );
};




export default Configuration;