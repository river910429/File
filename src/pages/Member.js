import { Grid ,Item ,Container } from 'semantic-ui-react';
import { Routes,Route} from 'react-router-dom';
import MyMenu from "../component/MyMenu";
import MySettings from './MySettings';

function Member(){
    return (
        <Container>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={3}>
                        <MyMenu />
                    </Grid.Column>
                    <Grid.Column width={10}>
                        <Routes>
                            <Route path="*" element={<p className='han'>進來ㄌ 進來ㄌ 歡裡進來ㄌ</p>} exact/>
                            <Route path="/history" element={"歷史分析"} exact/>
                            <Route path="/settings" element={<MySettings />} exact/>
                        </Routes>
                    </Grid.Column>
                    <Grid.Column width={3}></Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    );
}

export default Member;