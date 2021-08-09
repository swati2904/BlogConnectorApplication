import React from "react";
import PropTypes from "prop-types";
import formatDate from "../../utils/formatDate";
import { Divider } from "antd";

const ProfileExperience = ({
  experience: { company, title, location, current, to, from, description },
}) => {
  return (
    <>
      <div>
        <h5 className='text-dark'>{company}</h5>
        <p className='text-dark'>
          {formatDate(from)} - {to ? formatDate(to) : "Now"}
        </p>
        <p>
          <strong>Position: </strong> {title}
        </p>
        <p>
          <strong>Location: </strong> {location}
        </p>
        <p>
          <strong>Description: </strong> {description}
        </p>
      </div>
      <Divider />
    </>
  );
};

ProfileExperience.propTypes = {
  experience: PropTypes.object.isRequired,
};

export default ProfileExperience;
