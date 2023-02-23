import { BrowserRouter,Routes,Route } from 'react-router-dom';

import Header from './Header';
import Signin from './pages/Signin';
import Posts from './pages/Posts';
import Analyze from './pages/Analyze';
import Member from './pages/Member';
import AnalyzeResult from './pages/AnalyzeResult';
import Handsome from './pages/Handsome';
import PostNavigate from './pages/PostNavigate';

function App(){
    return(
    <BrowserRouter>
        <Header />
        <Routes>
            <Route 
                path='/' 
                element={<Posts/>}
            >
            </Route>
            <Route path='/signin' element={<Signin />}></Route>

            <Route 
                path='/analyze'
                element={<Analyze />}
            >
            </Route>
            <Route 
                path='/my'
                element={<Member />}
            >
            </Route>
            <Route 
                path='/analyzeResult'
                element={<AnalyzeResult />}
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