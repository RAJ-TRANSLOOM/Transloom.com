// // "use client";
// // import { motion } from "framer-motion";
// // import Image from "next/image";
// // import React from "react";
// // interface FormData {
// //   username: string;
// //   email: string;
// //   password: string;
// // }
// // const Contact = () => {
// //   /**
// //    * Source: https://www.joshwcomeau.com/react/the-perils-of-rehydration/
// //    * Reason: To fix rehydration error
// //    */
// //   const [hasMounted, setHasMounted] = React.useState(false);
// //   React.useEffect(() => {
// //     setHasMounted(true);
// //   }, []);
// //   if (!hasMounted) {
// //     return null;
// //   }
// //   // const formRef = React.useRef<HTMLFormElement>(null);
// //   const scriptURL: string =
// //     "https://script.google.com/macros/s/AKfycbxf147uyDfD8z4kzYlPJKtCqXPTh-2QqZPlTaNhkid7iifMe0V6MStyClMbcn_US3Z8NQ/exec";
// //   const handleSubmit = (e: React.FormEvent) => {
// //     e.preventDefault();
// //     console.log("kerio ");
// //     if (e) {
// //       console.log(e.target);
// //       const formData = new FormData(e.target as HTMLFormElement);
// //       fetch(scriptURL, { method: "POST", body: formData })
// //         .then((response: Response) => console.log("Success!", response))
// //         .catch((error: Error) => console.error("Error!", error.message));
// //     }
// //   };

// //   return (
// //     <>
// //       {/* <!-- ===== Contact Start ===== --> */}
// //       <section id="support" className="px-4 md:px-8 2xl:px-0">
// //         <div className="relative mx-auto max-w-c-1390 px-7.5 pt-10 lg:px-15 lg:pt-15 xl:px-20 xl:pt-20">
// //           <div className="absolute left-0 top-0 -z-1 h-2/3 w-full rounded-lg bg-gradient-to-t from-transparent to-[#dee7ff47] dark:bg-gradient-to-t dark:to-[#252A42]"></div>
// //           <div className="absolute bottom-[-255px] left-0 -z-1 h-full w-full">
// //             <Image
// //               src="./images/shape/shape-dotted-light.svg"
// //               alt="Dotted"
// //               className="dark:hidden"
// //               fill
// //             />
// //             <Image
// //               src="./images/shape/shape-dotted-dark.svg"
// //               alt="Dotted"
// //               className="hidden dark:block"
// //               fill
// //             />
// //           </div>

// //           <div className="flex flex-col-reverse flex-wrap gap-8 md:flex-row md:flex-nowrap md:justify-between xl:gap-20">
// //             <motion.div
// //               variants={{
// //                 hidden: {
// //                   opacity: 0,
// //                   y: -20,
// //                 },

// //                 visible: {
// //                   opacity: 1,
// //                   y: 0,
// //                 },
// //               }}
// //               initial="hidden"
// //               whileInView="visible"
// //               transition={{ duration: 1, delay: 0.1 }}
// //               viewport={{ once: true }}
// //               className="animate_top w-full rounded-lg bg-white p-7.5 shadow-solid-8 dark:border dark:border-strokedark dark:bg-black md:w-3/5 lg:w-3/4 xl:p-15"
// //             >
// //               <h2 className="mb-15 text-3xl font-semibold text-black dark:text-white xl:text-sectiontitle2">
// //                 Send a message
// //               </h2>

// //               <form
// //                 //  ref={formRef}
// //                 name="submit-to-google-sheet"
// //                 onSubmit={handleSubmit}
// //                 // action="https://formbold.com/s/unique_form_id"
// //                 // method="POST"
// //               >
// //                 <div className="mb-7.5 flex flex-col gap-7.5 lg:flex-row lg:justify-between lg:gap-14">
// //                   <input
// //                     name="fullname"
// //                     type="text"
// //                     placeholder="Name"
// //                     className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
// //                   />

// //                   <input
// //                     name="email"
// //                     type="email"
// //                     placeholder="Email address"
// //                     className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
// //                   />
// //                 </div>

