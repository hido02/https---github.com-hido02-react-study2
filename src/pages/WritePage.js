import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const WritePage = () => {
    // write는 db에 insert

    const handleWrite = () => {
        // ListPage의 setPosts에 무엇을 담아야 함?
        // let post = {id:6, title:"인풋값"};
        // setPosts()해야
    }

    return (
        <div>
<Container>
            <h1>글쓰기 페이지</h1>
            <hr/>
            <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>제목</Form.Label>
        <Form.Control type="text" placeholder="제목을 입력하세요" />
        <Button onClick={handleWrite}>글쓰기</Button>
      </Form.Group>
    </Form>
    </Container>

        </div>
    );
};

export default WritePage;