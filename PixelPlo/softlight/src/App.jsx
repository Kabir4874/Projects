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
const Team = lazy(() => import("./pages/Team"));
const TeamSingle = lazy(() => import("./pages/TeamSingle"));
const Pricing = lazy(() => import("./pages/Pricing"));
const NoPage = lazy(() => import("./pages/NoPage"));

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
        <Route path="/team" element={<Team />} />
        <Route path="/team/:id" element={<TeamSingle />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  );
};

export default App;
