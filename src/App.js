import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import Dashboard from './Dashboard';
import Blog from './Blog';
import ReadBlog from './ReadBlog';
function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Login />} /> 
      <Route path="/signup" element={<Signup />} /> 
       <Route path="/dashboard" element={<Dashboard />} /> 
       <Route path="/blog" element={<Blog />} /> 
       <Route path="/readblog" element={<ReadBlog/>}/>


    </Routes>
  </Router>
  );
}

export default App;
