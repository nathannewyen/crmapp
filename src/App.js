import {useSelector} from 'react-redux';
import {Routes, Route, useNavigate} from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home'
import LeadsPage from "./components/LeadsPage";

function App() {
    const navigate = useNavigate()
    const user = useSelector((state) => state.user.user);

    return (
        <Routes>
            {!user && (
                <>
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/leads" element={<LeadsPage />} />
                </>
            )}
            <Route path="/" element={<Home navigate={navigate} user={user} />} />
        </Routes>
    );
}

export default App;
