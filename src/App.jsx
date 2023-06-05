import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import Listing from "./pages/Listing";
import Property from "./pages/Property";
import Blog from "./pages/Blog";
import Gallery from "./pages/Gallery";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <div className="min-h-screen w-full">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="listing" element={<Listing />} />
          <Route path="property" element={<Property />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact-us" element={<ContactUs />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
