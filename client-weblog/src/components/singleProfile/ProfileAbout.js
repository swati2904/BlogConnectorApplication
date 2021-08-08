import React from "react";
import PropTypes from "prop-types";
import { CheckOutlined } from "@ant-design/icons";

const ProfileAbout = ({
  profile: {
    bio,
    skills,
    user: { name },
  },
}) => {
  return (
    <div className='card  border-0 my-2'>
      <div className='col-12 px-3 py-2 '>
        <div className='card px-1 bg-light py-2 my-2'>
          {bio && (
            <>
              <h4 className='text-success'>About</h4>
              <p className='d-flex flex-wrap'>{bio}</p>{" "}
            </>
          )}
        </div>
        <div className='card px-1 bg-light py-2 my-2'>
          <h4 className='text-success'>Skill Set</h4>
          <div className='d-flex flex-wrap  justify-content-center'>
            {skills.map((skill, index) => (
              <div key={index} className='p-2 d-flex align-items-center'>
                <CheckOutlined className='mx-1 text-secondary ' />
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileAbout;
