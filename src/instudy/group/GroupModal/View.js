import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import Modal from './Modal';

const View = () => {
    const [id, setId] = useState(0);
    const [modal,setModal] = useState('')
    const [testdata,setTestdata] = useState([])

    const stateTest = () => {
        setId(id+1)
    }

    useEffect(
        () => {
            alert("ok")
        }, []
    );

    const testAxios = () => {
        axios( 
            {
                url: '/user/test.do',
                method: 'post', 
                data: {
                    email: 'test', aaa: 'aaa222'
                },
                baseURL: 'http://localhost:8110',
            }
        ).then(function (response) {
            console.log(response.data)
            setTestdata(response.data.JavaData)
        });
    }

    const testModal = () => {
        setModal('1')
    }

    return (
        <div>
            test {id}
            <button  onClick={()=> stateTest()}>test</button>
            <button  onClick={()=> testAxios()}>axiosTest</button>
            <button  onClick={()=> testModal()}>modal</button>
            {modal == "1" 
            ? 
            <Modal setModal={setModal} testdata={testdata} /> 
            // Modal에서 setModal 함수와 testdata state 변수를 사용 가능하다
            : 
            ''}
        </div>
    );
};

export default View;