import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import ElementTransfer from './Problem1/ElementTransfer';
import DataComp from './Problem2/NestedList';
import InfiniteScrolling from './Problem3/InfiniteScrolling';


function App() {
  const navigate = useNavigate()
  return (
    <div className="App">
      <h1>React Assignments</h1>
      <button onClick={() => navigate('/element-transfer')}>Problem 1</button>&nbsp;
      <button onClick={() => navigate('/nested-list')}>Problem 2</button>&nbsp;
      <button onClick={() => navigate('/infinite-scrolling')}>Problem 3</button>

      <Routes>
        <Route path='/element-transfer' element={<ElementTransfer />} />
        <Route path='/nested-list' element={<DataComp />} />
        <Route path='/infinite-scrolling' element={<InfiniteScrolling />} />

      </Routes>
    </div>
  );
}

export default App;
