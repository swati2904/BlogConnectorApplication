import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ProfileItem = ({
  profile: {
    user: { _id, name, avatar },
    status,
    company,
    location,
    skills,
  },
}) => {
  return (
    <div className=' w-50 px-2 py-2'>
      <div className='card bg-light'>
        <div className='row '>
          <div className='col-4 px-4 py-4 d-flex flex-column align-items-center'>
            <img
              src={avatar}
              alt=''
              className='rounded-circle float-start mx-auto d-block pb-4 w-100 h-75'
            />
            <Link
              target='_blank'
              className='btn btn-outline-success '
              to={`/profile/${_id}`}
            >
              View Profile
            </Link>
          </div>
          <div className='col-8 px-4 py-4 d-flex justify-content-center'>
            <div>
              <h2>{name}</h2>
              <p>
                {status} {company && <span> at {company}</span>}
              </p>
              <p>{location && <span>{location}</span>}</p>
              <div className='d-flex w-100 flex-wrap list-unstyled '>
                {skills.slice(0, 4).map((skill, index) => (
                  <div className='btn btn-secondary mx-1 btn-sm disabled'>
                    {" "}
                    <li key={index}> {skill}</li>{" "}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileItem;
