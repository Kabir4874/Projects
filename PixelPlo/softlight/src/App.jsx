import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
const MainLayout = lazy(() => import("./layout/MainLayout"));
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Work = lazy(() => import("./pages/Work"));
const News = lazy(() => import("./pages/News"));
const Contact = lazy(() => import("./pages/Contact"));
const SingleProject = lazy(() => import("./pages/SingleProject"));
const SingleBlog = lazy(() => import("./pages/SingleBlog"));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project/:id" element={<SingleProject />} />
        <Route path="/blog/:id" element={<SingleBlog />} />
      </Route>
    </Routes>
  );
};

export default App;
