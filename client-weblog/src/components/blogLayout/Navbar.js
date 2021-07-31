import React from "react";
import { AliwangwangOutlined } from "@ant-design/icons";

const Navbar = () => {
  return (
    <div className=' navbar bg-success bg-gradient d-flex justify-content-between  py-2 px-4 border-bottom  '>
      <div className='d-flex'>
        <AliwangwangOutlined style={{ color: "white", fontSize: "2rem" }} />{" "}
        <h3>
          {" "}
          <a className='text-decoration-none' href='index.html'>
            BlogConnector
          </a>
        </h3>
      </div>
      <div className='d-flex list-unstyled'>
        <li>
          <a className='text-decoration-none' href='signup.html'>
            Sign Up
          </a>
        </li>
        <li>
          <a className='text-decoration-none' href='login.html'>
            Login
          </a>
        </li>
      </div>
    </div>
  );
};

export default Navbar;
