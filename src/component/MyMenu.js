import React from 'react';
import { List } from 'semantic-ui-react';
import { Link ,useLocation } from 'react-router-dom';


function MyMenu(){
    const location = useLocation();
    const menuItem = [
        {
            name:'歷史分析',
            path:'/my/history'
        },
        {
            name:'會員資料',
            path:'/my/settings'
        }
    ];
    return(
        <List animated selection>
            {menuItem.map((menuItem) => {
                return(
                    <List.Item as={Link} to={menuItem.path} key={menuItem.name} active={menuItem.name === location.pathname}>
                        {menuItem.name}
                    </List.Item>
                )
            })}
        </List>
    )
}
export default MyMenu;