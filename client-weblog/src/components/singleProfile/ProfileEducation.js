import React from "react";
import PropTypes from "prop-types";
import formatDate from "../../utils/formatDate";
import { Divider } from "antd";

const ProfileEducation = ({
  education: { school, degree, fieldofstudy, current, to, from, description },
}) => {
  return (
    <>
      <div>
        <h6 className='text-dark'>{school}</h6>
        <p className='text-dark'>
          {formatDate(from)} - {to ? formatDate(to) : "Now"}
        </p>
        <p>
          <strong>Degree: </strong> {degree}
        </p>
        <p>
          <strong>Field Of Study: </strong> {fieldofstudy}
        </p>
        <p>
          <strong>Description: </strong> {description}
        </p>
      </div>
      <Divider />
    </>
  );
};

ProfileEducation.propTypes = {
  education: PropTypes.object.isRequired,
};

export default ProfileEducation;
