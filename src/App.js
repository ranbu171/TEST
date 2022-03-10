
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import TitlePage from './components/posts/TitlePage';
import Post from './components/Post';
import StateContext from './state.context';

function App() {
  const [base, setBase] = useState([]);
  
  return (
    <div className="App">
      <StateContext.Provider value={{ setBase }}>
        <Routes>
          <Route path='/' element={<TitlePage base={base} />} />
          <Route path='/:post' element={<Post />} />
        </Routes>
      </StateContext.Provider>
    </div>
  );
}

export default App;
