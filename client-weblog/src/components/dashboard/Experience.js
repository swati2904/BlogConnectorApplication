import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteExperience } from "../../actions/profile";
import formatDate from "../../utils/formatDate";

export const Experience = ({ experience, deleteExperience }) => {
  const experiences = experience.map((expr) => (
    <div key={expr._id}>
      <div className='card-body'>
        <div>Comapany - {expr.company}</div>
        <div>Position - {expr.title}</div>
        <button
          onClick={() => deleteExperience(expr._id)}
          className='btn btn-danger'
        >
          Delete
        </button>
      </div>
      <div>
        {formatDate(expr.from)} - {expr.to ? formatDate(expr.to) : "Now"}
      </div>
    </div>
  ));
  return (
    <>
      <div className='card  ' style={{ width: "40rem" }}>
        <div className='card-header text-center bg-success'>
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
