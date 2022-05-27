import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Image, Form, Col, Input, Breadcrumb, Row } from "antd";
import React from "react";
import tiki from "./tiki.png";

const Login = () => {
  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <div className="from">
      <Form
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <div style={{ paddingTop: "50px" }} />
        <Image preview={false} width={150} height={150} src={tiki} />
        <div style={{ paddingTop: "30px" }} />
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
        <Form.Item>
          <a  href="/registration">Đăng ký!</a>
          <a style={{paddingLeft:"50px"}} className="login-form-forgot" href=""> Quên mật khẩu </a>
        </Form.Item>

          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
      </Form>
    </div>
  );
};

export default Login;
