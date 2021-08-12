import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Spin } from "antd";
import { getProfiles } from "../../actions/profile";
import ProfileItem from "./ProfileItem";

const Profiles = ({ getProfiles, profile: { profiles, loading } }) => {
  useEffect(() => {
    getProfiles();
  }, [getProfiles]);

  return (
    <>
      {loading ? (
        <Spin
          tip='Loading...'
          className='position-absolute top-50 start-50'
        ></Spin>
      ) : (
        <>
          <div className='container'>
            <h1 className='fs-1 text-capitalize'> users profile</h1>
            <h5 className='fs-5 text-capitalize text-secondary mx-5 mb-3'>
              Connect with Bloggers
            </h5>

            <div className='card border-0 '>
              <div className='d-flex flex-wrap '>
                {profiles.length > 0 ? (
                  profiles.map((profile) => (
                    <ProfileItem key={profile._id} profile={profile} />
                  ))
                ) : (
                  <h4> No profile found!!!</h4>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

Profiles.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { getProfiles })(Profiles);
