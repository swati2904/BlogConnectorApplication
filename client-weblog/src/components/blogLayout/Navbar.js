import React from "react";
import { AliwangwangFilled } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";
import { LogoutOutlined } from "@ant-design/icons";

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <div>
      <li>
        <a onClick={logout} href='#!'>
          {" "}
          <LogoutOutlined className='fs-3 text-white mx-1' />
          {/* <span className='hide-sm'>Logout</span> */}
          Logout
        </a>
      </li>
    </div>
  );
  const guestLinks = (
    <div className='d-flex '>
      <li>
        <Link to='signup'>Sign Up</Link>
      </li>
      <li>
        <Link to='login'>Login</Link>
      </li>
    </div>
  );
  return (
    <div className='navbar bg-success bg-gradient d-flex justify-content-between  py-2 px-4 border-bottom list-unstyled  align-content-center'>
      <h3>
        {" "}
        <Link to='/' className='d-flex align-items-center'>
          <AliwangwangFilled className='fs-1 text-white' /> BlogConnector
        </Link>
      </h3>
      <div>{!loading && <>{isAuthenticated ? authLinks : guestLinks} </>}</div>
    </div>
  );
};

Navbar.prototype = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
