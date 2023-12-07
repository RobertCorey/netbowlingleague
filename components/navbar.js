import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import { Disclosure } from "@headlessui/react";

const Navbar = () => {
  const navigation = ["Product", "Features", "Pricing", "Company", "Blog"];

  return (
    <div className="w-full">
      <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-0">
        {/* Logo  */}
        <Disclosure>
          {({ open }) => (
            <>
              <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
                <Link href="/">
                  <span className="flex items-center space-x-2 text-2xl font-medium text-teal-500 dark:text-gray-100">
                    <span>
                      <div className="flex gap-1 bg-slate-400 h-8 w-8 justify-center items-center rounded-md">
                        <div className="flex bg-slate-100 w-1 h-6 rounded-sm items-center justify-center">
                          <div className="bg-red-600 w-full h-1"></div>
                        </div>
                        <div className="flex bg-slate-100 w-1 h-6 rounded-sm items-center justify-center mt-1">
                          <div className="bg-red-600 w-full h-1"></div>
                        </div>
                        <div className="flex bg-slate-100 w-1 h-6 rounded-sm items-center justify-center">
                          <div className="bg-red-600 w-full h-1"></div>
                        </div>
                      </div>
                    </span>
                    <span>New England Thing Bowling League</span>
                  </span>
                </Link>
              </div>
            </>
          )}
        </Disclosure>

        <div className="hidden mr-3 space-x-4 lg:flex nav__item">
          <ThemeChanger />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
