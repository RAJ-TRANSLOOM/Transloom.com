"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import menuData from "./menuData";

const Header = () => {
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [dropdownToggler, setDropdownToggler] = useState(false);
  const [stickyMenu, setStickyMenu] = useState(false);

  const pathUrl = usePathname();

  // Sticky menu
  const handleStickyMenu = () => {
    if (window.scrollY >= 80) {
      setStickyMenu(true);
    } else {
      setStickyMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyMenu);
  });
    const { theme, setTheme } = useTheme();

  // setTheme(theme === "dark" ? "dark" : "light")
   setTheme(theme === "dark" ? "dark" : "dark")


  return (
    <header
      className={`fixed left-0 top-0 z-99999 w-full py-5 ${
        stickyMenu
          ? "bg-white !py-4 shadow transition duration-100 dark:bg-black"
          : ""
      }`}
    >
      <div className="relative mx-auto max-w-c-1390 items-center justify-between px-4 md:px-8 xl:flex 2xl:px-0">
        <div className="flex w-full items-center justify-between xl:w-1/4">
           {/* <ThemeToggler></ThemeToggler> */}
            <a href="/">
            <Image
              src="/images/logo/TransloomLogoDark.png"
              alt="logo"
              width={150.03}
              height={100}
              className="hidden w-full dark:block"
            />

            <Image
              src="/images/logo/TransloomLogo.png"
              alt="logo"
              width={150.03}
              height={50}
              className="w-full dark:hidden"
            />
          </a>

          {/* <!-- Hamburger Toggle BTN --> */}

          <button
            aria-label="hamburger Toggler"
            className="block xl:hidden"
            onClick={() => setNavigationOpen(!navigationOpen)}
          >
            <span className="relative block h-5.5 w-5.5 cursor-pointer">
              <span className="absolute right-0 block h-full w-full">
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-black delay-[0] duration-200 ease-in-out dark:bg-white ${
                    !navigationOpen ? "!w-full delay-300" : "w-0"
                  }`}
                ></span>
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-black delay-150 duration-200 ease-in-out dark:bg-white ${
                    !navigationOpen ? "delay-400 !w-full" : "w-0"
                  }`}
                ></span>
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-black delay-200 duration-200 ease-in-out dark:bg-white ${
                    !navigationOpen ? "!w-full delay-500" : "w-0"
                  }`}
                ></span>
              </span>
              <span className="du-block absolute right-0 h-full w-full rotate-45">
                <span
                  className={`absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-black delay-300 duration-200 ease-in-out dark:bg-white ${
                    !navigationOpen ? "!h-0 delay-[0]" : "h-full"
                  }`}
                ></span>
                <span
                  className={`delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-black duration-200 ease-in-out dark:bg-white ${
                    !navigationOpen ? "!h-0 delay-200" : "h-0.5"
                  }`}
                ></span>
              </span>
            </span>
          </button>
          {/* <!-- Hamburger Toggle BTN --> */}
        </div>

        {/* Nav Menu Start   */}
        <div
          className={`invisible h-0 w-full items-center justify-between xl:visible xl:flex xl:h-auto xl:w-full ${
            navigationOpen &&
            "navbar !visible mt-4 h-auto max-h-[400px] rounded-md bg-white p-7.5 shadow-solid-5 dark:bg-blacksection xl:h-auto xl:p-0 xl:shadow-none xl:dark:bg-transparent"
          }`}
        >
          <nav>
            <ul className="flex flex-col gap-5 xl:flex-row xl:items-center xl:gap-10">
              {menuData.map((menuItem, key) => (
                <li key={key} className={menuItem.submenu && "group relative"}>
                  {menuItem.submenu ? (
                    <>
                      <button
                        onClick={() => setDropdownToggler(!dropdownToggler)}
                        className="flex  cursor-pointer items-center justify-between gap-3 text-white hover:text-primary"
                      >
                        {menuItem.title}
                        <span>
                          <svg
                            className="h-3 w-3 cursor-pointer fill-waterloo group-hover:fill-primary"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                          >
                            <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                          </svg>
                        </span>
                      </button>
                      <ul
                        className={`dropdown ${dropdownToggler ? "flex" : ""}`}
                      >
                        {menuItem.submenu.map((item, key) => (
                          <li
                            key={key}
                            className="text-white hover:text-primary"
                          >
                            <Link href={item.path || "#"}>{item.title}</Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <Link
                      href={`${menuItem.path}`}
                      className={
                        pathUrl === menuItem.path
                          ? "items-center text-primary hover:text-primary"
                          : "items-center hover:text-primary"
                      }
                    >
                      <span className="font-semibold text-black dark:text-white">
                        {menuItem.title}
                      </span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
            <Link href={"http://translate.transloom.com/"}>
              <button className=" border-2 border-[#086373] px-5 py-2 font-semibold text-black shadow-lg transition-all ease-in-out hover:bg-[#086373] hover:text-white active:translate-x-2 active:translate-y-2 dark:border-white dark:text-white dark:hover:bg-black">
                Translate
              </button>
            </Link>
          </nav>

          <div className="mt-7 flex items-center gap-3 xl:mt-0">
            {/* <ThemeToggler /> */}

            <Link
              href="/auth/signin"
              className="flex items-center justify-center rounded-full bg-[#086373] px-7 py-2 text-sm text-white duration-300 ease-in-out hover:bg-opacity-80 dark:bg-white dark:text-black"
            >
              REQUEST ACCESS
            </Link>
            <Link
              href="/auth/signup"
              className="flex items-center justify-center rounded-full bg-[#086373] px-7 py-2 text-sm text-white duration-300 ease-in-out hover:bg-opacity-80 dark:bg-white dark:text-black"
            >
              LOGIN
            </Link>

          </div>
        </div>
      </div>
    </header>
  );
};

// w-full delay-300

export default Header;


// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { useEffect, useState } from "react";

// import menuData from "./menuData";

// const Header = () => {
//   const [navigationOpen, setNavigationOpen] = useState(false);
//   const [dropdownToggler, setDropdownToggler] = useState(false);
//   const [stickyMenu, setStickyMenu] = useState(false);

//   const pathUrl = usePathname();

//   // Sticky menu
//   const handleStickyMenu = () => {
//     if (window.scrollY >= 80) {
//       setStickyMenu(true);
//     } else {
//       setStickyMenu(false);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleStickyMenu);
//     return () => {
//       window.removeEventListener("scroll", handleStickyMenu);
//     };
//   }, []);

//   return (
//     <header
//       className={`fixed left-0 top-0 z-99999 w-full py-5 ${
//         stickyMenu
//           ? "bg-white !py-4 shadow transition duration-100 dark:bg-black"
//           : ""
//       }`}
//     >
//       <div className="relative mx-auto max-w-c-1390 items-center justify-between px-4 md:px-8 xl:flex 2xl:px-0">
//         <div className="flex w-full items-center justify-between xl:w-1/4">
//           <a href="/">
//             <Image
//               src="/images/logo/TransloomLogoDark.png"
//               alt="logo"
//               width={150.03}
//               height={100}
//               className="hidden w-full dark:block"
//             />

//             <Image
//               src="/images/logo/TransloomLogo.png"
//               alt="logo"
//               width={150.03}
//               height={50}
//               className="w-full dark:hidden"
//             />
//           </a>

//           {/* <!-- Hamburger Toggle BTN --> */}

//           <button
//             aria-label="hamburger Toggler"
//             className="block xl:hidden"
//             onClick={() => setNavigationOpen(!navigationOpen)}
//           >
//             <span className="relative block h-5.5 w-5.5 cursor-pointer">
//               <span className="absolute right-0 block h-full w-full">
//                 <span
//                   className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-black delay-[0] duration-200 ease-in-out dark:bg-white ${
//                     !navigationOpen ? "!w-full delay-300" : "w-0"
//                   }`}
//                 ></span>
//                 <span
//                   className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-black delay-150 duration-200 ease-in-out dark:bg-white ${
//                     !navigationOpen ? "delay-400 !w-full" : "w-0"
//                   }`}
//                 ></span>
//                 <span
//                   className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-black delay-200 duration-200 ease-in-out dark:bg-white ${
//                     !navigationOpen ? "!w-full delay-500" : "w-0"
//                   }`}
//                 ></span>
//               </span>
//               <span className="du-block absolute right-0 h-full w-full rotate-45">
//                 <span
//                   className={`absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-black delay-300 duration-200 ease-in-out dark:bg-white ${
//                     !navigationOpen ? "!h-0 delay-[0]" : "h-full"
//                   }`}
//                 ></span>
//                 <span
//                   className={`delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-black duration-200 ease-in-out dark:bg-white ${
//                     !navigationOpen ? "!h-0 delay-200" : "h-0.5"
//                   }`}
//                 ></span>
//               </span>
//             </span>
//           </button>
//           {/* <!-- Hamburger Toggle BTN --> */}
//         </div>

//         {/* Nav Menu Start   */}
//         <div
//           className={`invisible h-0 w-full items-center justify-between xl:visible xl:flex xl:h-auto xl:w-full ${
//             navigationOpen &&
//             "navbar !visible mt-4 h-auto max-h-[400px] rounded-md bg-white p-7.5 shadow-solid-5 dark:bg-blacksection xl:h-auto xl:p-0 xl:shadow-none xl:dark:bg-transparent"
//           }`}
//         >
//           <nav>
//             <ul className="flex flex-col gap-5 xl:flex-row xl:items-center xl:gap-10">
//               {menuData.map((menuItem, key) => (
//                 <li key={key} className={menuItem.submenu && "group relative"}>
//                   {menuItem.submenu ? (
//                     <>
//                       <button
//                         onClick={() => setDropdownToggler(!dropdownToggler)}
//                         className="flex  cursor-pointer items-center justify-between gap-3 text-white hover:text-primary"
//                       >
//                         {menuItem.title}
//                         <span>
//                           <svg
//                             className="h-3 w-3 cursor-pointer fill-waterloo group-hover:fill-primary"
//                             xmlns="http://www.w3.org/2000/svg"
//                             viewBox="0 0 512 512"
//                           >
//                             <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
//                           </svg>
//                         </span>
//                       </button>
//                       <ul
//                         className={`dropdown ${dropdownToggler ? "flex" : ""}`}
//                       >
//                         {menuItem.submenu.map((item, key) => (
//                           <li
//                             key={key}
//                             className="text-white hover:text-primary"
//                           >
//                             <Link href={item.path || "#"}>{item.title}</Link>
//                           </li>
//                         ))}
//                       </ul>
//                     </>
//                   ) : (
//                     <Link
//                       href={`${menuItem.path}`}
//                       className={
//                         pathUrl === menuItem.path
//                           ? "items-center text-primary hover:text-primary"
//                           : "items-center hover:text-primary"
//                       }
//                     >
//                       <span className="font-semibold text-black dark:text-white">
//                         {menuItem.title}
//                       </span>
//                     </Link>
//                   )}
//                 </li>
//               ))}
//             </ul>
//             <Link href={"http://translator.transloom.com/"}>
//               <button className=" border-2 border-[#086373] px-5 py-2 font-semibold text-black shadow-lg transition-all ease-in-out hover:bg-[#086373] hover:text-white active:translate-x-2 active:translate-y-2 dark:border-white dark:text-white dark:hover:bg-black">
//                 Translate
//               </button>
//             </Link>
//           </nav>

//           <div className="mt-7 flex items-center gap-3 xl:mt-0">
//             <Link
//               href="/auth/signin"
//               className="flex items-center justify-center rounded-full bg-[#086373] px-7 py-2 text-sm text-white duration-300 ease-in-out hover:bg-opacity-80 dark:bg-white dark:text-black"
//             >
//               LOGIN
//             </Link>
//             <Link
//               href="/auth/signup"
//               className="flex items-center justify-center rounded-full bg-[#086373] px-7 py-2 text-sm text-white duration-300 ease-in-out hover:bg-opacity-80 dark:bg-white dark:text-black"
//             >
//               SIGN UP
//             </Link>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

// import Image from "next/image";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { useEffect, useState } from "react";

// import menuData from "./menuData";

// const Header = () => {
//   const [navigationOpen, setNavigationOpen] = useState(false);
//   const [dropdownToggler, setDropdownToggler] = useState(false);
//   const [stickyMenu, setStickyMenu] = useState(false);

//   const pathUrl = usePathname();

//   // Sticky menu
//   const handleStickyMenu = () => {
//     if (window.scrollY >= 80) {
//       setStickyMenu(true);
//     } else {
//       setStickyMenu(false);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleStickyMenu);
//     return () => {
//       window.removeEventListener("scroll", handleStickyMenu);
//     };
//   }, []);

//   return (
//     <header
//       className={`fixed left-0 top-0 z-99999 w-full py-5 ${
//         stickyMenu
//           ? "bg-black text-white shadow transition duration-100"
//           : "bg-white text-black dark:bg-black dark:text-white"
//       }`}
//     >
//       <div className="relative mx-auto max-w-c-1390 items-center justify-between px-4 md:px-8 xl:flex 2xl:px-0">
//         <div className="flex w-full items-center justify-between xl:w-1/4">
//           <a href="/">
//             <Image
//               src={stickyMenu ? "/images/logo/TransloomLogoDark.png" : "/images/logo/TransloomLogo.png"}
//               alt="logo"
//               width={150.03}
//               height={50}
//               className="w-full"
//             />
//           </a>

//           {/* Hamburger Toggle BTN */}
//           <button
//             aria-label="hamburger Toggler"
//             className="block xl:hidden"
//             onClick={() => setNavigationOpen(!navigationOpen)}
//           >
//             <span className="relative block h-5.5 w-5.5 cursor-pointer">
//               <span className="absolute right-0 block h-full w-full">
//                 <span
//                   className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-white ${
//                     !navigationOpen ? "!w-full delay-300" : "w-0"
//                   }`}
//                 ></span>
//                 <span
//                   className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-white ${
//                     !navigationOpen ? "delay-400 !w-full" : "w-0"
//                   }`}
//                 ></span>
//                 <span
//                   className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-white ${
//                     !navigationOpen ? "!w-full delay-500" : "w-0"
//                   }`}
//                 ></span>
//               </span>
//               <span className="du-block absolute right-0 h-full w-full rotate-45">
//                 <span
//                   className={`absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-white ${
//                     !navigationOpen ? "!h-0 delay-[0]" : "h-full"
//                   }`}
//                 ></span>
//                 <span
//                   className={`delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-white ${
//                     !navigationOpen ? "!h-0 delay-200" : "h-0.5"
//                   }`}
//                 ></span>
//               </span>
//             </span>
//           </button>
//           {/* Hamburger Toggle BTN */}
//         </div>

//         {/* Nav Menu Start */}
//         <div
//           className={`invisible h-0 w-full items-center justify-between xl:visible xl:flex xl:h-auto xl:w-full ${
//             navigationOpen &&
//             "navbar !visible mt-4 h-auto max-h-[400px] rounded-md bg-black p-7.5 shadow-solid-5 dark:bg-blacksection xl:h-auto xl:p-0 xl:shadow-none xl:dark:bg-transparent"
//           }`}
//         >
//           <nav>
//             <ul className="flex flex-col gap-5 xl:flex-row xl:items-center xl:gap-10">
//               {menuData.map((menuItem, key) => (
//                 <li key={key} className={menuItem.submenu && "group relative"}>
//                   {menuItem.submenu ? (
//                     <>
//                       <button
//                         onClick={() => setDropdownToggler(!dropdownToggler)}
//                         className="flex  cursor-pointer items-center justify-between gap-3 text-white hover:text-primary"
//                       >
//                         {menuItem.title}
//                         <span>
//                           <svg
//                             className="h-3 w-3 cursor-pointer fill-waterloo group-hover:fill-primary"
//                             xmlns="http://www.w3.org/2000/svg"
//                             viewBox="0 0 512 512"
//                           >
//                             <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
//                           </svg>
//                         </span>
//                       </button>
//                       <ul
//                         className={`dropdown ${dropdownToggler ? "flex" : ""}`}
//                       >
//                         {menuItem.submenu.map((item, key) => (
//                           <li
//                             key={key}
//                             className="text-white hover:text-primary"
//                           >
//                             <Link href={item.path || "#"}>{item.title}</Link>
//                           </li>
//                         ))}
//                       </ul>
//                     </>
//                   ) : (
//                     <Link
//                       href={`${menuItem.path}`}
//                       className={
//                         pathUrl === menuItem.path
//                           ? "items-center text-primary hover:text-primary"
//                           : "items-center hover:text-primary"
//                       }
//                     >
//                       <span className="font-semibold text-black dark:text-white">
//                         {menuItem.title}
//                       </span>
//                     </Link>
//                   )}
//                 </li>
//               ))}
//             </ul>
//             <Link href={"http://translator.transloom.com/"}>
//               <button className=" border-2 border-[#086373] px-5 py-2 font-semibold text-black shadow-lg transition-all ease-in-out hover:bg-[#086373] hover:text-white active:translate-x-2 active:translate-y-2 dark:border-white dark:text-white dark:hover:bg-black">
//                 Translate
//               </button>
//             </Link>
//           </nav>

//           <div className="mt-7 flex items-center gap-3 xl:mt-0">
//             <Link
//               href="/auth/signin"
//               className="flex items-center justify-center rounded-full bg-[#086373] px-7 py-2 text-sm text-white duration-300 ease-in-out hover:bg-opacity-80 dark:bg-white dark:text-black"
//             >
//               LOGIN
//             </Link>
//             <Link
//               href="/auth/signup"
//               className="flex items-center justify-center rounded-full bg-[#086373] px-7 py-2 text-sm text-white duration-300 ease-in-out hover:bg-opacity-80 dark:bg-white dark:text-black"
//             >
//               SIGN UP
//             </Link>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;
