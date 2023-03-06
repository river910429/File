import React, { useEffect, useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { Grid , Container, Form} from 'semantic-ui-react';

import Introduce from './Introduce';

function KeySearch() {
  const [key ,setKey] = React.useState('');
  const navigate = useNavigate();

  function sendToPage(){
    navigate('/analyzeResult');
  }

  function onSubmit(){
    console.log(key);
    keySend = key;
    sendToPage();
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