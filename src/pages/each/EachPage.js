import { useParams } from 'react-router-dom';
import Header from '../../components/Header';
import MemoView from '../../views/MemoView';
import useParamsView from '../../views/useParamsView';

const data = {
    memo: {
        html:<MemoView/>,
    },
    // useParams: {
    //     html:<useParamsView/>,
    // }
};

const DataPage = () => {
    const params = useParams();
    const menu = data[params.menu];

    return (
        <div>
            <Header/>
            {
                menu ? (
                    <>
                    {menu.html}
                    </>
                ) : (
                    <p>존재하지 않는 메뉴입니다.</p>
                )
            }
        </div>
    );
};

export default DataPage;