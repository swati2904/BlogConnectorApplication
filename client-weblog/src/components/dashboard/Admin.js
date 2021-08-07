import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentProfile, deleteAccount } from "../../actions/profile";
import { Spin, Layout } from "antd";
import { ProfileAction } from "./ProfileAction";
import Experience from "./Experience";
import Education from "./Education";

const Admin = ({
  getCurrentProfile,
  deleteAccount,
  auth: { user },
  profile: { profile, loading },
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  const { Content, Sider } = Layout;

  return (
    // (loading && profile === null) ? (
    // <Spin
    //   tip='Loading...'
    //   className='position-absolute top-50 start-50'
    // ></Spin>
    // ) : (

    // );

    <>
      <Layout>
        {profile !== null ? (
          <>
            <Sider
              className='site-layout-background'
              style={{
                overflow: "auto",
                height: "100vh",
                position: "fixed",
                left: 0,
              }}
            >
              <img
                className='rounded-circle mx-auto d-block my-3'
                style={{ height: "25%", width: "80%" }}
                src={user && user.avatar}
                alt=''
              />

              <div className=' text-center bold'>
                <p className='text-success  fs-3'> {user && user.name}</p>
                <p className='text-white-50'> {user && user.email} </p>

                <button type='button' className='btn btn-dark btn-sm'>
                  {profile && profile.status}
                </button>
              </div>

              <ul className='px-0 w-100  my-3'>
                <li className='w-100 text-center'>
                  <ProfileAction />
                </li>
              </ul>
            </Sider>

            <Layout className='site-layout' style={{ marginLeft: 200 }}>
              <Content>
                <div className='site-layout-background container '>
                  <h1 className='large text-secondary'> DASHBOARD</h1>
                  <small>Experience </small>
                  <hr></hr>
                  <Experience experience={profile.experience} />
                  <br></br>
                  <small>Education </small>
                  <hr></hr>
                  <Education education={profile.education} />
                  <hr></hr>
                  <div className='d-flex justify-content-end align-items-center my-3 mx-3'>
                    <small>All data will be removed permanently</small>
                    <button
                      className='btn btn-danger  mx-3'
                      onClick={() => deleteAccount()}
                    >
                      Delete My Account
                    </button>
                  </div>
                </div>
              </Content>
            </Layout>
          </>
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
      </Layout>
    </>
  );
};
Admin.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(
  Admin
);
