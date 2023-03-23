import { Routes,Route} from 'react-router-dom';
import { Grid ,Container } from 'semantic-ui-react';
import Topics from '../component/Topics';
import { useLocation } from 'react-router-dom';
import Record from "./Record";
import KeySearch from './KeySearch';
import '../App.css';
import AnalyzeResult from './AnalyzeResult';
import Handsome from './Handsome';

function Posts(){
    return (
        <Container>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={3}>
                        <Topics/>
                    </Grid.Column>
                    <Grid.Column width={10}>
                        <Routes>
                            <Route path="*" element={<KeySearch />} exact/>
                            <Route path="/analyzeResult" element={<AnalyzeResult />} exact/>
                            <Route path="/history" element={<p className='han'>記記錄錄</p>} exact/>
                            <Route path="/search" element={<Handsome />} exact/>
                        </Routes>
                    </Grid.Column>
                    <Grid.Column width={3}></Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    );
}
{/* 
function Posts(){
    {/* 
    const location = useLocation();
    const urlSearchParams = new URLSearchParams(location.search);
    const currentDetail = urlSearchParams.get("detail");
    if(currentDetail){
        if(currentDetail === "歷史紀錄") return(
            <Container>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <Topics/>
                        </Grid.Column>
                        <Grid.Column width={10}>
                            <Record />
                        </Grid.Column>
                        <Grid.Column width={3}></Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        );
        else return(
            <Container>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <Topics/>
                        </Grid.Column>
                        <Grid.Column width={10}>
                            可能刪掉
                        </Grid.Column>
                        <Grid.Column width={3}></Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        );
    }
    else
        return (
            <Container>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <Topics/>
                        </Grid.Column>
                        <Grid.Column width={10}>
                            <Routes>
                                <Route path="*" element={<KeySearch />} exact/>
                                <Route path="/analyzeResult" element={<AnalyzeResult />} exact/>
                                <Route path="/handsome" element={<Handsome />} exact/>
                            </Routes>
                        </Grid.Column>
                        <Grid.Column width={3}></Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
    );
}
*/}

export default Posts;