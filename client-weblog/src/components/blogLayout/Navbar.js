import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";
import {
  AliwangwangFilled,
  LogoutOutlined,
  UserOutlined,
} from "@ant-design/icons";

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <div className='d-flex align-items-center'>
      <li>
        <Link to='/profiles' className='d-flex align-items-center'>
          Bloggers
        </Link>
      </li>
      <li>
        <Link to='/posts' className='d-flex align-items-center'>
          Posts
        </Link>
      </li>
      <li>
        <Link to='/admin-profile' className='d-flex align-items-center'>
          <UserOutlined className='fs-5 mx-1' />
          Admin
        </Link>
      </li>
      <li>
        <a onClick={logout} href='#!' className='d-flex align-items-center'>
          {" "}
          <LogoutOutlined className='fs-5 mx-1' />
          {/* <span className='hide-sm'>Logout</span> */}
          Logout
        </a>
      </li>
    </div>
  );
  const guestLinks = (
    <div className='d-flex '>
      <li>
        <Link to='/profiles'>Bloggers</Link>
      </li>
      <li>
        <Link to='/signup'>Sign Up</Link>
      </li>
      <li>
        <Link to='/login'>Login</Link>
      </li>
    </div>
  );
  return (
    <div className='navbar overflow-hidden bg-success w-100 bg-gradient d-flex justify-content-between  py-2 px-4 border-bottom list-unstyled  align-content-center'>
      <h3>
        {" "}
        <Link to='/' className='d-flex align-items-center'>
          <AliwangwangFilled className='fs-2 text-white' /> BlogConnector
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
