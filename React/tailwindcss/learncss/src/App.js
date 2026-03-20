import logo from './logo.svg';
import './App.css';
import ColorDemo from './components/ColorDemo';

function App() {
  return (
       <div className='min-h-screen bg-yellow-200 flex items-center justify-center'>
      <div className='bg-white p-8 rounded-lg shadow-lg text-center'>
        <ColorDemo/>
      </div>
    </div>
  );
}

export default App;
