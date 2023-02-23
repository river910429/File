import { Grid, Search ,Container } from 'semantic-ui-react';
import Topics from '../component/Topics';
import { useLocation } from 'react-router-dom';
import Record from "./Record";

function Posts(){
    const location = useLocation();
    const urlSearchParams = new URLSearchParams(location.search);
    const currentDetail = urlSearchParams.get("detail");
    if(currentDetail){
        if(currentDetail == "歷史紀錄") return(<Record/>);
        else return(
            <Container>
                <Grid>
                    <Grid.Row>
                    <Grid.Column width={5}></Grid.Column>
                    <Grid.Column width={6}>
                        <h1>尚未想到要放啥</h1>
                    </Grid.Column>
                    <Grid.Column width={5}></Grid.Column>
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
                        <Grid.Column width={10}>This is 首頁</Grid.Column>
                        <Grid.Column width={3}></Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
    );
}

export default Posts;