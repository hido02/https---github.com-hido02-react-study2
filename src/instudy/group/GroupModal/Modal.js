import React, { useState, useEffect,useCallback } from 'react';

const Modal = ({setModal, testdata}) => {
    console.log(testdata)
    return (
        <div>
            <div style={{width:"800px",height:"1000px",background:"purple" }}>
       {testdata.map((item,index,a)=>{
         console.log(a)
           return (<h2>{index}{item.NICKNAME}</h2>)
       })}
       <button onClick={setModal}>close</button>
     </div>
        </div>
    );
};

export default Modal;