import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './pages/Home/Home';
import Login from './pages/auth/login/Login';
import Register from './pages/auth/register/Register';
import Dashboard from './pages/dashboard/Dashboard';
import Sidebar from './components/sidebar/Sidebar';
import Layout from './components/layout/Layout';
import axios from 'axios';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

axios.defaults.withCredentials = true;

function App() {
  return (
   
      <BrowserRouter>
         <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register/>}/>
          <Route path="/dashboard" element={
            <Sidebar>
              <Layout>
              <Dashboard />
              </Layout>
            </Sidebar>
          } />
          

          {/* <Route path="/movies" element={<Movies />} />
          <Route path="/actors" element={<Actors />} />
          <Route path="/producers" element={<Producers />} />
           */}
        </Routes>
      </BrowserRouter>
   
  );
}

export default App;
