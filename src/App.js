import { Route, Routes } from 'react-router-dom';
import MainPage from"./pages/main/MainPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import EachPage from './pages/each/EachPage';
import ListPage from './pages/ListPage';
import WritePage from './pages/WritePage';

import './App.css';


function App() {
  // App이 상태를 들고 있으면 됨->전송

  const [posts, setPosts] = useState([
    {id:1, title:"내용1"},
    {id:2, title:"내용2"},
    {id:3, title:"내용3"},
    {id:4, title:"내용4"},
    {id:5, title:"내용5"},
]);

  return (
   <Routes>
    <Route path="/" element={<MainPage />} />
    <Route path="each/:menu" element={<EachPage/>} />
    <Route path="/list" element={() => ListPage(posts)} />
    <Route path="/list/write" element={() => WritePage(setPosts)} />
    {/*상태-writepage에서는 listpage에 접근할 수 있는 방법이 없다 */}
    </Routes>
  );
}

export default App;
