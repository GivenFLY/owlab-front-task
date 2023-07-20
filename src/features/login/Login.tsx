import styles from "./Login.module.scss";
import React, {useState} from "react";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {authorization, logout} from "./loginSlice";
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
    const dispatch = useAppDispatch();
    const isAuthenticated = useAppSelector(state => state.login.isAuthenticated);
    const navigate = useNavigate();

    const [credentials, setCredentials] = useState({
        username: '',
        password: '',
    });

    const [error, setError] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const result = await dispatch(authorization({
            login: credentials.username,
            password: credentials.password,
        }));

        if (authorization.fulfilled.match(result)) {
            if (result.payload) {
                setError('');
                navigate('/profile');
            } else {
                setError('Username or password is incorrect');
            }
        }
    };

    return (
        <div className="page login-page">
            <h1>Login page</h1>
            <form className={styles.form} onSubmit={handleSubmit}>
                {error && <p className={styles.error}>{error}</p>}
                <input type="text" name="username" placeholder="Username" onChange={handleChange}/>
                <input type="password" name="password" placeholder="Password" onChange={handleChange}/>
                <button type="submit">Login</button>
            </form>
        </div>
    )
};

export default Login;
