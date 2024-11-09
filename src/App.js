import './App.css';
import Sidebar from './components/Sidebar';
import MainLayout from './layouts/MainLayout';
import { TypeAnimation } from 'react-type-animation';



function App() {
  const CURSOR_CLASS_NAME = 'custom-type-animation-cursor'

  return (
    <div className="bg-gradient-to-br from-cyan-500  to-purple-800">
      <MainLayout>
        <div></div>
        <Sidebar/>
        <div className="flex-col align-start p-4 min-h-screen font-mono text-white">
          <div className="text-6xl font-bold justify-self-start">
              <TypeAnimation className={CURSOR_CLASS_NAME}
                cursor={false}
                sequence={[
                  650,
                  '',
                  1000,
                  'Hi,',
                  250,
                  'Hi, I\'m Jon!',
                  1000,
                  (el) => {el.classList.remove(CURSOR_CLASS_NAME)}
                ]}
              />
              <style>{`
                .custom-type-animation-cursor::after {
                  content: '|';
                  animation: cursor .7s infinite step-start;
                }
                @keyframes cursor {
                  50% {
                    opacity: 0;
                  }
                }
            `}</style>
            </div>
          
          <div className='grow justify-self-start transition-opacity ease-in delay-1000'>
            I'm a sophomore at the University of Pennsylvania.
          </div>
        </div>

      </MainLayout>
    </div>
  );
}

export default App;
