import { LockOutlined, UserOutlined } from "@ant-design/icons";
import {
  Breadcrumb,
  Button,
  Col,
  Form,
  Image,
  Input,
  Row,
  Option,
  Select,
  Cascader,
  InputNumber,
  AutoComplete,
  Checkbox,
} from "antd";
import React, { useState } from "react";
const residences = [
  {
    value: "zhejiang",
    label: "Zhejiang",
    children: [
      {
        value: "hangzhou",
        label: "Hangzhou",
        children: [
          {
            value: "xihu",
            label: "West Lake",
          },
        ],
      },
    ],
  },
  {
    value: "jiangsu",
    label: "Jiangsu",
    children: [
      {
        value: "nanjing",
        label: "Nanjing",
        children: [
          {
            value: "zhonghuamen",
            label: "Zhong Hua Men",
          },
        ],
      },
    ],
  },
];
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};
const Registration = () => {
  const { Option } = Select;
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log(values);
  };


  return (
    <div className="from">
      <Form
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={onFinish}
        scrollToFirstError
      >
        <Breadcrumb>
            <Breadcrumb.Item><strong>Điện thoại</strong></Breadcrumb.Item>
          </Breadcrumb>
        <Row gutter={24}>
          <Col xxl={{ span: 24 }} xl={{ span: 24 }} lg={{ span: 24 }}>
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your Phone!",
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Vui lòng nhập số điện thoại"
              />
            </Form.Item>
          </Col>
        </Row>
        <Breadcrumb>
            <Breadcrumb.Item><strong>Mật khẩu</strong></Breadcrumb.Item>
          </Breadcrumb>
        <Row gutter={24}>
          <Col xxl={{ span: 24 }} xl={{ span: 24 }} lg={{ span: 24 }}>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your Password!",
                },
              ]}
            >
               <Input.Password
                        prefix={
                            <LockOutlined className="site-form-item-icon"/>
                        }
                        type="password"
                        placeholder="Password"
                    />
            </Form.Item>
          </Col>
        </Row>

        <Breadcrumb>
            <Breadcrumb.Item><strong>Xác nhận mật khẩu</strong></Breadcrumb.Item>
          </Breadcrumb>
        <Row gutter={24}>
          <Col xxl={{ span: 24 }} xl={{ span: 24 }} lg={{ span: 24 }}>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your Password!",
                },
              ]}
            >
               <Input.Password
                        prefix={
                            <LockOutlined className="site-form-item-icon"/>
                        }
                        type="password"
                        placeholder="Password"
                    />
            </Form.Item>
          </Col>
        </Row>
        <Breadcrumb>
            <Breadcrumb.Item><strong>Mật khẩu tiền vốn</strong></Breadcrumb.Item>
          </Breadcrumb>
        <Row gutter={24}>
          <Col xxl={{ span: 24 }} xl={{ span: 24 }} lg={{ span: 24 }}>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your Password!",
                },
              ]}
            >
               <Input.Password
                        prefix={
                            <LockOutlined className="site-form-item-icon"/>
                        }
                        type="password"
                        placeholder="Password"
                    />
            </Form.Item>
          </Col>
        </Row>

        <Breadcrumb>
            <Breadcrumb.Item><strong>Mã mời</strong></Breadcrumb.Item>
          </Breadcrumb>
        <Row gutter={24}>
          <Col xxl={{ span: 24 }} xl={{ span: 24 }} lg={{ span: 24 }}>
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your Phone!",
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Vui lòng nhập mã mời"
              />
            </Form.Item>
          </Col>
        </Row>
       
        <Form.Item
          label="Captcha"
        >
          <Row gutter={8}>
            <Col span={12}>
              <Form.Item
                name="captcha"
                noStyle
                rules={[
                  {
                    required: true,
                    message: "Please input the captcha you got!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Button>Get captcha</Button>
            </Col>
          </Row>
        </Form.Item>
       
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Registration;
