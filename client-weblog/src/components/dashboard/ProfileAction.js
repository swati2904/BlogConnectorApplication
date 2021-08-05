import React from "react";
import { Link } from "react-router-dom";
import { EditOutlined, BookOutlined, LaptopOutlined } from "@ant-design/icons";

export const ProfileAction = () => {
  return (
    <div className='d-grid justify-content-center col-12 '>
      <Link
        to='/edit-profile'
        className='profile-action btn text-secondary  py-2 my-1 d-flex align-items-center '
      >
        <EditOutlined className='fs-4 mx-2' /> Edit Profile
      </Link>

      <Link
        to='/experience'
        className='profile-action btn text-secondary py-2 my-1 d-flex align-items-center'
      >
        <BookOutlined className='fs-4 mx-2' /> Add Experience
      </Link>

      <Link
        to='/education'
        className='profile-action btn text-secondary py-2 my-1 d-flex align-items-center'
      >
        <LaptopOutlined className='fs-4 mx-2' />
        Add Education
      </Link>
    </div>
  );
};
