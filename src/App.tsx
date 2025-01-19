import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { MedievalHome, MEDIEVAL_HOME_PATH } from './routes/MedievalHome';
import { Movies, MOVIES_PATH } from './routes/Movies';

function App() {
  return (
    <Router>
      <Routes>
        {/* Redirect '/' to MEDIEVAL_HOME_PATH */}
        <Route path='/' element={<Navigate to={MEDIEVAL_HOME_PATH} replace />} />
        <Route path={MEDIEVAL_HOME_PATH} element={<MedievalHome />} />
        <Route path={MOVIES_PATH} element={<Movies />} />
      </Routes>
    </Router>
  );
}

export default App;
