import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentProfile, deleteAccount } from "../../actions/profile";
import { Layout } from "antd";
import { ProfileAction } from "./ProfileAction";
import Experience from "./Experience";
import Education from "./Education";

const Admin = ({
  getCurrentProfile,
  deleteAccount,
  auth: { user },
  profile: {
    profile,
    //  loading
  },
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
      {profile !== null ? (
        <>
          <Sider
            width={240}
            className='site-layout-background'
            style={{
              overflow: "auto",
              height: "100vh",
              position: "fixed",
              left: 0,
            }}
          >
            <img
              className='rounded-circle mx-auto d-block my-3 h-25 w-75'
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

          <Layout className='site-layout' style={{ marginLeft: 250 }}>
            <Content>
              <div className='site-layout-background container '>
                <h1 className='large text-secondary'> DASHBOARD</h1>
                <Experience experience={profile.experience} />
                <Education education={profile.education} />
                <div className='d-flex justify-content-end align-items-center my-3 mx-3 text-secondary'>
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
        <div className='card border-0 w-100 h-100 d-flex justify-content-center align-items-center '>
          <div className='py-4 px-4'>
            Your profile has not been created yet, please add some infomation...
          </div>

          <Link to='/create-profile' className='btn btn-primary '>
            Create Profile
          </Link>
        </div>
      )}
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
