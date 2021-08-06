import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import formatDate from "../../utils/formatDate";
import { deleteEducation } from "../../actions/profile";

export const Education = ({ education, deleteEducation }) => {
  const educations = education.map((edu) => (
    <div key={edu._id}>
      <div className='card-body'>
        <div>School - {edu.school}</div>
        <div>Degree - {edu.degree}</div>
        <div> Branch - {edu.fieldofstudy}</div>
        <button
          onClick={() => deleteEducation(edu._id)}
          className='btn btn-danger'
        >
          Delete
        </button>
      </div>
      <div>
        {formatDate(edu.from)} - {edu.to ? formatDate(edu.to) : "Now"}
      </div>
    </div>
  ));
  return (
    <>
      {" "}
      <div className='card' style={{ width: "40rem" }}>
        <div className='card-header text-center'>Education Details</div>
        {educations}
      </div>
    </>
  );
};

Education.propTypes = {
  education: PropTypes.array.isRequired,
  deleteEducation: PropTypes.func.isRequired,
};

export default connect(null, { deleteEducation })(Education);
