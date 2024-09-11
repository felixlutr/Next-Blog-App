import Image from "next/image";
import React from "react";
import logo from "../Assets/logo.png"

const Header = () => {
  return ( 
  <div className="py-5 px-5 md:px-12 lg:px-28">
<div className="flex justify-between items-center">
<Image src={logo} width={180} alt='' className="w-[130px] sm:w-auto"/> 
</div>
  </div>
  )
};

export default Header;


