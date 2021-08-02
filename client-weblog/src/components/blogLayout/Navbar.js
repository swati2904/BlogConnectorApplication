import React from "react";
import { AliwangwangFilled } from "@ant-design/icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=' navbar bg-success bg-gradient d-flex justify-content-between  py-2 px-4 border-bottom   '>
      <div className='d-flex'>
        <AliwangwangFilled className='fs-2 text-white' />{" "}
        <h3>
          {" "}
          <Link to='/'>BlogConnector</Link>
        </h3>
      </div>
      <div className='d-flex list-unstyled'>
        <li>
          <Link to='signup'>Sign Up</Link>
        </li>
        <li>
          <Link to='login'>Login</Link>
        </li>
      </div>
    </div>
  );
};

export default Navbar;
