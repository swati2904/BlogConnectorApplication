import React from "react";
import PropTypes from "prop-types";
// import bloggerImage from "../../assets/bloggerProfile.jpeg";

import {
  TwitterOutlined,
  FacebookOutlined,
  LinkedinOutlined,
  YoutubeOutlined,
  GlobalOutlined,
  InstagramOutlined,
} from "@ant-design/icons";

const ProfileTop = ({
  profile: {
    status,
    company,
    location,
    website,
    social,
    user: { name, avatar },
  },
}) => {
  return (
    <>
      {/* <img
            // className='img-fluid'
            style={{ height: "150px" }}
            src={bloggerImage}  
            alt='homepage'
          /> */}

      <div className='col-6 px-3 py-2'>
        <img
          src={avatar}
          alt=''
          className='rounded-circle profile-top-section'
        />
        <h2 className='text-dark text-capitalize'>{name}</h2>
        <p className='text-secondary'>
          {status} {company && <span> at {company}</span>}
        </p>
        <p className='text-secondary'>{location && <span>{location}</span>}</p>
        <div class='icons my-1'>
          {website && (
            <a href={website} target='_blank' rel='noopener noreferrer'>
              <GlobalOutlined className='site-form-item-icon text-secondary fs-4 mx-2' />
            </a>
          )}
          {social && social.twitter && (
            <a href={social.twitter} target='_blank' rel='noopener noreferrer'>
              <TwitterOutlined className='site-form-item-icon text-secondary fs-4 mx-2' />
            </a>
          )}
          {social && social.facebook && (
            <a href={social.facebook} target='_blank' rel='noopener noreferrer'>
              <FacebookOutlined className='site-form-item-icon text-secondary fs-4 mx-2' />
            </a>
          )}
          {social && social.linkedin && (
            <a href={social.linkedin} target='_blank' rel='noopener noreferrer'>
              <LinkedinOutlined className='site-form-item-icon text-secondary fs-4 mx-2' />
            </a>
          )}
          {social && social.youtube && (
            <a href={social.youtube} target='_blank' rel='noopener noreferrer'>
              <YoutubeOutlined className='site-form-item-icon text-secondary fs-4 mx-2' />
            </a>
          )}
          {social && social.instagram && (
            <a
              href={social.instagram}
              target='_blank'
              rel='noopener noreferrer'
            >
              <InstagramOutlined className='site-form-item-icon text-secondary fs-4 mx-2' />
            </a>
          )}
        </div>
      </div>
    </>
  );
};

ProfileTop.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileTop;
