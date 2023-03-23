import React, { useEffect, useState } from 'react'
import { useNavigate, createSearchParams } from 'react-router-dom'
import { Container, Form} from 'semantic-ui-react';
import Introduce from './Introduce';

function KeySearch() {
  const [loading, setLoading] = React.useState(false);
    useEffect(() =>{
        setLoading(true);
        setTimeout(() =>{
            setLoading(false);
        },1000);
    },[]);
  const [key ,setKey] = React.useState('');
  const navigate = useNavigate();
  
  const SendToPage = (id) => {
    navigate({
        pathname:'/analyzeResult',
        search:createSearchParams({
            id:key
        }).toString()
    });
};

  function onSubmit(){
    SendToPage();
  }
  return (
    <Container>
      <Form onSubmit={onSubmit}>
        <p className='han'>請輸入關鍵字</p>
        <p className='han2'>兩個以上關鍵字請用空白鍵隔開</p>
          <Form.Input
            width={18}
            placeholder="關鍵字"
            value={key}
            onChange={(e) => setKey(e.target.value)}
          >
          </Form.Input>
          <Form.Button><p className='han2'>GOGO</p></Form.Button>
      </Form>
      <Introduce />
    </Container>
  )
}

export default KeySearch;