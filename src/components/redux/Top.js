
import { useSelector } from 'react-redux';
import '../../css/redux.css';

const Top = () => {

    // const {number} = props;
    // 구조분할 할당
    const { number, username } = useSelector((store)=>store); // strore의 number 상태를 꺼내온다
    // const number2 = useSelector((store)=>store.hello); // strore의 number 상태를 꺼내온다

    return (
        <div className='sub_container'>
            <h1>Top</h1>
            번호: {number}
            이름: {username}
        </div>
    );
};

export default Top;