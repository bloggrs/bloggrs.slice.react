import logo from './logo.svg';
import './App.css';
import FeatherIcon from 'feather-icons-react';
import Sidebar from './components/Sidebar';
import PageWrapper from './components/PageWrapper';

function App() {
  return (
<>
  {/* Left Sidenav */}
    <Sidebar/>
  {/* end left-sidenav*/}
    <PageWrapper/>
  {/* end page-wrapper */}
</>

  );
}

export default App;
