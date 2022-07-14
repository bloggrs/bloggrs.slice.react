import logo from './logo.svg';
import './App.css';
import FeatherIcon from 'feather-icons-react';
import Sidebar from './components/Sidebar';
import PageWrapper from './components/PageWrapper';
import E404 from './pages/E404';
import React, { useState, Suspense } from "react";
// import Dashboard from './pages/Dashboard';
// import Posts from './pages/Posts';
// import Comments from './pages/Comments';
// import SingleComment from './pages/SingleComment';
// import SinglePost from "./pages/SinglePost";
import Loading from "./components/Loading";
import { Route, Routes } from "react-router";
import { useLocation } from "react-router-dom";
import MyProfile from './pages/MyProfile';

const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Posts = React.lazy(() => import("./pages/Posts"));
const Teams = React.lazy(() => import("./pages/Teams"));
const SingleTeam = React.lazy(() => import("./pages/SingleTeam"));
const SinglePost = React.lazy(() => import("./pages/SinglePost"));
const Comments = React.lazy(() => import("./pages/Comments"));
const SingleComment = React.lazy(() => import("./pages/SingleComment"));
const Categories = React.lazy(() => import("./pages/Categories"));
const SingleCategory = React.lazy(() => import("./pages/SingleCategory"));
const Settings = React.lazy(() => import("./pages/Settings"));
const Login = React.lazy(() => import("./pages/Login"));
const Register = React.lazy(() => import("./pages/Register"));
const CreateBlog = React.lazy(() => import("./pages/CreateBlog"));

function App() {
  const location = useLocation();
  
  const [ sideBarOpened, setSideBarOpened ] = useState(true);
  const toggleSideBar = () => setSideBarOpened(!sideBarOpened);

  const newButton = { label: "New post", to: "/posts/create" };
  const { pathname } = window.location;
  const isComment = pathname.indexOf("comment") !== -1;
  const isPost = pathname.indexOf("task") !== -1;
  const isTeam = pathname.indexOf("team") !== -1;
  const isCategory = pathname.indexOf("categories") !== -1;
  if (isComment) {
    newButton.label = "New comment"
    newButton.to = "/comments/create"
  } else if (isPost) {
    newButton.label = "New post"
    newButton.to = "/posts/create"
  } else if (isTeam) {
    newButton.label = "New team"
    newButton.to = "/teams/create"
  } else if (isCategory) {
    newButton.label = "New category"
    newButton.to = "/categories/create"
  }
  if (location.hash == "404") return <E404/>
  return (
    <>
      <Sidebar opened={sideBarOpened} />
      <Suspense fallback={<Loading/>}>
          <PageWrapper newButton={newButton} sideBarOpened={sideBarOpened} toggleSideBar={toggleSideBar}>
              <Routes>
                  <Route exact path="/" element={<Dashboard/> } />
                  <Route exact path="/teams" element={<Teams/>} />
                  <Route exact path="/teams/:team_id" element={<SingleTeam/>} />
                  <Route exact path="/posts" element={<Posts/>} />
                  <Route exact path="/posts/:post_id" element={<SinglePost/>} />
                  <Route exact path="/comments" element={<Comments/>} />
                  <Route exact path="/comments/:comment_id" element={<SingleComment/>} />
                  <Route exact path="/categories" element={<Categories/>} />
                  <Route exact path="/categories/:category_id" element={<SingleCategory/>} />
                  <Route exact path="/settings" element={<Settings/>}/>
                  <Route exact path="/me" element={<MyProfile/>}/>
                  <Route exact path="/login" element={<Login/>}/>
                  <Route exact path="/register" element={<Register/>}/>
                  <Route exact path="/blogs/create" element={<CreateBlog/>}/>
                  <Route path="*" element={<E404/>} />
              </Routes>
            {/* <Posts/> */}
            {/* <Comments/> */}
            {/* <SingleComment/> */}
          </PageWrapper>
      </Suspense>
    </>
  );
}

export default App;
