import logo from './logo.svg';
import './App.css';
import ListTodo from './todos/ListTodo';
import './todos/listTodo.scss'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route } from "react-router-dom"
import Nav from './Nav/Nav';
import Home from './Example/Home';
import About from './Example/About';
import ListUser from './Users/ListUser';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav></Nav>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Simple React List Todos
        </p>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todos" element={<ListTodo />} />
          <Route path="/about" element={<About />} />
          <Route path="/user" element={<ListUser />} />
        </Routes>


      </header>




      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {/* Same as */}
      <ToastContainer />
    </div>
  );
}

export default App;
