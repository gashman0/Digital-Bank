import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import SignUp from "./pages/SignUp";
import Features from "./pages/Features";
import Service from "./pages/Service";
import About from "./pages/About";
import ContactUs from "./components/ContactUs";
import MainLayout from "./layouts/MainLayout";
import NotFound from "./pages/NotFound";



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout/>}> 
      <Route index element={<LandingPage />}/>
      <Route path='/login' element={<LoginPage />} />
      <Route path='/register' element={<SignUp />} />
      <Route path='/features' element={<Features />} />
      <Route path='/services' element={<Service />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact-us' element={<ContactUs />} />
      <Route path="/*" element={<NotFound />} />
    </Route>
  )
);



function App() {
  
  return (
    <>
        <RouterProvider router={router} />
    </>
  );
}

export default App
