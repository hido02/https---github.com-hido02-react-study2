import { useState } from 'react';
import '../css/redux.css';
import Top from '../components/redux/Top';
import Bottom from '../components/redux/Bottom';

const ReduxView = () => {

    // const [number, setNumber] = useState(1);

    // const addNumber = () => {
    //     setNumber(number+1);
    // }

    return (
        <div className='container'>
            <h1>최상단 화면</h1>
            {/* <Top number={number}/>
            <Bottom addNumber={addNumber} /> */}
            <Top />
            <Bottom />
        </div>
    );
};

export default ReduxView;