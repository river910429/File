import { Grid ,Item ,Container } from 'semantic-ui-react';
import { BrowserRouter,Routes,Route, Navigate ,Link } from 'react-router-dom';
import MyMenu from "../component/MyMenu";

function Member(){
    return (
        <Container>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={3}>
                        <MyMenu />
                    </Grid.Column>
                    <Grid.Column width={10}>
                    {/*
                    
                    <BrowserRouter>
                        <Routes>
                            <Route 
                                path='/my/history'
                                element={"歷史分析"}
                            ></Route>
                            <Route 
                                path='/my/settings'
                                element={"會員設定"}
                            ></Route>
                        </Routes>
                    </BrowserRouter>
                    */}
                    </Grid.Column>
                    <Grid.Column width={3}></Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    );
}

export default Member;