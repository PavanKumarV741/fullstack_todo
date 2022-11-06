import './App.css';
import Login from './component/login';
import Signup from './component/signup';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Private from './component/private';
import Todo_home from './component/todo_home';
import Todo_form from './component/todo_form';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route element={<Private/>}>
        <Route path='/dashboard' element={<Todo_home/>}></Route>
      </Route>
      <Route path='/Todo_form' element={<Todo_form/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
