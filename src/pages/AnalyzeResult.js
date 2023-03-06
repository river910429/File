import React, { useEffect } from 'react';
import ClipLoader from "react-spinners/ClipLoader";
import keySend from './KeySearch';

function AnalyzeResult(){
    const [loading, setLoading] = React.useState(false);
    useEffect(() =>{
        setLoading(true);
        setTimeout(() =>{
            setLoading(false);
        },1000);
    },[]);
    return (
        <div>{
        loading ? (
            <div className='loading'>
                <ClipLoader  color='#2C3333' loading={loading} size={100} />
            </div>
        ) : (keySend)
        
    }
    </div>
    );
}

export default AnalyzeResult;