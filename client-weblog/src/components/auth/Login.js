import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import { Link, Redirect } from "react-router-dom";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../actions/auth";

const Login = ({ login, isAuthenticated }) => {
  const [formInput, setFormInput] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formInput;

  const onInputChange = (key, value) => {
    setFormInput({ ...formInput, [key]: value });
  };

  const onFinish = async (e) => {
    login(email, password);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };

  // page redirect if successfully login

  if (isAuthenticated) {
    return <Redirect to='/admin-profile' />;
  }

  return (
    <>
      <div className=' container d-grid h-100 align-items-center '>
        <div className='row border shadow-lg rounded'>
          <div className='col bg-light bg-gradient p-5'>
            <h2 className='large text-secondary d-flex justify-content-center align-items-center pb-2'>
              Login
            </h2>

            <Form
              {...layout}
              name='basic'
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <Form.Item
                label='Email'
                name='email'
                // rules={[
                //   {
                //     required: true,
                //     message: "Please enter your email address!",
                //   },
                // ]}
              >
                <Input
                  prefix={
                    <MailOutlined className='site-form-item-icon text-secondary' />
                  }
                  value={formInput.email}
                  onChange={(e) => onInputChange("email", e.target.value)}
                />
              </Form.Item>

              <Form.Item
                label='Password'
                name='password'
                // rules={[
                //   {
                //     required: true,
                //     message: "Please enter the password!",
                //   },
                // ]}
              >
                <Input.Password
                  prefix={
                    <LockOutlined className='site-form-item-icon text-secondary' />
                  }
                  value={formInput.password}
                  onChange={(e) => onInputChange("password", e.target.value)}
                />
              </Form.Item>

              <Form.Item
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              >
                <Button
                  type='primary'
                  htmlType='login'
                  className='shadow-lg rounded '
                  value='Login'
                >
                  Login
                </Button>
              </Form.Item>
            </Form>
          </div>
          <div className='col bg-success bg-gradient  align-items-center d-flex flex-column justify-content-center '>
            <h1> Welcome!</h1>
            <p>
              Don't have an account? <Link to='/signup'>Signup</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

Login.prototype = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
