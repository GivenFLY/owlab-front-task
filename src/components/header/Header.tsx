import React from "react";
import {Link} from "react-router-dom";
import styles from './Header.module.scss';

type HeaderProps = {
    isAuthenticated: boolean;
}

const Header: React.FC<HeaderProps> = ({isAuthenticated}: HeaderProps) => {
    return (
        <header className={styles.header}>
            <nav>
                <div>
                    <Link className={styles.link} to="/">Main</Link>
                    <Link className={styles.link} to="/news">News</Link>
                </div>
                {isAuthenticated ?
                    <Link className={styles.link} to="/profile">Profile</Link> :
                    <Link className={styles.link} to="/login">Login</Link>
                }
            </nav>
        </header>
    )
};

export default Header;
