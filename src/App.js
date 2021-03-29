import './App.css';
import Sidebar from './components/Sidebar';
import Trends from './components/Trends';
import TrendsKeyword from './components/TrendsKeyword';
import Twittes from './components/Twittes';

function App() {
  return (
    <div className="twitter">
      <Sidebar/>
      <Twittes/>
      <Trends />
      
    </div>
  );
}

export default App;
