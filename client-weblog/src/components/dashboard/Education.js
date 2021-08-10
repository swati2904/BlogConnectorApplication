import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import formatDate from "../../utils/formatDate";
import { deleteEducation } from "../../actions/profile";
import { Divider } from "antd";

export const Education = ({ education, deleteEducation }) => {
  const educations = education.map((edu) => (
    <div key={edu._id}>
      <div className='card card-body border-0 '>
        <div className='row'>
          <div className='col-8 fs-6'>
            <h6>School/College - {edu.school}</h6>
            <p className='text-secondary'>
              {formatDate(edu.from)} - {edu.to ? formatDate(edu.to) : "Now"}
            </p>
            <p className='fw-light fst-italic'>{edu.degree}</p>

            <p> Branch/sub. - {edu.fieldofstudy}</p>
            <p> Description - {edu.description}</p>
          </div>
          <div className='col-4 d-flex align-items-center justify-content-center'>
            <button
              onClick={() => deleteEducation(edu._id)}
              className='btn alert-danger'
            >
              Delete
            </button>
          </div>
        </div>
        <Divider />
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
