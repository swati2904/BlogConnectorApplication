import React from "react";
import PropTypes from "prop-types";
import { MailOutlined, GithubOutlined } from "@ant-design/icons";
import { Divider } from "antd";

const ProfileContact = ({ profile: { githubusername }, auth: { email } }) => {
  return (
    <div className='card border-0 my-1'>
      <div className='col-12 px-3 py-1'>
        <div className='card px-1 bg-light py-2 my-2'>
          <div className='mx-2'>
            <h5 className='text-success py-2'>Contact</h5>
            <div className='d-flex'>
              {" "}
              <GithubOutlined className=' col-1' />
              <div className='col-11'>
                <h6>Github Profile</h6>
                <p className='text-secondary'>{githubusername}</p>
              </div>
            </div>
            <Divider />
            <div className='d-flex'>
              {" "}
              <MailOutlined className=' col-1' />
              <div className='col-11'>
                <h6>Email</h6>
                <p className='text-secondary'>{email}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ProfileContact.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileContact;
