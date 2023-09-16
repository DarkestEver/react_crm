import { Button } from '@/components/ui/button';
import { Link } from "react-dom";
import React from "react";

const Navbar = () => {
  return <>
    <div className=" inset-x-0 top-0 bg-white dark:bg-gray-950 z-[10] h-fit border-b border-zinc-300  py-2 ">
      <div className="flex items-center justify-between h-full gap-2 px-8 mx-auto max-w-7xl">
    
        <div href={"/"} className="flex items-center gap-2">
          <p className="rounded-lg border-2 border-b-2 border-r-4 border-black px-2 py-1 text-xl font-bold md:block dark:border-white">
            CRM App
          </p>
        </div>
        <div className="flex items-center">
          {/* <ThemeToggle className="mr-4" /> */}
          <Button className="mr-4">Signup</Button>
          <Button>Login</Button>
        </div>
      </div>
    </div>
  </>;
};

export default Navbar;
