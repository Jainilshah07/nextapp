import React from "react";
import logo from "../assets/logo.png";
import Image from "next/image";
import { useRouter } from 'next/router'

const Navbar = () => {
  const router = useRouter()
  const handleLogin = (e)=>{
    e.preventDefault()
    router.push('/login')
  }
  return (
    <>
      <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
        <a href="/">
          <Image
            src={logo}
            alt="logo"
            width={45}
            height={45}
          />
        </a>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <a
              href="/"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
            >
              Home
            </a>
            <a
              href="/courses"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
            >
              Courses
            </a>
            <a
              href="/about"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
            >About</a>
          </div>
          <div>
            <a onClick={handleLogin}
              href="/login"
              className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
            >
              Login
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
