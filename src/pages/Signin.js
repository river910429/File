import React from 'react';
import {Menu, Form, Container, Message, Header} from 'semantic-ui-react';
import firebase from '../utils/firebase';
import {useNavigate} from 'react-router-dom';
import "firebase/compat/auth";

function Signin(){
    const navigate = useNavigate();
    const[activeItem,setActiveItem] = React.useState("signin"); 
    const[email,setEmail] = React.useState('');
    const[password,setPassword] = React.useState('');
    const[errorMessage, setErrorMessage] = React.useState("");
    const[isLoading, setIsLoading] = React.useState(false);
    
    function onSubmit(){
        setIsLoading(true);
        if(activeItem === 'register'){
            firebase
                .auth()
                .createUserWithEmailAndPassword(email,password)
                .then(() =>{
                    navigate('/');
                    setIsLoading(false);
                })
                .catch((error) => {
                    switch(error.code){
                        case 'auth/email-already-in-use':
                            setErrorMessage('信箱已存在');
                            break;
                        case 'auth/invalid-email':
                            setErrorMessage('信箱格式不正確');
                            break;
                        case 'auth/weak-password':
                            setErrorMessage('信箱強度不足');
                            break;
                        default:
                    }
                })
        }else if (activeItem === 'signin'){
            firebase
                .auth()
                .signInWithEmailAndPassword(email,password)
                .then(() =>{
                    navigate('/');
                    setIsLoading(false);
                })
                .catch((error) => {
                    switch(error.code){
                        case 'auth/invalid-email':
                            setErrorMessage('信箱格式不正確');
                            break;
                        case 'auth/user-not-found':
                            setErrorMessage('信箱不存在');
                            break;
                        case 'auth/wrong-password':
                            setErrorMessage('密碼錯誤');
                            break;
                        default:
                    }
                })
        }
    }

    return (
        <Container>
            <Header>歡迎來到分你所析，請登入以使用更多功能</Header>
            <Menu widths="2">
                <Menu.Item
                    active={activeItem === 'register'}
                    onClick={() => {
                        setErrorMessage('');
                        setActiveItem("register");
                    }}
                >
                    <p className='hand'>註冊</p>
                </Menu.Item>
                <Menu.Item
                    active={activeItem === 'signin'}
                    onClick={() => {
                        setErrorMessage('');
                        setActiveItem("signin");
                    }}
                >
                    <p className='hand'>登入</p>
                </Menu.Item>
            </Menu>
            <Form onSubmit={onSubmit}>
                <Form.Input
                    label= {<p className='hand'>信箱</p>}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='請輸入信箱'
                />
                <Form.Input
                    label={<p className='hand'>密碼</p>}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder='請輸入密碼'
                    type='password'
                />
                {errorMessage && <Message negative>{errorMessage}</Message>}
                <Form.Button loading={isLoading}>
                    {activeItem === 'register' && <p className='hand'>註冊</p>}
                    {activeItem === 'signin' && <p className='hand'>登入</p>}
                </Form.Button>
            </Form>
        </Container>
    );
}

export default Signin;