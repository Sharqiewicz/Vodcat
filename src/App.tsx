import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router';

import ChoicePage from './pages/ChoicePage/ChoicePage';
import PlayersPage from './pages/PlayersPage/PlayersPage';
import GamePage from './pages/GamePage/GamePage';
import FinishedPage from './pages/FinishedPage';
import WelcomePage from './pages/WelcomePage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/choice" element={<ChoicePage />} />
        <Route path="/players" element={<PlayersPage />} />
        <Route path="/game" element={<GamePage />} />
        <Route path="/finish" element={<FinishedPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
