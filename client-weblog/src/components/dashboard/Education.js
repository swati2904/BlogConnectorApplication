import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import formatDate from "../../utils/formatDate";
import { deleteEducation } from "../../actions/profile";

export const Education = ({ education, deleteEducation }) => {
  const educations = education.map((edu) => (
    <div key={edu._id}>
      <div className='card card-body border-0'>
        <div className='row'>
          <div className='col-8'>
            <div>School/College - {edu.school}</div>
            <div>Degree - {edu.degree}</div>
            <div>
              {formatDate(edu.from)} - {edu.to ? formatDate(edu.to) : "Now"}
            </div>
            <div> Branch - {edu.fieldofstudy}</div>
          </div>
          <div className='col-4 d-flex align-items-center justify-content-center'>
            <button
              onClick={() => deleteEducation(edu._id)}
              className='btn btn-danger'
            >
              Delete
            </button>
          </div>
        </div>
        <hr></hr>
      </div>
    </div>
  ));
  return (
    <>
      {" "}
      <div className='card border-0 w-100'>
        <div className='card-header text-center alert-success bold fs-5'>
          Education Details
        </div>
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
