import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { MedievalHome, MEDIEVAL_HOME_PATH } from './routes/MedievalHome';
import { Home, HOME_PATH } from './routes/HomeScreen';
import { Movies, MOVIES_PATH } from './routes/Movies';
import { AppProvider } from './AppContext';
import { FormalHome, FORMAL_HOME_PATH } from './routes/FormalHome';

function App() {
  return (
    <div>
      <AppProvider>
        <Router>
          <Routes>
            <Route path='/' element={<Navigate to={HOME_PATH} replace />} />
            <Route path={HOME_PATH} element={<Home />} />
            <Route path={MEDIEVAL_HOME_PATH} element={<MedievalHome />} />
            <Route path={FORMAL_HOME_PATH} element={<FormalHome />} />
            <Route path={MOVIES_PATH} element={<Movies />} />
          </Routes>
        </Router>
      </AppProvider>
    </div>
  );
}

export default App;
