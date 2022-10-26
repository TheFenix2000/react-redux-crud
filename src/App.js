import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import PageNotFound from './components/PageNotFound/PageNotFound';
function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Routes>
          <Route index exact element={<Home />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
