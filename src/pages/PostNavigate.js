import React from 'react'
import {Routes,Route} from 'react-router-dom'
import { Grid ,Container,} from 'semantic-ui-react';
import Posts from './Posts'
import Topics from '../component/Topics';
function PostNavigate() {
  return (
    <Container>
         <Grid>
        <Grid.Row>
            <Grid.Column width={3}><Topics/></Grid.Column>
            <Grid.Column width={10}>
                <Routes>
                    <Route path="*" element={<Posts />} exact/>
                    <Route path=":postId" element={"憨"} exact/>
                </Routes>
                </Grid.Column>
            <Grid.Column width={3}></Grid.Column>
            </Grid.Row>
        </Grid>
    </Container>
    
  )
}

export default PostNavigate;