import { createBrowserRouter,RouterProvider,Outlet} from 'react-router-dom';
import Footer from './Compoenents/Footer';
import NavBar from './Compoenents/NavBar';
import Home from './Pages/Home/Home';
import Product from './Pages/Product/Product';
import Products from './Pages/Products/Products';
import './App.css';


const Layout=()=>{
  return(
    <div className='App'>
      <NavBar/>
       <Outlet/>
      <Footer/>
    </div>
  )
}

const Router=createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products/",
        element: <Products/>,
      },
      {
        path: "/product/:id",
        element: <Product/>,
      },
    ],
  },
]);

function App() {
  return (
     <div>
      <RouterProvider router={Router}/>

     </div>
  );
}

export default App;
