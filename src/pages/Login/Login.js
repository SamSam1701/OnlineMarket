import styles from './Login.module.scss';
import { Button, Checkbox, Form, Input } from "antd";

function Login() {

    const onFinish = (values) => {
        console.log('Success:', values);
      };
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };

    return (
        
        <div className={styles.login}>
                   <h1>LOGIN FORM</h1>
            <div className={styles.loginForm}>
     
            <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
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
            message: 'Please input your username!',
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
            message: 'Please input your password!',
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
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button style={{marginRight:'10px'}} type="primary" htmlType="submit">
          ĐĂNG NHẬP
        </Button>

        <Button type="primary" htmlType="submit">
          QUÊN MẬT KHẨU
        </Button>
      </Form.Item>
    </Form>
    </div>
    </div>
  );
}

export default Login;