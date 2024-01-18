import './App.css'
import Home from './Components/Home';
import {
  HashRouter,
  Routes,
  Route
} from 'react-router-dom';
import SignUp from './Components/SignUp';
import SignIn from './Components/SignIn';
import DashbaordNav from './Components/DashbaordNav';
import DashHome from './Components/DashHome';
import About from './Components/About';
import Contact from './Components/Contact';
import Services from './Components/Services';
import Banking from './Components/Banking';
import Utility from './Components/Utility';
import PayRecharge from './Components/PayRecharge';
import Help from './Components/Help';
import Profile from './Components/Profile';


function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/dashbaordNav" element={<DashbaordNav />}>
            <Route path="dashHome" element={<DashHome />} />
            <Route path="banking" element={<Banking />} />
            <Route path="utility" element={<Utility />} />
            <Route path="pay" element={<PayRecharge />} />
            <Route path="profile" element={<Profile />} />
            <Route path="help" element={<Help />} />
          </Route>
        </Routes>
      </HashRouter>

    </>
  );
}

export default App;
