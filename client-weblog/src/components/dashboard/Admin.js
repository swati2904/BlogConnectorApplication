import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../actions/profile";
import { Spin, Layout } from "antd";
import { ProfileAction } from "./ProfileAction";

const Admin = ({
  getCurrentProfile,
  auth: { user },
  profile: { profile, loading },
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  const { Content, Sider } = Layout;

  return loading && profile === null ? (
    <Spin tip='Loading...' className='position-absolute top-50 start-50'></Spin>
  ) : (
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
        <Layout className='site-layout' style={{ marginLeft: 200 }}>
          <Content>
            <div className='site-layout-background container'>
              <h1 className='large text-secondary'> DASHBOARD</h1>
            </div>
          </Content>
        </Layout>
      </Layout>
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