// //                 <div className="mb-12.5 flex flex-col gap-7.5 lg:flex-row lg:justify-between lg:gap-14">
// //                   <input
// //                     name="subject"
// //                     type="text"
// //                     placeholder="Subject"
// //                     className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
// //                   />

// //                   <input
// //                     name="phone"
// //                     type="text"
// //                     placeholder="Phone number"
// //                     className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
// //                   />
// //                 </div>

// //                 <div className="mb-12.5 flex flex-col gap-7.5 lg:flex-row lg:justify-between lg:gap-14">
// //                   <input
// //                     name="Company name"
// //                     type="text"
// //                     placeholder="Company name"
// //                     className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
// //                   />

// //                   <input
// //                     name="Company Phone"
// //                     type="text"
// //                     placeholder="Company Phone"
// //                     className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
// //                   />
// //                 </div>

// //                 <div className="mb-11.5 flex">
// //                   <textarea
// //                     name="message"
// //                     placeholder="Message"
// //                     rows={4}
// //                     className="w-full border-b border-stroke bg-transparent focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white"
// //                   ></textarea>
// //                 </div>

// //                 <div className="flex flex-wrap gap-4 xl:justify-between ">
// //                   <div className="mb-4 flex md:mb-0">
// //                     <input
// //                       id="default-checkbox"
// //                       type="checkbox"
// //                       className="peer sr-only"
// //                     />
// //                     <span className="group mt-2 flex h-5 min-w-[20px] items-center justify-center rounded border-gray-300 bg-gray-100 text-blue-600 peer-checked:bg-primary dark:border-gray-600 dark:bg-gray-700">
// //                       <svg
// //                         className="opacity-0 peer-checked:group-[]:opacity-100"
// //                         width="10"
// //                         height="8"
// //                         viewBox="0 0 10 8"
// //                         fill="none"
// //                         xmlns="http://www.w3.org/2000/svg"
// //                       >
// //                         <path
// //                           fillRule="evenodd"
// //                           clipRule="evenodd"
// //                           d="M9.70704 0.792787C9.89451 0.980314 9.99983 1.23462 9.99983 1.49979C9.99983 1.76495 9.89451 2.01926 9.70704 2.20679L4.70704 7.20679C4.51951 7.39426 4.26521 7.49957 4.00004 7.49957C3.73488 7.49957 3.48057 7.39426 3.29304 7.20679L0.293041 4.20679C0.110883 4.01818 0.0100885 3.76558 0.0123669 3.50339C0.0146453 3.24119 0.119814 2.99038 0.305222 2.80497C0.490631 2.61956 0.741443 2.51439 1.00364 2.51211C1.26584 2.50983 1.51844 2.61063 1.70704 2.79279L4.00004 5.08579L8.29304 0.792787C8.48057 0.605316 8.73488 0.5 9.00004 0.5C9.26521 0.5 9.51951 0.605316 9.70704 0.792787Z"
// //                           fill="white"
// //                         />
// //                       </svg>
// //                     </span>
// //                     <label
// //                       htmlFor="default-checkbox"
// //                       className="flex max-w-[425px] cursor-pointer select-none pl-5"
// //                     >
// //                       By clicking Checkbox, you agree to use our “Form” terms
// //                       And consent cookie usage in browser.
// //                     </label>
// //                   </div>

// //                   <button
// //                     type="submit"
// //                     aria-label="send message"
// //                     className="inline-flex items-center gap-2.5 rounded-full bg-black px-6 py-3 font-medium text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark"
// //                   >
// //                     Send Message
// //                     <svg
// //                       className="fill-white"
// //                       width="14"
// //                       height="14"
// //                       viewBox="0 0 14 14"
// //                       fill="none"
// //                       xmlns="http://www.w3.org/2000/svg"
// //                     >
// //                       <path
// //                         d="M10.4767 6.16664L6.00668 1.69664L7.18501 0.518311L13.6667 6.99998L7.18501 13.4816L6.00668 12.3033L10.4767 7.83331H0.333344V6.16664H10.4767Z"
// //                         fill=""
// //                       />
// //                     </svg>
// //                   </button>
// //                 </div>
// //               </form>
// //             </motion.div>

