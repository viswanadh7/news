import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Newspage from './components/Newspage';

function App() {
  const [category, setCategory] = useState('general');
  return (
    <div className="App">
      <Navbar setCategory={setCategory} />
      <Newspage category={category} />
    </div>
  );
}

export default App;