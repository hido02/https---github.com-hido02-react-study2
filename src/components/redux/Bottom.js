import { useDispatch } from 'react-redux';
import { decrease, increase } from '../../store';
import '../../css/redux.css';

const Bottom = () => {
    // const {addNumber} = props;

    const dispatcher = useDispatch();

    return (
        <div className='sub_container'>
            <h1>Bottom</h1>
            {/* <button onClick={addNumber}>증가</button> */}
            <button onClick={() => dispatcher(increase("cos"))}>증가</button>
            <button onClick={() => dispatcher(decrease())}>감소</button>
        </div>
    );
};

export default Bottom;