import React, {useState} from "react";
import {AiOutlineShoppingCart, AiOutlineClose, AiOutlineMenu} from "react-icons/ai";
import Avatar from "@mui/material/Avatar";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    console.log('het')
    setNav(!nav);
  };

  return(
    <div className="flex justify-between items-center text-black relative container mx-auto p-8 border-b-2">
      <div className="block md:hidden mx-4 mt-2 items-center " onClick={handleNav} >
        {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} /> }
      </div>
      
        <h1 className="w-full text-3xl font-kanit font-bold">sneakers</h1>
        <ul className="hidden md:flex">
          <li className="p-4 hover:text-amber-400">Collections</li>
          <li className="p-4 hover:text-amber-400">Men</li>
          <li className="p-4 hover:text-amber-400">Women</li>
          <li className="p-4 hover:text-amber-400">About</li>
          <li className="p-4 hover:text-amber-400">Contacts</li>
        </ul>
        <div className="flex justify-between items-center mx-auto">
          <AiOutlineShoppingCart className="mt-2 mr-8" size={25} />
          <Avatar className="table-avatar mt-2" src="" />
        </div>

        <div className={!nav ? "fixed left-0 top-0 w-[60%] h-full pl-8 mx-20 ease-in-out duration-300" : "fixed left-[-100%]"}>
        <ul className="pt-24  mt-4 uppercase">
          <li className="p-4 underline hover:text-amber-400">Collections</li>
          <li className="p-4 underline hover:text-amber-400">Men</li>
          <li className="p-4 underline hover:text-amber-400">Women</li>
          <li className="p-4 underline hover:text-amber-400">About</li>
          <li className="p-4 underline hover:text-amber-400">Contacts</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar;