import React from 'react';
import { List } from 'semantic-ui-react';
import { Link, useLocation } from 'react-router-dom';


function MyMenu(){
    const location = useLocation();
    const menuItem = [
        {
            name:<p className='han2'>歷史分析</p>,
            path:'/my/history'
        },
        {
            name:<p className='han2'>會員資料</p>,
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