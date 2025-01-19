import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { MedievalHome, MEDIEVAL_HOME_PATH } from './routes/MedievalHome';
import { Home, HOME_PATH } from './routes/HomeScreen';
import { Movies, MOVIES_PATH } from './routes/Movies';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Navigate to={HOME_PATH} replace />} />
          <Route path={HOME_PATH} element={<Home />} />
          <Route path={MEDIEVAL_HOME_PATH} element={<MedievalHome />} />
          <Route path={MOVIES_PATH} element={<Movies />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
