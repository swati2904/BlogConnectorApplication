import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteExperience } from "../../actions/profile";
import formatDate from "../../utils/formatDate";
import { Divider } from "antd";

export const Experience = ({ experience, deleteExperience }) => {
  const experiences = experience.map((expr) => (
    <div key={expr._id}>
      <div className='card card-body border-0 '>
        <div className='row '>
          <div className='col-8 fs-6'>
            <h6>Comapany - {expr.company}</h6>
            <p className='text-secondary'>
              {formatDate(expr.from)} - {expr.to ? formatDate(expr.to) : "Now"}
            </p>
            <p className='fw-light fst-italic'>{expr.title}</p>
            <p>Description - {expr.description}</p>
          </div>
          <div className='col-4 d-flex align-items-center justify-content-center'>
            <button
              onClick={() => deleteExperience(expr._id)}
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
      <div className='card border-0 w-100 '>
        <div className='card-header text-center alert-success bold fs-5'>
          Experience Deatils
        </div>
        {experiences}{" "}
      </div>
    </>
  );
};

Experience.propTypes = {
  experience: PropTypes.array.isRequired,
  deleteExperience: PropTypes.func.isRequired,
};

export default connect(null, { deleteExperience })(Experience);
