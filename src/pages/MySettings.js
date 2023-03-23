import { Header, Button, Segment, Modal, Input } from "semantic-ui-react";
import React from 'react';

import firebase from "../utils/firebase";


function MyName({user}){
    const [displayName, setDisplayName] = React.useState('');
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false);

    function onSubmit(){
        setIsLoading(true);
        user
            .updateProfile({
                displayName,
        })
        .then(()=> {
            setIsLoading(false);
            setDisplayName('');
            setIsModalOpen(false);
        });
    }

    return(
        <>
            <Header size="small">
                <b className='han2'>會員名稱</b>
                <Button floated="right" onClick={setIsModalOpen}><b className='han2'>修改</b></Button>
            </Header>
            <Segment vertical><b className='han2'>{user.displayName}</b></Segment>
            <Modal open={isModalOpen} size='mini'>
                <Modal.Header><b className='hand'>修改會員名稱</b></Modal.Header>
                <Modal.Content>
                    <Input
                        placeholder="輸入新的會員名稱"
                        value={displayName}
                        onChange={e => setDisplayName(e.target.value)}
                        fluid
                    />
                </Modal.Content>
                <Modal.Actions>
                        <Button onClick={() => setIsModalOpen(false)}><b className='han2'>取消</b></Button>
                        <Button onClick={onSubmit} loading={isLoading}><b className='han2'>修改</b></Button>
                </Modal.Actions>
            </Modal>
        </>
    );
}

function MyPassword({user}){
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const [oldPassword, setOldPassword] = React.useState('');
    const [newPassword, setNewPassword] = React.useState('');
    const [isLoading, setIsLoading] = React.useState(false);

    function onSubmit(){
        setIsLoading(true);
        const credential = firebase.auth.EmailAuthProvider.credential(
            user.email,
            oldPassword
        );
        user.reauthenticateWithCredential(credential).then(() => {
            user.updatePassword(newPassword).then(() => {
                setIsModalOpen(false);
                setOldPassword('');
                setNewPassword('');
                setIsLoading(false);
            });
        });
    }
    return(
        <>
            <Header size="small">
                <b className='han2'>會員密碼</b>
                <Button floated="right" onClick={() =>setIsModalOpen(true)}><b className='han2'>修改</b></Button>
            </Header>
            <Segment vertical>*******</Segment>
            <Modal open={isModalOpen}>
                <Modal.Header><b className='han2'>修改會員密碼</b></Modal.Header>
                <Modal.Content>
                    <Header size="small"><b className='han2'>目前密碼</b></Header>
                    <Modal.Content>
                    <Input
                        placeholder="輸入舊密碼"
                        value={oldPassword}
                        onChange={e => setOldPassword(e.target.value)}
                        fluid
                    />
                    </Modal.Content>
                    <Header size="small"><b className='han2'>目前密碼</b></Header>
                    <Modal.Content>
                    <Input
                        placeholder="輸入新密碼"
                        value={newPassword}
                        onChange={e => setNewPassword(e.target.value)}
                        fluid
                    />
                    </Modal.Content>
                </Modal.Content>
                <Modal.Actions>
                    
                    <Button onClick={() => setIsModalOpen(false)}><b className='han2'>取消</b></Button>
                    <Button onClick={onSubmit} loading={isLoading} ><b className='han2'>修改</b></Button>
                </Modal.Actions>
            </Modal>
        </>
    );
}

function MySettings(){
    const [user, setUser] = React.useState({});
    React.useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            setUser(user);
        })
    },[]);
    return (
        <>
            <Header><b className='hand'>會員資料</b></Header>
            <MyName user={user} />
            <MyPassword user={user}/>
            
        </>
    );
}

export default MySettings;