// //             <motion.div
// //               variants={{
// //                 hidden: {
// //                   opacity: 0,
// //                   y: -20,
// //                 },

// //                 visible: {
// //                   opacity: 1,
// //                   y: 0,
// //                 },
// //               }}
// //               initial="hidden"
// //               whileInView="visible"
// //               transition={{ duration: 2, delay: 0.1 }}
// //               viewport={{ once: true }}
// //               className="animate_top w-full md:w-2/5 md:p-7.5 lg:w-[26%] xl:pt-15"
// //             >
// //               <h2 className="mb-12.5 text-3xl font-semibold text-black dark:text-white xl:text-sectiontitle2">
// //                 Find us
// //               </h2>

// //               <div className="5 mb-7">
// //                 <h3 className="mb-4 text-metatitle3 font-medium text-black dark:text-white">
// //                   Our Loaction
// //                 </h3>
// //                 <p>Hyderabad,india</p>
// //               </div>
// //               <div className="5 mb-7">
// //                 <h3 className="mb-4 text-metatitle3 font-medium text-black dark:text-white">
// //                   Email Address
// //                 </h3>
// //                 <p>
// //                   <a href="mailto:connect@transloom.com">
// //                     connect@transloom.com
// //                   </a>
// //                 </p>
// //               </div>
// //               <div>
// //                 <h4 className="mb-4 text-metatitle3 font-medium text-black dark:text-white">
// //                   Phone Number
// //                 </h4>
// //                 <p>
// //                   <a href="tel:+916362305193">+91 6362305193</a>
// //                 </p>
// //               </div>
// //             </motion.div>
// //           </div>
// //         </div>
// //       </section>
// //       {/* <!-- ===== Contact End ===== --> */}
// //     </>
// //   );
// // };

// // export default Contact;

// "use client";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import React, { useState } from "react";

// const Contact = () => {
//   const [hasMounted, setHasMounted] = useState(false);
//   const [showPopup, setShowPopup] = useState(false);

//   React.useEffect(() => {
//     setHasMounted(true);
//   }, []);

//   if (!hasMounted) {
//     return null;
//   }

//   const scriptURL: string =
//     "https://script.google.com/macros/s/AKfycbxf147uyDfD8z4kzYlPJKtCqXPTh-2QqZPlTaNhkid7iifMe0V6MStyClMbcn_US3Z8NQ/exec";

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     const formData = new FormData(e.target as HTMLFormElement);
//     try {
//       const response = await fetch(scriptURL, {
//         method: "POST",
//         body: formData,
//       });
//       if (response.ok) {
//         setShowPopup(true);
//       } else {
//         console.error("Failed to submit form");
//       }
//     } catch (error) {
//       console.error("Error submitting form:", error.message);
//     }
//   };

//   const closePopup = () => {
//     setShowPopup(false);
//   };

//   return (
//     <>
//       {/* Contact Section */}
//       <section id="support" className="px-4 md:px-8 2xl:px-0">
//         <div className="relative mx-auto max-w-c-1390 px-7.5 pt-10 lg:px-15 lg:pt-15 xl:px-20 xl:pt-20">
//           <div className="absolute left-0 top-0 -z-1 h-2/3 w-full rounded-lg bg-gradient-to-t from-transparent to-[#dee7ff47] dark:bg-gradient-to-t dark:to-[#252A42]"></div>
//           <div className="absolute bottom-[-255px] left-0 -z-1 h-full w-full">
//             <Image
//               src="./images/shape/shape-dotted-light.svg"
//               alt="Dotted"
//               className="dark:hidden"
//               fill
//             />
//             <Image
//               src="./images/shape/shape-dotted-dark.svg"
//               alt="Dotted"
//               className="hidden dark:block"
//               fill
//             />
//           </div>

