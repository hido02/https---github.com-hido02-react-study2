import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import GroupModal from './GroupModal';

const View = () => {

    const [title, setTitle] = useState([
        '[React] React 설치와 개발환경 세팅하기',
        '[React] JSX를 이용해 html 페이지 제작해보기',
        '[React] React에서 state 변경해보기'
    ]);

    const [modal, setModal] = useState(false);

    const [clickedNum, setClickedNum] = useState(0);
    
    return (
        <div>

{/* <button type="button" class="btn btn-primary" data-mdb-toggle="modal" data-mdb-target="#exampleModal">
  Launch demo modal
</button>

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-mdb-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">...</div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-mdb-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div> */}

        </div>
    );
};

export default View;