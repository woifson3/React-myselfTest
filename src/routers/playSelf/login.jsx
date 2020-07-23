// 登录的路由组件

import React, { Component } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import '../style/login.less';
import bg from './bg.png';


const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
   

    render() {
        return (
            <div className='login'>
                <header className='login-header'>
                    <img  src={bg} alt='' />
                    <h1>请登录！！</h1>
                </header>
                <section className='login-content'>
                    <h2>用户登录</h2>
                    <Form
                       {...tailLayout}
                        name="basic"
                        initialValues={{ remember: true }}
                      {...layout}
                    >
                        <Form.Item
                            label="Username"
                            name="username"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item  {...tailLayout}  name="remember" valuePropName="checked">
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        <Form.Item {...tailLayout} >
                            <Button type="primary" htmlType="submit">
                                Submit
                        </Button>
                        </Form.Item>
                    </Form>

                </section>
            </div>

        );
    }
}

export default Login;