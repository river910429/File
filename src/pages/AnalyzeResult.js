import React, { useEffect } from 'react';
import ClipLoader from "react-spinners/ClipLoader";
import { useSearchParams } from 'react-router-dom';
import { Button, Grid, Modal } from "semantic-ui-react";

function AnalyzeResult(){
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const [searchparams] = useSearchParams();
    const [loading, setLoading] = React.useState(false);
    useEffect(() =>{
        setLoading(true);
        setTimeout(() =>{
            setLoading(false);
        },1000);
    },[]);
    const keyWords = (searchparams.get("id")).split(" ");
    return (
        <>
        {
        loading ? (
            <div className='loading'>
                <ClipLoader  color='#2C3333' loading={loading} size={50} />
            </div>
        ) : (
            <>
            <p className='han4'>
                <p className='han'>以下為所搜尋的關鍵字與其結果</p>
                <ul>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column width={2}></Grid.Column>
                            <Grid.Column width={3}>
                                ptt的強度
                            </Grid.Column>
                            <Grid.Column width={3}>
                                ptt的分數
                            </Grid.Column>
                            <Grid.Column width={3}>
                                dcard的強度
                            </Grid.Column>
                            <Grid.Column width={3}>
                                dcard的分數
                            </Grid.Column>
                            <Grid.Column width={2}></Grid.Column>
                        </Grid.Row>
                    </Grid><br/><br/>
                    {keyWords.map((keyWord) =>(
                        <p className='han3'>
                            <li key={keyWord.id}>
                                {keyWord}
                                {
                                    //接收到的資料放這(包括ptt強度、分數,dcard強度、分數)
                                }
                                <Button 
                                    floated="right"
                                    size='mini'
                                    onClick={() =>setIsModalOpen(true)}
                                >
                                    <p className='hand'>查看詳細</p>
                                </Button>
                                <br/><br/>
                            </li>
                           
                        </p>
                    ))}

                </ul>
            </p>
            <Modal open={isModalOpen}>
                <Modal.Header><b className='hand'>詳細文章</b></Modal.Header>
                <Modal.Content>
                    {  
                        //放文章
                    }
                </Modal.Content>
                <Modal.Actions>
                    <Button onClick={() => setIsModalOpen(false)}>關閉</Button>
                </Modal.Actions>
            </Modal>
            </>
            
        )
        
    }
    
    </>
    
    );
}

export default AnalyzeResult;