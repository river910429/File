import React from "react";
import {Container,Form, Header} from "semantic-ui-react";
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Analyze(){
    const navigate = useNavigate();
    const [key ,setKey] = React.useState('');
    const [webname ,setwebname] = React.useState('');

    const [startdate, setStartDate] = useState('');
    const dateInputRef1 = useRef(null);
    const handleChange1 = (e) => {
        setStartDate(e.target.value);
    }
    const [enddate, setEndDate] = useState('');
    const dateInputRef2 = useRef(null);
    const handleChange2 = (e) => {
        setEndDate(e.target.value);
    }
    //日期

    function onSubmit(){
        navigate('/analyzeResult');
    }
    function ReturnToBackend(){
        console.log(webname);
    }
    function mix(){
        onSubmit();
        ReturnToBackend();
    }
    return (
        <Container>
            <Header>分析</Header>
            <Form onSubmit={mix}>
                <Form.Dropdown 
                    width = {3}
                    placeholder="分析的網站"
                    options={[
                        {
                            text: 'ptt',
                            value: 'ptt',
                        },
                        {
                            text: 'dcard',
                            value: 'dcard',
                        },
                        {
                            text: '巴哈',
                            value: 'baha',
                        }
                    ]}
                    selection
                    value={webname}
                    onChange={(e, {value}) => setwebname(value)}
                />
                <Form.Input
                    width = {3} 
                    placeholder="關鍵字"
                    value={key}
                    onChange={(e) => setKey(e.target.value)}
                >
                </Form.Input>
                <Header>開始日期</Header>
                <input
                    type="date"
                    onChange={handleChange1}
                    ref={dateInputRef1}
                />
                <p>Selected Date: {startdate}</p>
                <Header>結束日期</Header>
                <input
                    type="date"
                    onChange={handleChange2}
                    ref={dateInputRef2}
                />
                <p>Selected Date: {enddate}</p>
                <Form.Button>開始分析</Form.Button>
            </Form>
        </Container>
    );
}

export default Analyze;