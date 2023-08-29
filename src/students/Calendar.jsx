// import React, { Component } from "react";
// // import { connect } from "react-redux";
// import { Link } from "react-router-dom";
// import "react-accessible-accordion/dist/fancy-example.css";
// // import Loading from "../../components/Loader/loader";
// // import FullCalendar from "@fullcalendar/react";
// // import dayGridPlugin from "@fullcalendar/daygrid";
// // import { calendarActions } from "../../redux/actions";
// // import interactionPlugin from "@fullcalendar/interaction";
// // import timeGridPlugin from "@fullcalendar/timegrid";
// // import resourceTimeGridPlugin from "@fullcalendar/resource-timegrid";
// import "@fullcalendar/core/main.css";
// import "@fullcalendar/daygrid/main.css";
// import moment from "moment";
// // import Breadcrumb from "../../components/breadcrumb/breadcrumb";
// // import EditModal from "../components/editModal";
// // import { Dialog } from "@headlessui/react";
// // import { InformationCircleIcon, PencilIcon, XIcon } from "@heroicons/react/outline";

// function mapStateToProps(state) {
//   const { calendarData } = state.CalendarReducer;
//   return { calendarData };
// }

// class Calendar extends Component<any, any> {
//   private calendarComponentRef;

//   constructor(props) {
//     super(props);
//     this.calendarComponentRef = React.createRef();

//     this.state = {
//       loading: true,
//       setOpen: false,
//       eventDetails: {}
//     };
//   }

//   componentDidMount() {
//     const { dispatch }: any = this.props;

//     dispatch(
//       calendarActions.get({
//         feature: "calendar",
//       })
//     );
//   }

//   componentDidUpdate(prevProps, prevState, snapshot) {
//     const { calendarData }: any = this.props;
//     let arr: any = [];
//     if (prevProps.calendarData !== calendarData) {
//       if (calendarData?.data) {
//         calendarData?.data?.map((ds) => {
//           arr.push({
//             id: ds._id,
//             title: ds.displayName,
//             date:
//               moment(ds.date).format("YYYY-MM-DD") +
//               " " +
//               moment(
//                 moment(ds.date).format("YYYY-MM-DD") + " " + ds.time
//               ).format("HH:mm"),
//             externalLink: ds.externalLink,
//             description: ds.description
//           });
//         });
//       }

//       this.setState({
//         calendarData: calendarData.data,
//         totalCount: calendarData.totalCount,
//         events: arr,
//         loading: false,
//       });
//     }
//   }

//   componentWillUnmount() {
//     console.log("componentWillUnmount");
//   }

//   handleSelectedDates = (info) => {
//     const title = prompt("What's the name of the title");
//     if (title != null) {
//       const newEvent = {
//         title,
//         start: info.startStr,
//         end: info.endStr,
//       };
//       const data = [...this.state.events, newEvent];
//       this.setState({ events: data });
//     }
//   };

//   onOpen(eventDetails) {
//     console.log("eventDetails", eventDetails)
//     this.setState({ setOpen: true, eventDetails })
//   }

//   onClose() {
//     this.setState({ setOpen: false })
//   }

//   render() {
//     const { loading, setOpen, eventDetails }: any = this.state;

//     return (
//       <>
//         {loading && <Loading />}

//         <div className="flex mt-20 md:mt-20 flex-wrap">
//           <div className="w-full px-0 md:px-4 mb-12 xl:mb-0 h-screen">
//             <Breadcrumb labels={[{ label: "Calendar", value: "/calendar" }]} />

//             <div className="bg-theme relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white">
//               <div className="rounded-t mb-0 px-2 md:px-4 py-3 bg-transparent">
//                 <div className="flex flex-wrap items-center">
//                   <div className="relative w-full max-w-full flex-grow flex-1">
//                     <div className="flex justify-between">
//                       <h2 className="text-xl">Calendar</h2>
//                       <Link
//                         to="/manageCalendar"
//                         className="theme-color-text text-sm"
//                       >
//                         Manage
//                       </Link>
//                     </div>

//                     <hr />

//                     <div className="w-full flex mt-4 font-serif">
//                       <FullCalendar
//                         schedulerLicenseKey="GPL-My-Project-Is-Open-Source"
//                         ref={this.calendarComponentRef}
//                         displayEventTime={true}
//                         selectable={false}
//                         plugins={[
//                           dayGridPlugin,
//                           interactionPlugin,
//                           timeGridPlugin,
//                           resourceTimeGridPlugin,
//                         ]}
//                         eventClick={(event) => {
//                           let eventDetails = this.state.events.filter(
//                             (ds) => ds.id === event.event._def.publicId
//                           );
//                           eventDetails = eventDetails[0];
//                           this.onOpen(eventDetails)
//                         }}
//                         events={this.state.events}
//                         select={this.handleSelectedDates}
//                         eventLimit={3}
//                       />

//                       {setOpen && (
//                         <EditModal
//                           setOpen={setOpen}
//                           setClose={(e) => this.onClose()}
//                           innerHtml={
//                             <div className="fixed md:relative top-2 md:top-0 h-98% md:h-full w-3/5 overflow-auto md:overflow-hidden inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left shadow-xl transform transition-all sm:my-8 sm:align-middle sm:p-6">
//                               <div className="sm:flex sm:items-start">
//                                 <div className="w-full">
//                                   <Dialog.Title
//                                     as="h3"
//                                     className="flex items-center gap-1 text-lg leading-6 font-medium text-gray-900"
//                                   >
//                                     <div className="flex items-center justify-center h-8 w-8 rounded-full bg-green-100 sm:mx-0">
//                                       <InformationCircleIcon
//                                         className="h-6 w-6 text-green-600"
//                                         aria-hidden="true"
//                                       />
//                                     </div>
//                                     Event Details
//                                   </Dialog.Title>
//                                   <hr />

//                                   <div className="mt-4">
//                                     <div className="p-2 col-start-1 col-span-8 md:col-start-2 md:col-span-6 border rounded border-blue-600 bg-blue-50">
//                                       <ul>
//                                         <li>
//                                           <span className="italic font-semibold">Event Name </span> - {eventDetails.title}
//                                         </li>
//                                         <li className="mt-2">
//                                           <span className="italic font-semibold">  Date/Time</span> - {eventDetails.date}
//                                         </li>
//                                         <li className="mt-2">
//                                           <span className="italic font-semibold">  Description </span> - {eventDetails.description}
//                                         </li>
//                                         <li className="mt-2 flex">
//                                           <span className="italic font-semibold">  URL</span> - <a target="_blank" className="text-blue-500" href={eventDetails.externalLink}>{eventDetails.externalLink}</a>
//                                         </li>
//                                       </ul>
//                                     </div>
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>
//                           }
//                         />
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </>
//     );
//   }
// }

// const CalendarComponent = connect(mapStateToProps, null, null, { pure: false })(
//   Calendar
// );

// export default CalendarComponent;
