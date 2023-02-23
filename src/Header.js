import { Menu,Search } from "semantic-ui-react";
import { Link } from 'react-router-dom';
import React from 'react';

import firebase from './utils/firebase';

function Header(){
    const [user, setUser] = React.useState(null);
    React.useEffect(() =>{
        firebase.auth().onAuthStateChanged((currentUser) =>{
            setUser(currentUser);
        });
    },[]);
    return <Menu color={"green"}>
        <Menu.Item as={Link} to="/" >
            分你所析
        </Menu.Item>
        <Menu.Item  color="green"/>
        <Menu.Item >
            <Search />
        </Menu.Item>
        <Menu.Menu position='right'>
            {user ? (
            <>
                <Menu.Item Link to href="https://9maple.org/video/37494-1-236.html">
                聯絡我們
                </Menu.Item>
                <Menu.Item as={Link} to="/analyze">
                產品分析
                </Menu.Item>
                <Menu.Item as={Link} to="/my">
                會員
                </Menu.Item>
                <Menu.Item onClick={() => firebase.auth().signOut()}>
                登出
                </Menu.Item>
            </>
            ) : (
                <Menu.Item as={Link} to="/signin">
                註冊/登入
                </Menu.Item>
            )}
        </Menu.Menu>
    </Menu>
}

export default Header