import { Button } from 'antd';

const Home = (props) => {
    return (
        <div>
            <h1>Welcome to the app!</h1>
            <Button type="primary" htmlType="submit" onClick={() => props.navigate('/register')}>Register</Button>
            <Button type="primary" htmlType="submit" onClick={() => props.navigate('/login')}>Login</Button>
            <Button type="primary" htmlType="submit" onClick={() => props.navigate('/leads')}>Leads Page</Button>
        </div>
    )
}

export default Home