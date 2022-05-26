import { UserOutlined } from "@ant-design/icons";
import { Button, Form, Image, Input, Layout } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import tiki from "./tiki.png";
const { Header, Content, Footer, Sider } = Layout;

const Login = () => {
  const onFinish = (values) => {
    console.log(values);
  };

  const layout = {
    labelCol: {
      span: 8,
      justifyContent: "center",
    },
    wrapperCol: {
      span: 8,
      justifyContent: "center",
    },
  };

  return (
    <Form {...layout} name="nest-messages" onFinish={onFinish}>
      <Image preview={false} width={150} height={150} src={tiki} />
      <Form.Item name="phone" label="Số điện thoại">
        <Input
          size="large"
          placeholder="large size"
          prefix={<UserOutlined />}
        />
      </Form.Item>
      <Form.Item name="passworld" label="Mật khẩu">
        <Input placeholder="Nhập passworld" type={"password"} />
      </Form.Item>
      <Link to={"/dashboard"}>
        <Button type="primary" htmlType="submit">
          Đăng nhập
        </Button>
      </Link>
      <div style={{ paddingTop: "50px" }} />
      <Link to={"/"}>
        <Button type="link">Đăng ký tài khoản mới ?</Button>
      </Link>
    </Form>
  );
};

export default Login;
