import useState from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from"./pages/main/MainPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import EachPage from './pages/each/EachPage';
import ListPage from './pages/ListPage';
import WritePage from './pages/WritePage';

import './App.css';
import ReduxView from './views/ReduxView';
import AlignCenterView from './views/AlignCenterView';
import withRouterApp from './views/withRouterApp';


function App() {
  // App이 상태를 들고 있으면 됨->전송

  return (
   <Routes>
    <Route path="/" element={<MainPage />} />
    <Route path="each/:menu" element={<EachPage/>} />
    <Route path="/list" element={<ListPage />}/>
    <Route path="/list/write" element={<WritePage />}/>
    <Route path="redux" element={<ReduxView />}/>
    <Route path="/alignCenter" element={<AlignCenterView />}/>
    {/*상태-writepage에서는 listpage에 접근할 수 있는 방법이 없다 */}
    <Route path="/withrouter" element={<withRouterApp />}/>
    </Routes>
  );
}

export default App;