//           <div className="flex flex-col-reverse flex-wrap gap-8 md:flex-row md:flex-nowrap md:justify-between xl:gap-20">
//             {/* Form Section */}
//             <motion.div
//               variants={{
//                 hidden: {
//                   opacity: 0,
//                   y: -20,
//                 },
//                 visible: {
//                   opacity: 1,
//                   y: 0,
//                 },
//               }}
//               initial="hidden"
//               whileInView="visible"
//               transition={{ duration: 1, delay: 0.1 }}
//               viewport={{ once: true }}
//               className="animate_top w-full rounded-lg bg-white p-7.5 shadow-solid-8 dark:border dark:border-strokedark dark:bg-black md:w-3/5 lg:w-3/4 xl:p-15"
//             >
//               <h2 className="mb-15 text-3xl font-semibold text-black dark:text-white xl:text-sectiontitle2">
//                 Send a message
//               </h2>

//               <form
//                 name="submit-to-google-sheet"
//                 onSubmit={handleSubmit}
//                 className="space-y-7.5"
//               >
//                 <div className="mb-7.5 flex flex-col gap-7.5 lg:flex-row lg:justify-between lg:gap-14">
//                   <input
//                     name="fullname"
//                     type="text"
//                     placeholder="Name"
//                     className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
//                   />
//                   <input
//                     name="email"
//                     type="email"
//                     placeholder="Email address"
//                     className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
//                   />
//                 </div>

//                 <div className="mb-12.5 flex flex-col gap-7.5 lg:flex-row lg:justify-between lg:gap-14">
//                   <input
//                     name="subject"
//                     type="text"
//                     placeholder="Subject"
//                     className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
//                   />

//                   <input
//                     name="phone"
//                     type="text"
//                     placeholder="Phone number"
//                     className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
//                   />
//                 </div>

//                 <div className="mb-12.5 flex flex-col gap-7.5 lg:flex-row lg:justify-between lg:gap-14">
//                   <input
//                     name="Company name"
//                     type="text"
//                     placeholder="Company name"
//                     className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
//                   />

//                   <input
//                     name="Company Phone"
//                     type="text"
//                     placeholder="Company Phone"
//                     className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
//                   />
//                 </div>

//                 <div className="mb-11.5 flex">
//                   <textarea
//                     name="message"
//                     placeholder="Message"
//                     rows={4}
//                     className="w-full border-b border-stroke bg-transparent focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white"
//                   ></textarea>
//                 </div>

//                 <div className="mb-4 flex items-center">
//                   <input
//                     id="default-checkbox"
//                     type="checkbox"
//                     className="peer sr-only"
//                   />
//                   <span className="group mt-2 flex h-5 min-w-[20px] items-center justify-center rounded border-gray-300 bg-gray-100 text-blue-600 peer-checked:bg-primary dark:border-gray-600 dark:bg-gray-700">
//                     <svg
//                       className="opacity-0 peer-checked:group-[]:opacity-100"
//                       width="10"
//                       height="8"
//                       viewBox="0 0 10 8"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         fillRule="evenodd"
//                         clipRule="evenodd"
//                         d="M9.70704 0.792787C9.89451 0.980314 9.99983 1.23462 9.99983 1.49979C9.99983 1.76495 9.89451 2.01926 9.70704 2.20679L4.70704 7.20679C4.51951 7.39426 4.26521 7.49957 4.00004 7.49957C3.73488 7.49957 3.48057 7.39426 3.29304 7.20679L0.293041 4.20679C0.110883 4.01818 0.0100885 3.76558 0.0123669 3.50339C0.0146453 3.24119 0.119814 2.99038 0.305222 2.80497C0.490631 2.61956 0.741443 2.51439 1.00364 2.51211C1.26584 2.50983 1.51844 2.61063 1.70704 2.79279L4.00004 5.08579L8.29304 0.792787C8.48057 0.605316 8.73488 0.5 9.00004 0.5C9.26521 0.5 9.51951 0.605316 9.70704 0.792787Z"
//                         fill="white"
//                       />
//                     </svg>
//                   </span>
//                   <label
//                     htmlFor="default-checkbox"
//                     className="flex max-w-[425px] cursor-pointer select-none pl-5"
//                   >
//                     By clicking Checkbox, you agree to use our “Form” terms And
//                     consent cookie usage in browser.
//                   </label>
//                 </div>

