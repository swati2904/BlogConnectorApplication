import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Form, Input, Button, Layout, Select } from "antd";
import { createProfile, getCurrentProfile } from "../../actions/profile";
import { Link, withRouter } from "react-router-dom";

import {
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

const EditProfile = ({
  profile: { profile, loading },
  createProfile,
  getCurrentProfile,
  history,
}) => {
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

  const { Option } = Select;

  const [wrapSocialInputs, toggleSocialInputs] = useState(false);

  useEffect(() => {
    getCurrentProfile();

    setFormInput({
      company: loading || !profile.company ? "" : profile.company,
      website: loading || !profile.website ? "" : profile.website,
      location: loading || !profile.location ? "" : profile.location,
      status: loading || !profile.status ? "" : profile.status,
      skills: loading || !profile.skills ? "" : profile.skills.join(","),
      githubusername:
        loading || !profile.githubusername ? "" : profile.githubusername,
      bio: loading || !profile.bio ? "" : profile.bio,
      twitter: loading || !profile.social ? "" : profile.social.twitter,
      facebook: loading || !profile.social ? "" : profile.social.facebook,
      linkedin: loading || !profile.social ? "" : profile.social.linkedin,
      youtube: loading || !profile.social ? "" : profile.social.youtube,
      instagram: loading || !profile.social ? "" : profile.social.instagram,
    });
  }, [loading, getCurrentProfile, profile]);

  const { Content } = Layout;

  const onFinish = (e) => {
    createProfile(formInput, history, true);
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
      <Layout className='site-layout'>
        <Content>
          <div className='site-layout-background container'>
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
                <Select
                  placeholder='Select a option and change input text above'
                  // value={formInput.status}
                  onChange={(value) => {
                    setFormInput({ status: value });
                  }}
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
              <Form.Item
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              >
                <Button
                  type='primary'
                  htmlType='submit'
                  className='shadow-lg rounded my-3 mx-3'
                  value='submit'
                >
                  Submit
                </Button>
                <Link className='btn btn-light my-1' to='/admin-profile'>
                  Go Back{" "}
                </Link>
              </Form.Item>
            </Form>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

EditProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { createProfile, getCurrentProfile })(
  withRouter(EditProfile)
);
