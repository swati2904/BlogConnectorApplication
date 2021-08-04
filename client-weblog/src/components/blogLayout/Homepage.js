import React from "react";
import blogImage from "../../assets/blog.jpg";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Homepage = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to='/admin-profile' />;
  }
  return (
    <>
      <div className='homepage  '>
        <div className='row h-100 w-100'>
          <div className='col-8 text-center d-flex flex-column align-items-center justify-content-center'>
            <div className=' text-white fw-bold fs-1'>
              Accelerating <br />
              <span>blog connector</span>
            </div>
            <p>
              Create a blog, share posts and maintain your portfolio which helps
              to other developers...
            </p>
            <div class='buttons'>
              <Link to='/signup' class='btn btn-primary m-2'>
                Sign Up
              </Link>
              <Link to='/login' class='btn btn-light'>
                Login
              </Link>
            </div>
          </div>
          <div className='col-4 rounded float-end align-items-center d-flex'>
            <img
              class='homepage-background rounded-circle'
              src={blogImage}
              alt='homepage'
            />
          </div>
        </div>
      </div>
    </>
  );
};

Homepage.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Homepage);
