import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../actions/profile";
import { Spin } from "antd";

const Admin = ({
  getCurrentProfile,
  auth: { user },
  profile: { profile, loading },
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, []);
  return loading && profile === null ? (
    <Spin tip='Loading...' className='position-absolute top-50 start-50'></Spin>
  ) : (
    <>
      <div className='container mt-4'>
        <h1 className='large text-secondary'> ADMIN PROFILE</h1>
        <p className='text-black-50 '> Welcome {user && user.name}</p>
        {profile !== null ? (
          <> has </>
        ) : (
          <>
            <p>
              You have not created your profile yet, please add some
              infomation...
            </p>
            <Link to='/create-profile' className='btn btn-primary my-1'>
              Create Profile
            </Link>
          </>
        )}
      </div>
    </>
  );
};

Admin.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile })(Admin);
