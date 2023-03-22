import { useParams } from 'react-router-dom';
import Header from '../../components/Header';
import UseParams from '../useParams';
import ReduxView from '../../views/ReduxView';

const data = {
    useParams: {
        html:<UseParams/>
    },
    redux: {
        html:<ReduxView/>
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