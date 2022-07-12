import logo from './logo.svg';
import './App.css';
import FeatherIcon from 'feather-icons-react';
import Sidebar from './components/Sidebar';
import PageWrapper from './components/PageWrapper';
import { useState } from "react";
import Dashboard from './pages/Dashboard';

function App() {
  const [ sideBarOpened, setSideBarOpened ] = useState(true);
  const toggleSideBar = () => setSideBarOpened(!sideBarOpened);

  return (
    <>
      {/* Left Sidenav */}
        <Sidebar opened={sideBarOpened}/>
      {/* end left-sidenav*/}
        <PageWrapper sideBarOpened={sideBarOpened} toggleSideBar={toggleSideBar}>
          <Dashboard/>
        </PageWrapper>
      {/* end page-wrapper */}
    </>

  );
}

export default App;
