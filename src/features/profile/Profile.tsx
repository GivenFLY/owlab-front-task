import styles from "./Profile.module.scss";
import React, {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import { useNavigate } from 'react-router-dom';
import {logout} from "../login/loginSlice";

const Profile: React.FC = () => {
    const dispatch = useAppDispatch();
    const isAuthenticated = useAppSelector(state => state.login.isAuthenticated);
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/login');
        }
    }, [isAuthenticated, navigate]);

    const handleLogout = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        await dispatch(logout());
        navigate('/login');
    }

    return (
        <div className={`page ${styles.profile}`}>
            <h1>Profile page</h1>
            <p>Woah, you are in, I think password isn't too hard)</p>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}



export default Profile;
