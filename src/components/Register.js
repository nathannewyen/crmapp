import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Form, Input } from 'antd';
import { registerUser } from '../hooks/userSlice';

const Register = () => {
    const dispatch = useDispatch();
    const { error, loading } = useSelector((state) => state.user);
    const [form] = Form.useForm();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (values) => {
        const { email, password } = values;
        dispatch(registerUser({ email, password }));
        form.resetFields();
    };

    return (
        <div className="register-container">
            <h1>Register</h1>
            <Form
                form={form}
                onFinish={handleSubmit}
                layout="vertical"
                initialValues={{ email, password }}
                size="large"
            >
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ required: true, message: 'Please input your email!' }]}
                >
                    <Input
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Item>
                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" loading={loading}>
                        Register
                    </Button>
                </Form.Item>
            </Form>
            {error && (
                <div style={{ color: 'red', marginTop: '10px' }}>
                    {error.message}
                </div>
            )}
        </div>
    );
};

export default Register;