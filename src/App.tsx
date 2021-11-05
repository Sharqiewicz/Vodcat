import ChoicePage from './pages/ChoicePage/ChoicePage'
import PlayersPage from './pages/PlayersPage/PlayersPage'
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router';

const App = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<ChoicePage/>} />
            <Route path="/players" element={<PlayersPage/>} />
        </Routes>
    </BrowserRouter>
)

export default App;
