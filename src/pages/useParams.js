import { useParams } from 'react-router-dom';

const UseParams = () => {
    let { params } = useParams();

    return (
        <div classNmae="test">
            <p>현재 페이지의 파라미터는 {params}입니다.</p>
        </div>
    )
}

export default UseParams;