import { BrowserRouter,Routes,Route, redirect , useNavigate, Navigate} from 'react-router-dom';
import React from 'react';

import firebase from './utils/firebase';

import Member from './pages/Member';
import Header from './Header';
import Signin from './pages/Signin';
import Posts from './pages/Posts';
import Analyze from './pages/Analyze';
import Handsome from './pages/Handsome';


function App(){
    const [user, setUser] = React.useState(null);
    React.useEffect(() => {
        firebase.auth().onAuthStateChanged((currentUser) => {
            setUser(currentUser);
        })
    },[])
    return(
    <BrowserRouter>
        <Header />
        <Routes>
            <Route 
                path='/*'
                element={user ? <Posts/>
                :<Navigate to="/signin" />}
            >
            </Route>
            <Route 
                path='/signin'
                element={user ? <Navigate to="/*"/>
                : <Signin />}
            >
            </Route>

            <Route 
                path='/analyze'
                element={user ? <Analyze /> 
                :<Navigate to="/signin"/> }
            >
            </Route>

            <Route 
                path='/my/*'
                element={user ?<Member /> 
                : <Navigate to="/signin"/>}
            >
            </Route>
            <Route 
                path='/handsome'
                element={<Handsome />}
            >
            </Route>
        </Routes>
    </BrowserRouter> 
    );
}

export default App