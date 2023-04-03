import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Row } from 'react-bootstrap';
import groupMember from './Profile/groupMember.jpg'; 

const GroupMainView = () => {
    const imgStyle = {
        width: '70px',
    }

    const [title, setTitle] = useState([
        '1과목 끝내기',
        '2과목 끝내기',
        '3과목 끝내기'
    ])

    const [modal, setModal] = useState(false);

    const [clickedNum, setClickedNum] = useState(0);

    const cardStyle = {
        width: '18rem',
    }

//     const mdModal = (props) => {
//         return (
//             <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//   <div class="modal-dialog">
//     <div class="modal-content">
//       <div class="modal-header">
//         <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
//         <button type="button" class="btn-close" data-mdb-dismiss="modal" aria-label="Close"></button>
//       </div>
//       <div class="modal-body">...</div>
//       <div class="modal-footer">
//       <div class="flex-shrink-0">
//                   <img src={groupMember} alt="Generic placeholder" class="img-fluid rounded-circle border border-dark border-3" style={imgStyle} />

//               </div>
//               <div class="flex-shrink-0">
//                   <img src={groupMember} alt="Generic placeholder" class="img-fluid rounded-circle border border-dark border-3" style={imgStyle} />

//               </div>
//       </div>
//     </div>
//   </div>
// </div>
//         )
//     }

    console.log(setClickedNum)
    console.log(setModal)

    return (
        <div>
            {
                title.map((content, idx) => 
                <div class="card" style={ cardStyle } key={idx} 
                onClick={ ()=>{
                    setClickedNum(idx);
                    setModal(!modal);
                }
                }>
                    <div class="card-body">
                        <Link to="/detailedModal" data-mdb-toggle="modal" data-mdb-target="#exampleModal">{content}</Link>

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">{content}</h5>
        <button type="button" class="btn-close" data-mdb-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <Container>
        <Row><b>기간</b></Row>
        <Row>하드코딩</Row>
        <Row><b>상세 설명</b></Row>
        <Row>하드코딩</Row>
        <hr/>
        <Row><b>그룹원 진행상황</b></Row>
        <div class="row">
        <div class="col-md-3"><button type="button" class="btn btn-success">완료</button></div>
        </div>
        <div class="d-flex align-items-center mb-4">
              <div class="flex-shrink-0">
                  <img src={groupMember} alt="Generic placeholder" class="img-fluid rounded-circle border border-dark border-3" style={imgStyle} />

              </div>
            </div>
        <div class="row">
        <div class="col-md-3"><button type="button" class="btn btn-warning">진행중</button></div>
        </div>
        <div class="row">
        <div class="col-md-3"><button type="button" class="btn btn-danger">시작전</button></div>
        </div>
        </Container>
      </div>
      <div class="modal-footer">
      <div class="flex-shrink-0">
                  <img src={groupMember} alt="Generic placeholder" class="img-fluid rounded-circle border border-dark border-3" style={imgStyle} />

              </div>
              <div class="flex-shrink-0">
                  <img src={groupMember} alt="Generic placeholder" class="img-fluid rounded-circle border border-dark border-3" style={imgStyle} />

              </div>
      </div>
    </div>
  </div>
</div>
                        </div>
                        </div>
                )
            }

{modal == true ? <mdModal title={title} clickedNum={clickedNum}/> : null}


        </div>
    );
};

export default GroupMainView;