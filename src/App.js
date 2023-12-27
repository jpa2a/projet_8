import './App.scss';
import { RouterProvider, createBrowserRouter, NavLink, Outlet } from 'react-router-dom';
import {Location} from "./locations.jsx";
const router = createBrowserRouter([
{
  path: '/',
  element : <Root/>,
  errorElement: <Page404/>,
  children: [
    {
      path: '',
      element : <Location/>,
      loader: () => fetch('json/logements.json')
    
    },
    
    {
      path: 'apropos',
      element : <div>a propos</div>
    
    }


  ]
},

])

function Page404(){
  return <>
   <div className='container'>
      <header>
          <img src='images/logo/LOGO.svg' alt='Logo'/>
            <nav>
              <NavLink to='/' className='navBtn'>Acceuil</NavLink>
              <NavLink to='/apropos' className='navBtn'>A propos</NavLink>
            </nav>
      </header>
      <div> <h1>PAGE 404</h1></div>
      
    </div>
   
  </>
}

function Root (){
  return <>
    <div className='container'>
      <header>
          <img src='images/logo/LOGO.svg' alt='Logo'/>
            <nav>
              <NavLink to='/' className='navBtn'>Acceuil</NavLink>
              <NavLink to='/apropos' className='navBtn'>A propos</NavLink>
            </nav>
      </header>
      <div><Outlet/></div>
      
    </div>
  </>
}

function App() {
  return (
   <RouterProvider router={router} />
  );
}

export default App;
