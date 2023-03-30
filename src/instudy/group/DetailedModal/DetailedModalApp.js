import React, { useState } from 'react';
import DetailedModal from './DetailedModal';

const DetailedModalApp = () => {

    const [title, setTitle] = useState([
        '[React] React 설치와 개발환경 세팅하기',
        '[React] JSX를 이용해 html 페이지 제작해보기',
        '[React] React에서 state 변경해보기'
    ]);

    const [modal, setModal] = useState(false);

    const [clickedNum, setClickedNum] = useState(0);

    return (
        <div>
            <div className="App">
                {
                    title.map((content, idx) => <div className='list' key={idx}>
                    <h3 onMouseDown={(e) => { e.preventDefault() }} onClick={()=>{setClickedNum(idx)}}>{content}</h3>
                    <p>2022-03-18</p>
                    <hr/>
                    </div>)
                }

                <button onClick={ ()=> {setModal(!modal) } }>모달창 여닫</button>
                {modal == true ? <DetailedModal title={title} clickedNum={clickedNum}/> : null}
            </div>
        </div>
    );
};

export default DetailedModalApp;