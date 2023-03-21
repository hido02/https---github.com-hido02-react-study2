import { useState } from 'react';
import {Container, Row, Col, Button, ListGroup} from 'react-bootstrap';

const ListPage = () => {
    // 서버 api에서 요청해서 데이터를 받을 것

    const [posts, setPosts] = useState([
        {id:1, title:"내용1"},
        {id:2, title:"내용2"},
        {id:3, title:"내용3"},
        {id:4, title:"내용4"},
        {id:5, title:"내용5"},
    ]);

    return (
        <div>   

<Container>
            <h1>리스트 페이지</h1>
            <hr/>
            <ListGroup as="ul">
            {posts.map((post) =><Row><ListGroup.Item as="li"><Col>번호: {post.id} 제목: {post.title} </Col><Col></Col><Col><Button>삭제</Button></Col></ListGroup.Item></Row>)}
            </ListGroup>
            </Container>

        </div>
    );
};

export default ListPage;