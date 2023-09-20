import Fullcalendar from '@fullcalendar/react';
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";




import React, { useState ,useEffect} from "react";
import Sidebar from "../partials/Sidebar.jsx"
import Header from "../partials/Header.jsx"
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { TEInput, TERipple } from "tw-elements-react";
import './Calendar.css'
const Calendar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [eventname, setEventname] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [batch, setBatch] = useState('');
  const [description, setDescription] = useState('');
  const [externallink,  setExternallink] = useState('');
  const [redirectTo, setRedirectTo] = useState('');
 

  // useEffect(()=>{toggleTab()},[])

  const [toggle, setToggle] = useState(1);

//   const toggleTab = (index) => {
//   //     //setToggleState(index);
//    console.log(index);
//    return true
//  }
  
function updateToggle(id) {
setToggle(id)

}
  

  const handleEventnameChange = (event) => {
    setEventname(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleTimeChange = (event) => {
    setTime(event.target.value);
  };

  const handleBatchChange = (event) => {
    setBatch(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleExternallinkChange = (event) => {
    setExternallink(event.target.value);
  };
 
  const handleSubmit = (event) => {
    event.preventDefault();
    // Process and save configuration data here
  };


  return (

    <div>
       <div className="flex h-screen overflow-hidden">
        {/* Sidebar */}
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        {/* Content area */}
        <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
          {/*  Site header */}
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          
          {/* redirectTo && <Redirect to={{pathname: redirectTo }} /> */}

          <main>
          <div className="container   w-full mb-0 px-2 md:px-4 py-3 max-w-full flex-grow flex-1  sm-auto ">
      <form className=" lg:bg-white p-8 ">
       <div className="md:flex space-x-2 sm:px-2 md:shrink-0 nav nav-pills mb-3 mt-1 " >
        {/* <div className="px-4 md:shrink-0 bg-blue-500 hover:bg-blue-600 text-xs sm:text-sm=true text-black font-semibold py-2 sm:px-4 rounded-s-lg">
          <button  className ={toggleState === 1 ? " tabs active-tabs ": "tabs"}  >
           Calendar 
            </button>
            </div> */}
            {/* <div className="md:shrink-0 bg-blue-500 hover:bg-blue-600 text-xs sm:text-sm=true text-black font-semibold py-2 px-4 rounded-s-lg">
              <button  className={toggleState === 2 ? " tabs active-tabs ": "tabs"} >
          Manage Calendar
        </button></div>  */}
        <ul className="flex ">
          <li className="flex-fill  text-blue-500 hover:bg-blue-300 text-xxl sm:text-sm=true font-semibold py-2 sm:px-4  " onClick={()=>updateToggle(1)}>Manage Calendar</li> <br /><br />
          <li className="flex-fill text-blue-500 hover:bg-blue-300 text-xxl sm:text-sm=true font-semibold py-2 sm:px-4 pace-x-5" onClick={()=>updateToggle(2)}>Calendar</li>
        </ul>
        </div>
                   <br />
                     {/* 
                      manage calende code */}

  <div className={toggle === 1 ? " show-content ": "content"}>
        <h3 className="text-2xl font-semibold mb-4 ">Manage Calendar</h3>
        <hr className="h-px my-2 border-solid dark:bg-gray-700"/>
        <br />
        <div className="md:flex space-x-4 sm:px-2 md:shrink-0">
          <button className=" md:shrink-0 bg-white-500 hover:bg-blue-600 text-xs sm:text-sm=true text-black font-semibold py-2 sm:px-4 rounded-s-lg  ">
           EVENT
            </button>
              <button className=" md:shrink-0 bg-white-500 hover:bg-blue-600 text-xs sm:text-sm=true text-black font-semibold py-2 px-4 rounded-s-lg ">
          ADD EVENT
        </button>
        </div>
  <br />
  <hr  text-xs="true"/>
  <br />

  < div className="flex-auto grid md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-4 mt-1">
          <div className=" flex-auto grid flex-grow mx-4 ">
       <div className="mb-4  ">
          <label htmlFor="eventname" className="block font-medium mb-2 text-xs sm:text-sm=true ">Event Name</label>
          <TEInput
             tabIndex={1}
            type="text"
            id="eventname"
            value={eventname}
            onChange={handleEventnameChange}
            className=" px-4 py-2 rounded-lg border border-gray-300 focus:outline-none "
            autoComplete="none"
            required
          />
        </div> </div>
        <div className="mb-4  ">
          <label htmlFor="date" className="block font-medium mb-2 text-xs sm:text-sm=true ">Date</label>
          <TEInput
             tabIndex={2}
            type="date"
            id="date"
            value={date}
            onChange={handleDateChange}
            className=" px-4 py-2 rounded-lg border border-gray-300 focus:outline-none "
            autoComplete="none"
            required
          />
        </div>
        <div className="mb-4 ">
          <label htmlFor="time" className="block font-medium mb-2 text-xs sm:text-sm=true">Time</label>
          <TEInput
             tabIndex={3}
            type="time"
            id="time"
            value={time}
            onChange={handleTimeChange}
            className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none "
            autoComplete="none"
            required
          />
        </div> 
        <div className="mb-4  ">
          <label htmlFor="batch" className="block font-medium mb-2 text-xs sm:text-sm=true">Batch</label>
          <TEInput
             tabIndex={4}
            type="text"
            id="batch"
            value={batch}
            onChange={ handleBatchChange}
            className=" px-4 py-2 rounded-lg border border-gray-300 focus:outline-none "
            autoComplete="none"
            required
          />
        </div>
        

        <div className="mb-4">
          <label htmlFor="description" className="block font-medium mb-2 text-xs sm:text-sm=true">Description</label>
          <TEInput
             tabIndex={5}
            type="text"
            id="description"
            value={description}
            onChange={handleDescriptionChange}
            className=" px-4 py-2 rounded-lg border border-gray-300 focus:outline-none "
            autoComplete="none"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="externallink" className="block font-medium mb-2 text-xs sm:text-sm=true">External Link</label>
          <TEInput
             tabIndex={6}
            type="text"
            id="externallink"
            value={externallink}
            onChange={handleExternallinkChange}
            className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none "
                              autoComplete="none"
                              required
          />
        </div>
         </div>
        <div className='flex  justify-center gap-4 relative '>
        <button 
          type="add"
          className="inline-block rounded bg-blue-600 px-7 pb-2.5 pt-3 text-sm hover:bg-white hover:text-blue-600 font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
        >
          Add
        </button> 
       
     
        <button
          type="cancel"
          className="bg-red-500 hover:bg-blue-600 text-white px-4 py-2 rounded "
        >
          Cancel
        </button>
        </div>
        <br />
        </div>
        </form>
    </div>
    
    </main>

                  {/* calender code */}

 <div className={toggle === 2 ? " show-content ": "content"}>
  
     
  {/* <LocalizationProvider dateAdapter={AdapterDayjs}> 
      <StaticDatePicker orientation="landscape" /> 
    </LocalizationProvider>    */}
<div className='w-full mb-0 px-2 md:px-4 py-3 max-w-full sm-auto  justify-between  text-neutral-600 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 dark:text-neutral-200 md:flex-wrap md:justify-start'>
<Fullcalendar
plugins={[dayGridPlugin,timeGridPlugin,interactionPlugin]}
initialview ={'dayGridMonth'}
headerToolbar={{
  start: "today prev next",
  center: "title",
  end:"dayGridMonth,timeGridWeek,timeGridDay",
}}
height={"80vh"}
 dafault={"true"}
/>
</div>
</div>   
    </div>  
    </div></div>
);
}

export default Calendar ;