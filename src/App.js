import './App.css';
import Sidebar from './components/Sidebar';
import MainLayout from './layouts/MainLayout';

function App() {
  return (
    <MainLayout>
      <div></div>
      <Sidebar/>
      <div className="flex justify-center items-center min-h-screen font-moderustic text-white bg-gradient-to-br from-cyan-300 via-purple-800 to-pink-300">
        <div className="text-8xl font-bold">
          Hi, I'm Jonathan
        </div>
        <div>
          I'm a student at the University of Pennsylvania
        </div>
      </div>
    </MainLayout>
    
  );
}

export default App;
