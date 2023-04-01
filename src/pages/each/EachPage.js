import { useParams } from 'react-router-dom';
import Header from '../../components/Header';
import DetailedModalApp from '../../instudy/group/DetailedModal/DetailedModalApp';
import GroupMainView from '../../instudy/group/GroupMainView';
import View from '../../instudy/group/GroupModal/View';
import ProfileCard from '../../instudy/group/Profile/ProfileCard';
import AlignCenterView from '../../views/AlignCenterView';
import MemoView from '../../views/MemoView';
import PracticeView from '../../views/PracticeView';
import ReduxView from '../../views/ReduxView';
import justifyCenter from '../prac/justifyCenter';
import bottomNav2 from '../../instudy/bottomNav2';

const data = {
    memo: {
        html:<MemoView/>,
    },
    prac: {
        html:<PracticeView/>
    },
    redux: {
        html: <ReduxView/>
    },
    alignCenter: {
        html: <AlignCenterView/>
    },
    GroupMainView: {
        html: <GroupMainView />
    },
    view: {
        html: <View />
    },
    detailedModal: {
        html: <DetailedModalApp />
    },
    profile: {
        html: <ProfileCard />
    },
    header: {
        html: <Header />
    },
    justfiyCenter: {
        html: <justifyCenter />
    },
    bottomNav: {
        html: <bottomNav2 />
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