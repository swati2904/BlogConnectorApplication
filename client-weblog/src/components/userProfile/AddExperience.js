import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { Form, Input, Button, Layout, DatePicker, Divider } from "antd";
import { addExperience } from "../../actions/profile";
import {
  ShoppingFilled,
  BankFilled,
  CalendarFilled,
  IdcardFilled,
  CopyFilled,
  CheckSquareFilled,
} from "@ant-design/icons";

const AddExperience = ({ addExperience, history }) => {
  const [formInput, setFormInput] = useState({
    company: "",
    title: "",
    location: "",
    from: "",
    to: "",
    current: false,
    description: "",
  });
  const [toDateDisabled, toggleDisable] = useState(false);
  const { Content } = Layout;
  const { TextArea } = Input;
  const { current } = formInput;
  const onFinish = (e) => {
    addExperience(formInput, history);
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
            <h3 className='fw-bolder text-black fs-2'>
              {" "}
              EXPERIENCE INFORMATION
            </h3>
            <small className='text-secondary'>
              {" "}
              Add your position and responsiblities
            </small>
            <Divider />
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
                    <IdcardFilled className='site-form-item-icon text-secondary fs-4 mx-2' />
                    Job Title
                  </span>
                }
                name='title'
              >
                <Input
                  value={formInput.title}
                  onChange={(e) => onInputChange("title", e.target.value)}
                />
              </Form.Item>
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
                    <CalendarFilled className='site-form-item-icon text-secondary fs-4 mx-2' />
                    From Date
                  </span>
                }
                name='from'
              >
                <DatePicker
                  value={formInput.from}
                  onChange={(date, dateString) =>
                    onInputChange("from", dateString)
                  }
                />
              </Form.Item>
              <Form.Item
                label={
                  <span>
                    <CheckSquareFilled className='site-form-item-icon text-secondary fs-4 mx-2' />
                    Current Job
                  </span>
                }
              >
                <input
                  type='checkbox'
                  name='current'
                  checked={formInput.current}
                  value={formInput.current}
                  onChange={(e) => {
                    setFormInput({ ...formInput, current: !current });
                    toggleDisable(!toDateDisabled);
                  }}
                />
              </Form.Item>

              <Form.Item
                label={
                  <span>
                    <CalendarFilled className='site-form-item-icon text-secondary fs-4 mx-2' />
                    To Date
                  </span>
                }
                name='to'
              >
                <DatePicker
                  value={formInput.to}
                  onChange={(date, dateString) =>
                    onInputChange("to", dateString)
                  }
                  disabled={toDateDisabled ? "disabled" : ""}
                />
              </Form.Item>
              <Form.Item
                label={
                  <span>
                    <CopyFilled className='site-form-item-icon text-secondary fs-4 mx-2' />
                    Description
                  </span>
                }
                name='description'
              >
                <TextArea
                  rows={4}
                  value={formInput.description}
                  onChange={(e) => onInputChange("description", e.target.value)}
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

AddExperience.propTypes = {
  addExperience: PropTypes.func.isRequired,
};

export default connect(null, { addExperience })(withRouter(AddExperience));
