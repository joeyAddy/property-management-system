import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import Listing from "./pages/Listing";
import Property from "./pages/Property";
import Blog from "./pages/Blog";
import Gallery from "./pages/Gallery";
import ContactUs from "./pages/ContactUs";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
// import RequireAuth from "./middlewares/RequireAuth";
import { ToastContainer } from "react-toastify";
import UnAuthorized from "./pages/UnAuthorized";
import ResetPassword from "./pages/ResetPassword";
import ForgotPassword from "./pages/ForgotPassword";

function App() {
  return (
    <div className="min-h-screen w-full">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="listing" element={<Listing />} />
          <Route path="property/:id" element={<Property />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="login" element={<Login />} />
          <Route path="reset-password/:token" element={<ResetPassword />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="unAuthorized" element={<UnAuthorized />} />
          <Route path="register" element={<Register />} />
          <Route path="dashboard" element={<Dashboard />} />

          {/* <Route element={<RequireAuth allowedRoles={["client, agent"]} />}>
            <Route path="dashboard" element={<Dashboard />} />
          </Route> */}
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
