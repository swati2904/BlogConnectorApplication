import React from "react";
import { Form, Input, Button } from "antd";
import { Link } from "react-router-dom";
import { LockOutlined, MailOutlined } from "@ant-design/icons";

const Login = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
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

  return (
    <>
      <div className=' container auth-page align-items-center '>
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
                rules={[
                  {
                    required: true,
                    message: "Please enter your email address!",
                  },
                ]}
              >
                <Input
                  prefix={
                    <MailOutlined className='site-form-item-icon text-secondary' />
                  }
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
                ]}
              >
                <Input.Password
                  prefix={
                    <LockOutlined className='site-form-item-icon text-secondary' />
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
                  htmlType='login'
                  className='shadow-lg   rounded '
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

export default Login;
