import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router';

import ChoicePage from './pages/ChoicePage/ChoicePage';
import PlayersPage from './pages/PlayersPage/PlayersPage';
import GamePage from './pages/GamePage/GamePage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ChoicePage />} />
        <Route path="/players" element={<PlayersPage />} />
        <Route path="/game" element={<GamePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
