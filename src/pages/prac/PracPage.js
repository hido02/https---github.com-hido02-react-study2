import { useParams } from 'react-router-dom';
import Header from '../../components/Header';
import UseParams from '../useParams';

const data = {
    useParams: {
        html:<UseParams/>
    }
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