import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import MainView from './views/MainView';
import MainPage from './pages/main/MainPage';
import ReduxView from './views/ReduxView';
import WritePage from './pages/WritePage';

const routes = () => {
    return (
      <BrowserRouter>
        <Routes>
          {/* Header,Footer,Nav을 보여주고 싶은 컴포넌트 */}
          <Route element={<MainView />}>
            <Route path="/" element={<MainPage />} />
          </Route>
          {/* Header,Footer,Nav을 안 보여주고 싶은 컴포넌트 */}
          <Route path="/list" element={<ReduxView />} />
          <Route path="/list/write" element={<WritePage />} />
        </Routes>
      </BrowserRouter>
    );
  };