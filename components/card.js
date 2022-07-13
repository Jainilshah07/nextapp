import React from "react";
import Image from "next/image";
// import styles from "../styles/Home.module.css";


const Card = (props) => {
  return (
    <>
      <div className="container flex justify-center">
        <div className="container rounded-lg shadow-lg bg-white max-w-sm">
          <div className="p-6">
            <div>
              <Image
               src={props.image}
               alt="logo"
               width={275}
               height={200}
               />
            </div>
            <h5 className="text-gray-900 text-xl font-medium mb-2">
              {props.title}
            </h5>
            <p className="text-gray-700 text-base mb-4">{props.description}</p>
            <button
              type="button"
              className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Go To Course
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
