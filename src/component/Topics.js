import React from 'react';
import { List } from 'semantic-ui-react';
import { Link, useLocation } from 'react-router-dom';

{/*
function Topics(){
    const location = useLocation();
    const urlSearchParams = new URLSearchParams(location.search);
    const currentDetail = urlSearchParams.get("detail");
    const topic = [
        {'name' : <p className='han2'>歷史紀錄</p>},
        {'name' : <p className='han2'>訂單查詢</p>}
    ]; 
    return <List animated selection>
            {topic.map((topic) =>{
                return (
                 <List.Item 
                  key={topic.name} 
                  as={Link} 
                  to={`/?detail=${topic.name}`}
                  active={currentDetail === topic.name}
                >
                    {topic.name}
                </List.Item>
                );
            })}
           </List>;
}
*/}
function Topics(){
    const location = useLocation();
    const menuItem = [
        {
            name:<p className='han2'>歷史紀錄</p>,
            path:'/history'
        },
        {
            name:<p className='han2'>訂單查詢</p>,
            path:'/search'
        }
    ];
    return(
        <List animated selection>
            {menuItem.map((menuItem) => {
                return(
                    <List.Item as={Link} to={menuItem.path} key={menuItem.name} >
                        {menuItem.name}
                    </List.Item>
                )
            })}
        </List>
    )
}
export default Topics;