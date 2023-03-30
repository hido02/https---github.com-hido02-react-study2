import React from 'react';

const DetailedModal = (props) => {
    return (
        <div>
            <div className='modal'>
                <h2>제목: {props.title[props.clickedNum]}</h2>
                <p>날짜: 2022-03-18</p>
                <p>상세내용</p>
            </div>
        </div>
    );
};

export default DetailedModal;