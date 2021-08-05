import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Layout, Menu } from "antd";
import { Form, Input, Button } from "antd";
import { createProfile } from "../../actions/profile";
import { Link, withRouter } from "react-router-dom";

import {
  UserOutlined,
  LaptopOutlined,
  BookOutlined,
  ShoppingFilled,
  WeiboCircleFilled,
  BankFilled,
  EditFilled,
  GithubFilled,
  HighlightFilled,
  TwitterSquareFilled,
  FacebookFilled,
  LinkedinFilled,
  YoutubeFilled,
  InstagramFilled,
  BookFilled,
} from "@ant-design/icons";

const CreateProfile = ({ createProfile, history }) => {
  const [formInput, setFormInput] = useState({
    company: "",
    website: "",
    location: "",
    status: "",
    skills: "",
    githubusername: "",
    bio: "",
    twitter: "",
    facebook: "",
    linkedin: "",
    youtube: "",
    instagram: "",
  });
  const [wrapSocialInputs, toggleSocialInputs] = useState(false);

  const { Content, Sider } = Layout;

  // const {
  //   company,
  //   website,
  //   location,
  //   status,
  //   skills,
  //   githubusername,
  //   bio,
  //   twitter,
  //   facebook,
  //   linkedin,
  //   youtube,
  //   instagram,
  // } = formInput;

  const onFinish = (e) => {
    createProfile(formInput, history);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const layout = {
    labelCol: {
      span: 4,
    },
    wrapperCol: {
      span: 12,
    },
  };

  const onInputChange = (key, value) => {
    setFormInput({ ...formInput, [key]: value });
  };

  return (
    <Layout>
      <Sider
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
        }}
      >
        <div className='logo' />

        <Menu theme='dark' mode='inline' defaultSelectedKeys={["4"]}>
          <div className=' rounded'>hj2bdjb </div>
          <Menu.Item key='1' icon={<UserOutlined />}>
            User Profile
          </Menu.Item>
          <Menu.Item key='2' icon={<BookOutlined />}>
            Add Education
          </Menu.Item>
          <Menu.Item key='3' icon={<LaptopOutlined />}>
            Add Experience
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className='site-layout' style={{ marginLeft: 200 }}>
        <Content>
          <div
            className='site-layout-background container'
            // style={{ padding: 24, textAlign: "center" }}
          >
            <h3 className='fw-bolder text-black fs-2'> ADMIN PROFILE</h3>
            <small className=' fs-6 text-secondary'>Tech Infomation</small>{" "}
            <hr></hr>
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
                label={
                  <span>
                    <ShoppingFilled className='site-form-item-icon text-secondary fs-4 mx-2' />
                    Company
                  </span>
                }
                name='company'
              >
                <Input
                  value={formInput.company}
                  onChange={(e) => onInputChange("company", e.target.value)}
                />
              </Form.Item>
              <Form.Item
                label={
                  <span>
                    <WeiboCircleFilled className='site-form-item-icon text-secondary fs-4 mx-2' />
                    website
                  </span>
                }
                name='website'
              >
                <Input
                  value={formInput.website}
                  onChange={(e) => onInputChange("website", e.target.value)}
                />
              </Form.Item>
              <Form.Item
                label={
                  <span>
                    <BankFilled className='site-form-item-icon text-secondary fs-4 mx-2' />
                    Location
                  </span>
                }
                name='location'
              >
                <Input
                  value={formInput.location}
                  onChange={(e) => onInputChange("location", e.target.value)}
                />
              </Form.Item>
              <Form.Item
                label={
                  <span>
                    <EditFilled className='site-form-item-icon text-secondary fs-4 mx-2' />
                    Skills
                  </span>
                }
                name='skills'
                // rules={[
                //   {
                //     required: true,
                //     message: "This field is important",
                //   },
                // ]}
              >
                <Input
                  value={formInput.skills}
                  onChange={(e) => onInputChange("skills", e.target.value)}
                />
              </Form.Item>
              <Form.Item
                label={
                  <span>
                    <HighlightFilled className='site-form-item-icon text-secondary fs-4 mx-2' />
                    Add Bio
                  </span>
                }
                name='bio'
              >
                <Input
                  value={formInput.bio}
                  onChange={(e) => onInputChange("bio", e.target.value)}
                />
              </Form.Item>
              <Form.Item
                label={
                  <span>
                    <GithubFilled className='site-form-item-icon text-secondary fs-4 mx-2' />
                    Github Username
                  </span>
                }
                name='githubusername'
              >
                <Input
                  value={formInput.githubusername}
                  onChange={(e) =>
                    onInputChange("githubusername", e.target.value)
                  }
                />
              </Form.Item>
              <Form.Item
                label={
                  <span>
                    <BookFilled className='site-form-item-icon text-secondary fs-4 mx-2' />
                    Select Profession
                  </span>
                }
                rules={[
                  {
                    required: true,
                    message: "This field is important",
                  },
                ]}
              >
                <select
                  name='status'
                  className='select-option'
                  value={formInput.status}
                  onChange={(e) => onInputChange("status", e.target.value)}
                >
                  <option value='Developer'>Developer</option>
                  <option value='Junior Developer'>Junior Developer</option>
                  <option value='Senior Developer'>Senior Developer</option>
                  <option value='Manager'>Manager</option>
                  <option value='Student or Learning'>
                    Student or Learning
                  </option>
                  <option value='Instructor'>Instructor or Teacher</option>
                  <option value='Intern'>Intern</option>
                  <option value='Other'>Other</option>
                </select>
              </Form.Item>
              {/* <Form.Item
                label={
                  <span>
                    <BookFilled className='site-form-item-icon text-secondary fs-4 mx-2' />
                    Select Profession
                  </span>
                }
                rules={[
                  {
                    required: true,
                    message: "This field is important",
                  },
                ]}
              >
                <Select
                  placeholder='Select a option and change input text above'
                  value={formInput.status}
                  onChange={(e) => onInputChange("status", e.target.value)}
                  name='status'
                >
                  
                  <Option value='Developer'>Developer</Option>
                  <Option value='Junior Developer'>Junior Developer</Option>
                  <Option value='Senior Developer'>Senior Developer</Option>
                  <Option value='Manager'>Manager</Option>
                  <Option value='Student or Learning'>
                    Student or Learning
                  </Option>
                  <Option value='Instructor'>Instructor or Teacher</Option>
                  <Option value='Intern'>Intern</Option>
                  <Option value='Other'>Other</Option>
                </Select>
              </Form.Item> */}
              <small className=' fs-6 text-secondary'>Social Network</small>{" "}
              <hr></hr>
              <div>
                <Button
                  type='default'
                  htmlType='submit'
                  className='shadow-lg rounded my-3'
                  value='submit'
                  onClick={() => toggleSocialInputs(!wrapSocialInputs)}
                >
                  Add Social Network
                </Button>
                <span className='mx-2 text-secondary'> *Optional</span>
              </div>
              {wrapSocialInputs && (
                <>
                  {" "}
                  <Form.Item
                    label={
                      <span>
                        <TwitterSquareFilled className='site-form-item-icon text-secondary fs-4 mx-2' />
                        Twitter
                      </span>
                    }
                    name='twitter'
                  >
                    <Input
                      value={formInput.twitter}
                      onChange={(e) => onInputChange("twitter", e.target.value)}
                    />
                  </Form.Item>
                  <Form.Item
                    label={
                      <span>
                        <LinkedinFilled className='site-form-item-icon text-secondary fs-4 mx-2' />
                        Linkedin
                      </span>
                    }
                    name='linkedin'
                  >
                    <Input
                      value={formInput.linkedin}
                      onChange={(e) =>
                        onInputChange("linkedin", e.target.value)
                      }
                    />
                  </Form.Item>
                  <Form.Item
                    label={
                      <span>
                        <YoutubeFilled className='site-form-item-icon text-secondary fs-4 mx-2' />
                        Youtube
                      </span>
                    }
                    name='youtube'
                  >
                    <Input
                      value={formInput.youtube}
                      onChange={(e) => onInputChange("youtube", e.target.value)}
                    />
                  </Form.Item>
                  <Form.Item
                    label={
                      <span>
                        <FacebookFilled className='site-form-item-icon text-secondary fs-4 mx-2' />
                        Facebook
                      </span>
                    }
                    name='facebook'
                  >
                    <Input
                      value={formInput.facebook}
                      onChange={(e) =>
                        onInputChange("facebook", e.target.value)
                      }
                    />
                  </Form.Item>
                  <Form.Item
                    label={
                      <span>
                        <InstagramFilled className='site-form-item-icon text-secondary fs-4 mx-2' />
                        Instagram
                      </span>
                    }
                    name='instagram'
                  >
                    <Input
                      value={formInput.instagram}
                      onChange={(e) =>
                        onInputChange("instagram", e.target.value)
                      }
                    />
                  </Form.Item>
                </>
              )}
              {/* <Form.Item
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              >
                
              </Form.Item> */}
              <Button
                type='primary'
                htmlType='submit'
                className='shadow-lg rounded my-1'
                value='Submit'
              >
                Submit
              </Button>
              <Link className='btn btn-light my-1' to='/admin-profile'>
                Go Back{" "}
              </Link>
            </Form>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

CreateProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
};

// const mapStateToProps = state => ({

// })

export default connect(null, { createProfile })(withRouter(CreateProfile));
