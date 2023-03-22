
import { useSelector } from 'react-redux';
import '../../css/redux.css';

const Top = () => {

    // const {number} = props;
    const number = useSelector((store)=>store.number); // strore의 number 상태를 꺼내온다
    const number2 = useSelector((store)=>store.hello); // strore의 number 상태를 꺼내온다

    return (
        <div className='sub_container'>
            <h1>Top</h1>
            번호: {number}
        </div>
    );
};

export default Top;