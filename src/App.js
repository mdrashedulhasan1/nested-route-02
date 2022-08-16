import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import Friends from './components/Friends/Friends';
import { Routes, Route, Link } from "react-router-dom";
import Header from './components/Header/Header';
import FriendDetail from './components/FriendDetail/FriendDetail';
import Posts from './components/Posts/Posts';
import PostDetail from './components/PostDetali/PostDetail';
import Countries from './components/Countries/Countries';
import CountryDetail from './components/CountryDetail/CountryDetail';
function App() {
  return (
    <div className="App">
      <Header></Header>
       <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/about" element={<About></About>} />
        <Route path="/friends" element={<Friends></Friends>} />
        <Route path="/friend/:friendId" element={<FriendDetail></FriendDetail>} />
        <Route path="/posts" element={<Posts></Posts>}>
          <Route path=":postId" element={<PostDetail></PostDetail>}></Route>
        </Route>
        <Route path="/countries" element={<Countries></Countries>} />
        <Route path="/country/:countryName" element={<CountryDetail></CountryDetail>} />
      </Routes>
    </div>
  );
}

export default App;
