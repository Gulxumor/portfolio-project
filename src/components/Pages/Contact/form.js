import { Button, Input } from "antd";
// import { FaHandHolding, FaUser } from "react-icons/fa";
import "./contact.css";
const Form = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      {/* <form className="form" onsubmit="return false" autocomplete="off">
        <div className="form-inner">
          <h2>User Login</h2>
          <div className="input-wrapper">
            <label for="login-username">Username</label>
            <div className="input-group">
              <span className="icons">
                <FaUser />
              </span>
              <input id="login-username" type="text" data-lpignore="true" />
            </div>
          </div>
          <div className="input-wrapper">
            <label for="login-password">Password</label>
            <div className="input-group">
              <span className="icons">
                <FaHandHolding />
              </span>
              <input id="login-password" type="password" data-lpignore="true" />
            </div>
          </div>
          <div className="btn-group">
            <button className="btn btn--primary">Sign in</button>
            <a className="btn--text" href="#0">
              Forgot password?
            </a>
          </div>
        </div>
      </form> */}

      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        ></Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Form;
