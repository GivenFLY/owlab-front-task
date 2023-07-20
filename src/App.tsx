import Header from "./components/header/Header";
import React from "react";
import {Route, Routes} from "react-router-dom";
import {connect} from "react-redux";
import {RootState} from "./app/store";
import Main from "./features/main/Main";
import News from "./features/news/News";
import Login from "./features/login/Login";
import Profile from "./features/profile/Profile";


type AppProps = {
    isAuthenticated: boolean
}

const App: React.FC<AppProps> = ({isAuthenticated = false}: AppProps) => {
    return (
        <div className="app">
            <Header isAuthenticated={isAuthenticated}/>
            <Routes>
                <Route exact path="/" element={<Main/>}/>
                <Route path="/news" element={<News/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/profile" element={<Profile/>}/>
            </Routes>
        </div>
    )
};

const mapStateToProps = (state: RootState) => ({
    isAuthenticated: state.login.isAuthenticated
})

export default connect(mapStateToProps)(App);