//                 {/* Submit Button */}
//                 <button
//                   type="submit"
//                   aria-label="send message"
//                   className="inline-flex items-center gap-2.5 rounded-full bg-black px-6 py-3 font-medium text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark"
//                 >
//                   Send Message
//                   <svg
//                     className="fill-white"
//                     width="14"
//                     height="14"
//                     viewBox="0 0 14 14"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       d="M10.4767 6.16664L6.00668 1.69664L7.18501 0.518311L13.6667 6.99998L7.18501 13.4816L6.00668 12.3033L10.4767 7.83331H0.333344V6.16664H10.4767Z"
//                       fill=""
//                     />
//                   </svg>
//                 </button>
//               </form>
//             </motion.div>

//             {/* Contact Information */}
//             <motion.div
//               variants={{
//                 hidden: {
//                   opacity: 0,
//                   y: -20,
//                 },
//                 visible: {
//                   opacity: 1,
//                   y: 0,
//                 },
//               }}
//               initial="hidden"
//               whileInView="visible"
//               transition={{ duration: 2, delay: 0.1 }}
//               viewport={{ once: true }}
//               className="animate_top w-full md:w-2/5 md:p-7.5 lg:w-[26%] xl:pt-15"
//             >
//               <h2 className="mb-12.5 text-3xl font-semibold text-black dark:text-white xl:text-sectiontitle2">
//                 Find us
//               </h2>

//               <div className="5 mb-7">
//                 <h3 className="mb-4 text-metatitle3 font-medium text-black dark:text-white">
//                   Our Location
//                 </h3>
//                 <p>Hyderabad, India</p>
//               </div>
//               <div className="5 mb-7">
//                 <h3 className="mb-4 text-metatitle3 font-medium text-black dark:text-white">
//                   Email Address
//                 </h3>
//                 <p>
//                   <a href="mailto:connect@transloom.com">
//                     connect@transloom.com
//                   </a>
//                 </p>
//               </div>
//               <div>
//                 <h4 className="mb-4 text-metatitle3 font-medium text-black dark:text-white">
//                   Phone Number
//                 </h4>
//                 <p>
//                   <a href="tel:+916362305193">+91 6362305193</a>
//                 </p>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Popup Message */}
//       {showPopup && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="rounded-lg bg-white p-6 shadow-lg">
//             <h2 className="mb-4 text-2xl font-semibold">Thank you!</h2>
//             <p>Your message has been sent successfully.</p>
//             <button
//               onClick={closePopup}
//               className="mt-4 inline-flex items-center gap-2.5 rounded-full bg-black px-6 py-3 font-medium text-white duration-300 ease-in-out hover:bg-blackho"
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Contact;
"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";

