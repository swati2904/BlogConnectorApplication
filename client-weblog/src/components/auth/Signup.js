import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import { Link } from "react-router-dom";
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import { addToast } from "../../actions/toast";
import PropTypes from "prop-types";

const Signup = ({ addToast }) => {
  const [formInput, setFormInput] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassowrd: "",
  });
  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };

  const onInputChange = (key, value) => {
    setFormInput({ ...formInput, [key]: value });
  };

  const onFinish = async (e) => {
    if (formInput.password !== formInput.confirmPassowrd) {
      addToast("Entered password do not match ", "danger");
    } else {
      console.log(formInput);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <div className=' container auth-page align-items-center'>
        <div className='row border shadow-lg rounded'>
          <div className='col bg-success bg-gradient  align-items-center d-flex flex-column justify-content-center '>
            <h1> Welcome!</h1>
            <p>
              Already have an account? <Link to='/login'>Login</Link>
            </p>
          </div>
          <div className='col bg-light bg-gradient p-5  '>
            <h2 className='large text-secondary d-flex justify-content-center align-items-center  pb-2'>
              Sign Up
            </h2>

            <Form
              {...layout}
              name='basic'
              initialValues={{
                remember: true,
              }}
              onFinish={(e) => onFinish(e)}
              onFinishFailed={onFinishFailed}
            >
              <Form.Item
                label='Name'
                name='name'
                rules={[
                  {
                    required: true,
                    message: "Please enter your name!",
                  },
                ]}
              >
                <Input
                  prefix={
                    <UserOutlined className='site-form-item-icon text-secondary' />
                  }
                  value={formInput.name}
                  onChange={(e) => onInputChange("name", e.target.value)}
                />
              </Form.Item>

              <Form.Item
                label='Email'
                name='email'
                rules={[
                  {
                    required: true,
                    message: "Please enter your email address!",
                  },
                  {
                    pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    message: "Please enter valid email address!",
                  },
                ]}
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
                rules={[
                  {
                    required: true,
                    message: "Please enter the password!",
                  },
                  {
                    min: 4,
                    message: "Password cannot be less than 4 characters",
                  },
                ]}
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
                label='Confirm password'
                name='confirmPassword'
                rules={[
                  {
                    required: true,
                    message: "Confirm  password",
                  },
                ]}
              >
                <Input.Password
                  prefix={
                    <LockOutlined className='site-form-item-icon text-secondary' />
                  }
                  value={formInput.confirmPassowrd}
                  onChange={(e) =>
                    onInputChange("confirmPassowrd", e.target.value)
                  }
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
                  htmlType='signin'
                  className='shadow-lg rounded '
                  value='signup'
                >
                  signIn
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

Signup.propTypes = {
  addToast: PropTypes.func.isRequired,
};

export default connect(null, { addToast })(Signup);
