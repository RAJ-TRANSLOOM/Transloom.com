import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import menuData from "./menuData";
import Link from "next/link";
import Image from 'next/image'

const Header = () => {
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [dropdownToggler, setDropdownToggler] = useState(false);
  const [stickyMenu, setStickyMenu] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Initialize isAuthenticated state

  const pathUrl = usePathname();
  const router = useRouter();

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
    return () => {
      window.removeEventListener("scroll", handleStickyMenu);
    };
  }, []);

  // Check for jwtToken in localStorage on initial render
  useEffect(() => {
    const token = localStorage.getItem("jwtToken");
    const authPaths = ["/auth/signin", "/auth/signup"];
    if (token) {
      setIsAuthenticated(true);

      // Redirect authenticated users away from signin and signup pages
      const currentPath = window.location.pathname;
      if (authPaths.includes(currentPath)) {
        router.push("/");
      }
    } else {
      setIsAuthenticated(false);
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("jwtToken");
    setIsAuthenticated(false);
    // Optionally, you can refresh the page or redirect to another page
    // location.reload();
  };

  const { theme, setTheme } = useTheme();
  // Ensure the theme is set properly on initial render
  useEffect(() => {
    setTheme(theme === "dark" ? "dark" : "light");
  }, [theme, setTheme]);

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
          <a href="/">
            {/* Replace with your logo */}
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
            {/* Hamburger icon */}
            {/* Replace with your hamburger icon */}
          </button>
          {/* <!-- Hamburger Toggle BTN --> */}
        </div>

        {/* Nav Menu Start */}
        <div
          className={`invisible h-0 w-full items-center justify-between xl:visible xl:flex xl:h-auto xl:w-full ${
            navigationOpen &&
            "navbar !visible mt-4 h-auto max-h-[400px] rounded-md bg-white p-7.5 shadow-solid-5 dark:bg-blacksection xl:h-auto xl:p-0 xl:shadow-none xl:dark:bg-transparent"
          }`}
        >
          <nav>
            <ul className="flex flex-col gap-5 xl:flex-row xl:items-center xl:gap-10">
              {/* Your menu items */}
            </ul>
            <Link href={"http://translate.transloom.com/"}>
              <button className=" border-2 border-[#086373] px-5 py-2 font-semibold text-black shadow-lg transition-all ease-in-out hover:bg-[#086373] hover:text-white active:translate-x-2 active:translate-y-2 dark:border-white dark:text-white dark:hover:bg-black">
                Translate
              </button>
            </Link>
          </nav>

          <div className="mt-7 flex items-center gap-3 xl:mt-0">
            {/* Conditionally render buttons based on authentication */}
            {isAuthenticated ? (
              <>
                <Link
                  href="/dashboard"
                  className="flex items-center justify-center rounded-full bg-[#086373] px-7 py-2 text-sm text-white duration-300 ease-in-out hover:bg-opacity-80 dark:bg-white dark:text-black"
                >
                  DASHBOARD
                </Link>
                <button
                  onClick={handleLogout}
                  className="flex items-center justify-center rounded-full bg-[#086373] px-7 py-2 text-sm text-white duration-300 ease-in-out hover:bg-opacity-80 dark:bg-white dark:text-black"
                >
                  LOGOUT
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/auth/signup"
                  className="flex items-center justify-center rounded-full bg-[#086373] px-7 py-2 text-sm text-white duration-300 ease-in-out hover:bg-opacity-80 dark:bg-white dark:text-black"
                >
                  REQUEST ACCESS
                </Link>
                <Link
                  href="/auth/signin"
                  className="flex items-center justify-center rounded-full bg-[#086373] px-7 py-2 text-sm text-white duration-300 ease-in-out hover:bg-opacity-80 dark:bg-white dark:text-black"
                >
                  LOGIN
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
