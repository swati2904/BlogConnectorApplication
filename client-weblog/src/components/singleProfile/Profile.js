import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Spin, Timeline } from "antd";
import { getProfileById } from "../../actions/profile";
import ProfileTop from "./ProfileTop";
import ProfileAbout from "./ProfileAbout";
import ProfileExperience from "./ProfileExperience";
import ProfileEducation from "./ProfileEducation";
import ProfileGithub from "./ProfileGithub";
import ProfileContact from "./ProfileContact";
import { EditOutlined } from "@ant-design/icons";

const Profile = ({ getProfileById, profile: { profile }, auth, match }) => {
  useEffect(() => {
    getProfileById(match.params.id);
  }, [getProfileById, match.params.id]);

  return (
    <>
      {profile === null ? (
        <Spin
          tip='Loading...'
          className='position-absolute top-50 start-50'
        ></Spin>
      ) : (
        <>
          <div className='container mt-4'>
            <Link to='/profiles' className='btn btn-dark '>
              {" "}
              Back to Profiles
            </Link>
            {auth.isAuthenticated &&
              auth.loading === false &&
              auth.user._id === profile.user._id && (
                <Link
                  to='/edit-profile'
                  className='btn alert-warning float-end  d-flex align-items-center'
                >
                  <EditOutlined className='mx-2' />
                  Edit Profile
                </Link>
              )}
            <div className='card mt-4'>
              <div className='row'>
                <div className='col-12'>
                  <div
                    className='alert-primary   text-center'
                    style={{ height: "150px" }}
                  ></div>
                  <ProfileTop profile={profile} />
                  <ProfileAbout profile={profile} />

                  <div className='card border-0  my-1'>
                    <div className='col-12 px-3 py-1'>
                      <div className='card px-1 bg-light py-2 my-2'>
                        <h5 className='text-success mx-2'>Experience</h5>
                        {profile.experience.length > 0 ? (
                          <>
                            <Timeline className='m-3'>
                              {profile.experience.map((experience) => (
                                <Timeline.Item className='text-secondary'>
                                  {" "}
                                  <ProfileExperience
                                    key={experience._id}
                                    experience={experience}
                                  />
                                </Timeline.Item>
                              ))}
                            </Timeline>
                          </>
                        ) : (
                          <h6> No Experience credentials</h6>
                        )}
                      </div>

                      <div className='card px-1 bg-light py-2 my-2'>
                        <h5 className='text-success mx-2'>Education</h5>

                        {profile.education.length > 0 ? (
                          <>
                            <Timeline className='m-3'>
                              {profile.education.map((education) => (
                                <Timeline.Item
                                  className='text-secondary'
                                  color='gray'
                                >
                                  {" "}
                                  <ProfileEducation
                                    key={education._id}
                                    education={education}
                                  />
                                </Timeline.Item>
                              ))}
                            </Timeline>
                          </>
                        ) : (
                          <h6> No Education credentials</h6>
                        )}
                      </div>
                    </div>
                  </div>

                  {profile.githubusername && (
                    <ProfileGithub username={profile.githubusername} />
                  )}

                  <ProfileContact profile={profile} auth={auth.user} />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

Profile.propTypes = {
  getProfileById: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
});

export default connect(mapStateToProps, { getProfileById })(Profile);
