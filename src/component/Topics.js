import React from 'react';
import { List } from 'semantic-ui-react';
import { Link, useLocation } from 'react-router-dom';


function Topics(){
    const location = useLocation();
    const urlSearchParams = new URLSearchParams(location.search);
    const currentDetail = urlSearchParams.get("detail");
    const topic = [
        {'name' : '歷史紀錄'},
        {'name' : '訂單查詢'}
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

export default Topics;