const Contact = () => {
  const [hasMounted, setHasMounted] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [isChecked, setIsChecked] = useState(false); // State for checkbox

  React.useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  const scriptURL: string =
    "https://script.google.com/macros/s/AKfycbxf147uyDfD8z4kzYlPJKtCqXPTh-2QqZPlTaNhkid7iifMe0V6MStyClMbcn_US3Z8NQ/exec";

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ... (same logic as before)

    if (e === e) {
      setShowPopup(true);
      // Optional: Reset form
      (e.target as HTMLFormElement).reset();
    } else {
      console.error("Failed to submit form");
    }
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked); // Toggle checkbox state
  };

  return (
    <>
      {/* Contact Section */}
      <section id="support" className="px-4 md:px-8 2xl:px-0">
        <div className="relative mx-auto max-w-c-1390 px-7.5 pt-10 lg:px-15 lg:pt-15 xl:px-20 xl:pt-20">
          <div className="absolute left-0 top-0 -z-1 h-2/3 w-full rounded-lg bg-gradient-to-t from-transparent to-[#dee7ff47] dark:bg-gradient-to-t dark:to-[#252A42]"></div>
          <div className="absolute bottom-[-255px] left-0 -z-1 h-full w-full">
            <Image
              src="./images/shape/shape-dotted-light.svg"
              alt="Dotted"
              className="dark:hidden"
              fill
            />
            <Image
              src="./images/shape/shape-dotted-dark.svg"
              alt="Dotted"
              className="hidden dark:block"
              fill
            />
          </div>

          <div className="flex flex-col-reverse flex-wrap gap-8 md:flex-row md:flex-nowrap md:justify-between xl:gap-20">
            {/* Form Section */}
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top w-full rounded-lg bg-white p-7.5 shadow-solid-8 dark:border dark:border-strokedark dark:bg-black md:w-3/5 lg:w-3/4 xl:p-15"
            >
              <h2 className="mb-15 text-3xl font-semibold text-black dark:text-white xl:text-sectiontitle2">
                Send a message
              </h2>

              <form
                name="submit-to-google-sheet"
                onSubmit={handleSubmit}
                className="space-y-7.5"
              >
                {/* Name and Email Inputs */}
                <div className="mb-7.5 flex flex-col gap-7.5 lg:flex-row lg:justify-between lg:gap-14">
                  <input
                    name="fullname"
                    type="text"
                    placeholder="Name"
                    required
                    className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
                  />

                  <input
                    name="email"
                    type="email"
                    placeholder="Email address"
                    required
                    className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
                  />
                </div>

                {/* Subject and Phone Inputs */}
                <div className="mb-12.5 flex flex-col gap-7.5 lg:flex-row lg:justify-between lg:gap-14">
                  <input
                    name="subject"
                    type="text"
                    placeholder="Subject"
                    required
                    className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
                  />

                  <input
                    name="phone"
                    type="text"
                    placeholder="Phone number"
                    required
                    className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
                  />
                </div>

                {/* Company Name and Company Phone Inputs */}
                <div className="mb-12.5 flex flex-col gap-7.5 lg:flex-row lg:justify-between lg:gap-14">
                  <input
                    name="companyName"
                    type="text"
                    placeholder="Company name"
                    className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
                  />

                  <input
                    name="companyPhone"
                    type="text"
                    placeholder="Company Phone"
                    className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
                  />
                </div>

                {/* Message Input */}
                <div className="mb-11.5 flex">
                  <textarea
                    name="message"
                    placeholder="Message"
                    rows={4}
                    required
                    className="w-full border-b border-stroke bg-transparent focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white"
                  ></textarea>
                </div>

                {/* Checkbox Input */}
                <div className="mb-4 flex items-center">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                    className="peer sr-only"
                  />
                  <label
                    htmlFor="default-checkbox"
                    className="flex cursor-pointer select-none items-center pl-5"
                  >
                    <span
                      className={`relative h-5 w-5 rounded border-gray-300 bg-gray-100 text-blue-600 ${isChecked ? "bg-primary" : ""} group-checked:bg-primary dark:border-gray-600 dark:bg-gray-700`}
                    >
                      {isChecked && (
                        <svg
                          className="absolute inset-0 m-auto fill-white"
                          width="10"
                          height="8"
                          viewBox="0 0 10 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M9.70704 0.792787C9.89451 0.980314 9.99983 1.23462 9.99983 1.49979C9.99983 1.76495 9.89451 2.01926 9.70704 2.20679L4.70704 7.20679C4.51951 7.39426 4.26521 7.49957 4.00004 7.49957C3.73488 7.49957 3.48057 7.39426 3.29304 7.20679L0.293041 4.20679C0.110883 4.01818 0.0100885 3.76558 0.0123669 3.50339C0.0146453 3.24119 0.119814 2.99038 0.305222 2.80497C0.490631 2.61956 0.741443 2.51439 1.00364 2.51211C1.26584 2.50983 1.51844 2.61063 1.70704 2.79279L4.00004 5.08579L8.29204 0.792787C8.47951 0.605316 8.73382 0.5 8.99998 0.5C9.26514 0.5 9.51945 0.605316 9.70704 0.792787Z"
                            fill="currentColor"
                          />
                        </svg>
                      )}
                    </span>
                    <span className="ml-2">
                      By clicking Checkbox, you agree to use our “Form” terms
                      And consent cookie usage in browser.
                    </span>
                  </label>
                </div>

                {/* <div className="mb-4 flex items-center">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                    className="peer sr-only"
                  />
                  <label
                    htmlFor="default-checkbox"
                    className="flex cursor-pointer select-none items-center pl-5"
                  >
                    <span
                      className={`h-5 w-5 rounded border-gray-300 bg-gray-100 text-blue-600 ${
                        isChecked ? "bg-primary" : ""
                      } group-checked:bg-primary dark:border-gray-600 dark:bg-gray-700`}
                    >
                      {isChecked && (
                        <svg
                          className="fill-white"
                          width="10"
                          height="8"
                          viewBox="0 0 10 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M9.70704 0.792787C9.89451 0.980314 9.99983 1.23462 9.99983 1.49979C9.99983 1.76495 9.89451 2.01926 9.70704 2.20679L4.70704 7.20679C4.51951 7.39426 4.26521 7.49957 4.00004 7.49957C3.73488 7.49957 3.48057 7.39426 3.29304 7.20679L0.293041 4.20679C0.110883 4.01818 0.0100885 3.76558 0.0123669 3.50339C0.0146453 3.24119 0.119814 2.99038 0.305222 2.80497C0.490631 2.61956 0.741443 2.51439 1.00364 2.51211C1.26584 2.50983 1.51844 2.61063 1.70704 2.79279L4.00004 5.08579L8.29204 0.792787C8.47951 0.605316 8.73382 0.5 8.99998 0.5C9.26514 0.5 9.51945 0.605316 9.70704 0.792787Z"
                            fill="currentColor"
                          />
                        </svg>
                      )}
                    </span>
                    <span className="ml-2">
                      By clicking Checkbox, you agree to use our “Form” terms
                      And consent cookie usage in browser.
                    </span>
                  </label>
                </div> */}

                {/* Submit Button */}
                {/* <div className="flex items-center justify-between">
                  <button
                    type="submit"
                    aria-label="send message"
                    className="inline-flex items-center gap-2.5 rounded-full bg-black px-6 py-3 font-medium text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark"
                  >
                    Send Message
                    <svg
                      className="fill-white"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.4767 6.16664L6.00668 1.69664L7.18501 0.518311L13.6667 6.99998L7.18501 13.4816L6.00668 12.3033L10.4767 7.83331H0.333344V6.16664H10.4767Z"
                        fill=""
                      />
                    </svg>
                  </button>
                </div> */}
                <div className="flex items-center justify-between">
                  <button
                    type="submit"
                    aria-label="send message"
                    className="inline-flex items-center gap-2.5 rounded-full bg-black px-6 py-3 font-medium text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark"
                  >
                    Send Message
                    <svg
                      className="fill-white"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.4767 6.16664L6.00668 1.69664L7.18501 0.518311L13.6667 6.99998L7.18501 13.4816L6.00668 12.3033L10.4767 7.83331H0.333344V6.16664H10.4767Z"
                        fill=""
                      />
                    </svg>
                  </button>
                </div>
              </form>
            </motion.div>

            {/* Contact Info Section */}
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 2, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top w-full md:w-2/5 md:p-7.5 lg:w-[26%] xl:pt-15"
            >
              <h2 className="mb-12.5 text-3xl font-semibold text-black dark:text-white xl:text-sectiontitle2">
                Find us
              </h2>

              {/* Location */}
              <div className="mb-7">
                <h3 className="mb-4 text-metatitle3 font-medium text-black dark:text-white">
                  Our Location
                </h3>
                <p>Hyderabad, India</p>
              </div>

              {/* Email Address */}
              <div className="mb-7">
                <h3 className="mb-4 text-metatitle3 font-medium text-black dark:text-white">
                  Email Address
                </h3>
                <p>
                  <a href="mailto:connect@transloom.com">
                    connect@transloom.com
                  </a>
                </p>
              </div>

              {/* Phone Number */}
              <div>
                <h4 className="mb-4 text-metatitle3 font-medium text-black dark:text-white">
                  Phone Number
                </h4>
                <p>
                  <a href="tel:+916362305193">+91 6362305193</a>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="rounded-lg border-white bg-neutral-950 p-10 shadow-lg ">
            <h2 className="mb-4 text-2xl font-semibold">Thank you!</h2>
            <p color="white">
              Your message has been sent successfully!, we will reach out to you
              soon
            </p>
            <button
              onClick={closePopup}
              className="mt-4 inline-flex items-center gap-2.5 rounded-full bg-black px-6 py-3 font-medium text-white duration-300 ease-in-out hover:bg-blackho"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Contact;
