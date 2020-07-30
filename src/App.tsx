import React, {lazy} from 'react';
import { NavLink, Route} from "react-router-dom";
import './App.scss';
import {Suspense} from 'react';
import Loading from "./components/loading/Loading";
import Home from "./pages/home/Home";
const Posts = lazy(()=>import('./pages/posts/Posts'));
const PostDetail = lazy(()=>import('./pages/post-detail/PostDetail'));

function App() {
  return (
    <div className="App">
        <div className="App-container">
          <nav className="App-nav">
            <ul className="App-list">
              <li className="App-item">
               <NavLink to = "/home" className="App-link">Home</NavLink>
              </li>
                <li className="App-item">
                    <NavLink to = "/posts" className="App-link">Posts</NavLink>
                </li>
            </ul>
          </nav>
        </div>
      <div className="App-content">
          <Suspense fallback={<Loading />}>
              <Route exact path = "/home" render = {()=><Home />}/>
              <Route exact path = "/posts" render = {()=><Posts />}/>
              <Route exact path = "/posts/:id" render = {(routerProps)=> <PostDetail id = {routerProps.match.params.id}/>}/>
          </Suspense>
      </div>
    </div>
  );
}

export default App;
