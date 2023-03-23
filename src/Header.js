import { Menu } from "semantic-ui-react";
import { Link } from 'react-router-dom';
import React from 'react';

import './App.css';

import firebase from './utils/firebase';

function Header(){
    const [user, setUser] = React.useState(null);
    React.useEffect(() =>{
        firebase.auth().onAuthStateChanged((currentUser) =>{
            setUser(currentUser);
        });
    },[]);
    return <Menu style={{
        backgroundColor: "#F7F1E5"
      }}>
        <Menu.Item as={Link} to="/" >
            <p className="topic">分你所析</p>
        </Menu.Item>
        <Menu.Menu position='right'>
            {user ? (
            <>
                <Menu.Item Link to href="https://9maple.org/video/37494-1-236.html">
                <p className="topic">聯絡我們</p>
                </Menu.Item>
                <Menu.Item as={Link} to="/analyze">
                <p className="topic">產品分析</p>
                </Menu.Item>
                <Menu.Item as={Link} to="/my/*">
                <p className="topic">會員</p>
                </Menu.Item>
                <Menu.Item onClick={() => firebase.auth().signOut()}>
                <p className="topic">登出</p>
                </Menu.Item>
            </>
            ) : (
                <Menu.Item as={Link} to="/signin">
                <p className="topic">註冊/登入</p>
                </Menu.Item>
            )}
        </Menu.Menu>
    </Menu>
}

export default Header