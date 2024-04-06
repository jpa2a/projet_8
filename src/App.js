import './App.scss';
import { Routes, Route } from 'react-router-dom';
import {Home} from "./pages/home.js";
import {Location} from "./pages/location.js";
import {Apropos} from "./pages/apropos.js"
import {Page404} from "./pages/page404.js"
import {Header} from "./components/header.js"
import {Footer} from "./components/footer.js"


function App() {
  return (
    <div className='container'>
      <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/loca/:id" element={<Location />} />
      <Route path="apropos" element={<Apropos />}/>
      <Route path="*" element={<Page404 />}/>
    </Routes>
    <Footer />
   </div>
  );
}

export default App;
