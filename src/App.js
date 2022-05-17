import Content from './components/Content/Content';
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar';
import './App.css'

function App() {
  return (
    <>
      <Header/>
      <div className='body'>
        <Sidebar/>
        <Content/>
      </div>
    </>
  );
}

export default App;
