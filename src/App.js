import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { navBar, mainBody, about, repos } from "./editable-stuff/config.js";
import MainBody from "./components/home/MainBody";
import AboutMe from "./components/home/AboutMe";
import Project from "./components/home/Project";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Main from "./pages/Main";
import JPage from "./team-pages/J/JPage.js";
import PPage from "./team-pages/P/PPage.js";
import KPage from "./team-pages/K/KPage.js";
import CPage from "./team-pages/C/CPage.js";

const Home = React.forwardRef((props, ref) => {
  const titleRef = React.useRef();
  return (
    <>
      {navBar.show && <Navbar ref={titleRef} />}
      <MainBody
        gradient={mainBody.gradientColors}
        message={mainBody.message}
        title={`${mainBody.title}`}        
        ref={ref}
      />
      {about.show && (
        <AboutMe
          heading={about.heading}
          message={about.message}
          link={about.imageLink}
          imgSize={about.imageSize}
          resume={about.resume}
        />
      )}      
      {repos.show && (
        <Project
          heading={repos.heading}
          username={repos.gitHubUsername}
          length={repos.reposLength}
          specfic={repos.specificRepos}
        />
      )}      
      <Footer />
    </>
  );
});

const App = () => {
  // 개인 페이지로 넘어갔을 때도 메인페이지의 내브바, 푸터 남아있어서 메인페이지에만 나오게끔 뺐습니다... - 현종    

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>      
      <Routes>
        <Route path="/" exact element={<Home />} />        
        <Route path="Form" element={<Main />} />
        <Route path="J-Page" element={<JPage />} />
        <Route path="P-Page" element={<PPage />} />
        <Route path="K-Page" element={<KPage />} />
        <Route path="C-Page" element={<CPage />} />
        
      </Routes>      
    </BrowserRouter>
  );
};

export default App;
