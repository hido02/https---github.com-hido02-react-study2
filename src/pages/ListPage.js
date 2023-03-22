import { useState } from 'react';
import {Container, Row, Col, Button, ListGroup, Form} from 'react-bootstrap';

const ListPage = () => {
    // 서버 api에서 요청해서 데이터를 받을 것

    const [post, setPost] = useState({
        id: '',
        title: '',
        content: '',
    });

    const handleInputChange = (prop) => (e) => {
        setPost({...post, [prop]: e.target.value});
    };

    // const handleInputChange2 = (e) => {
    //     // computed property names 문법 (키값 동적할당)
    //     setPost({
    //         ...post, // ...을 안 쓰면 업데이트 x 기존 값 다 날라감
    //         [e.target.name]: e.target.value,
    //     })
    // }

    const [posts, setPosts] = useState([
        {id:1, title:"제목1", content: "내용1"},
        {id:2, title:"제목2", content: "내용2"},
        {id:3, title:"제목3", content: "내용3"},
        {id:4, title:"제목4", content: "내용4"},
        {id:5, title:"제목5", content: "내용5"},
    ]);

    const handleWrite = () => {
        setPosts([...posts, post]);
    }

    return (
        <div>   

<Container>
            <h1>리스트 페이지</h1>
            <hr/>
            <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>제목</Form.Label>
        <Form.Control type="text" placeholder="제목을 입력하세요" value={post.title} onChange={handleInputChange('title')}/>
        <Form.Control type="text" placeholder="내용을 입력하세요" value={post.content} onChange={handleInputChange('content')} name='content'/>
        {/* <Form.Control type="text" placeholder="내용을 입력하세요" value={post.content} onChange={handleInputChange2} name='content'/> */}
        <Button onClick={handleWrite}>글쓰기</Button>
      </Form.Group>
    </Form>
    <Row>
            <ListGroup as="ul">
            {posts.map((post) =><ListGroup.Item as="li"><Col>번호: {post.id} </Col>
            <Col>제목: {post.title}</Col>
            <Col>내용: {post.content}</Col>
            <Button>삭제</Button></ListGroup.Item>)}
            </ListGroup>
            </Row>
            </Container>

        </div>
    );
};

export default ListPage;