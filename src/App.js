
import './App.css';
import BottomNavbar from './component/BottomNavbar';
import AccountPage from './pages/AccountPage';
import KapilPage from './pages/KapilPage';
import LoginPage from './pages/LoginPage';
import LoginRegisterMain from './pages/LoginRegisterMain';
import RegisterPage from './pages/RegisterPage';
import { BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import TwoMinGame from './pages/TwoMinGame';
import AdminHomePage from './admin/AdminHomePage';
import TwoMinResult from './admin/TwoMinResult';
import SocketFile from './pages/SocketFile';
import LandingPage from './pages/LandingPage';
import LandingPages from './pages/LandingPages';


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route exact path='/cred' element={<LoginRegisterMain/>}/>
        <Route eaxct path='/bottomnavbar' element={<BottomNavbar/>}/>
        <Route exact path='/account' element={<AccountPage/>}/>
        <Route eaxct path='/' element={<KapilPage/>}/>
        <Route eaxct path='/twomin' element={<TwoMinGame/>}/>
        <Route exact path='/adminhomepage' element={<AdminHomePage/>}/>
        <Route eaxct path='/twominresult' element={<TwoMinResult/>}/>
        {/* <Route exact path='/socket' element={<SocketFile/>}/> */}
        <Route exact path='/landingpage' element={<LandingPage/>}/>
        <Route exact path='/landingpages' element={<LandingPages/>}/>

        
        
      </Routes>
    </Router>
    {/* <LoginPage/> */}
    {/* <RegisterPage/> */}
    </>
  );
}

export default App;
