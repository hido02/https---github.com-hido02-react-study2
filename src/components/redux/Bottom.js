import {Button, Card} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { decrease, increase } from '../../store';
import '../../css/redux.css';

const Bottom = () => {
    // const {addNumber} = props;

    const dispatcher = useDispatch();

    return (
        <Card>
            <Card.Body>
            <h1>Bottom</h1>
            {/* <button onClick={addNumber}>증가</button> */}
            <Button onClick={() => dispatcher(increase("cos"))}>증가</Button>
            <Button onClick={() => dispatcher(decrease())}>감소</Button>
            </Card.Body>
            </Card>
    );
};

export default Bottom;