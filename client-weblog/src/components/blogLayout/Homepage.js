import React from "react";
import blogImage from "../../assets/blog.jpg";

const Homepage = () => {
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
              to other developer...
            </p>
            <div class='buttons'>
              <a href='register.html' class='btn btn-primary m-2'>
                Sign Up
              </a>
              <a href='login.html' class='btn btn-light'>
                Login
              </a>
            </div>
          </div>
          <div className='col-4 rounded float-end align-items-center d-flex'>
            <img class='homepage-background' src={blogImage} alt='homepage' />
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
