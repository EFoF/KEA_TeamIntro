import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { navBar, mainBody, about, repos } from "./editable-stuff/config.js";
import MainBody from "./components/home/MainBody";
import AboutMe from "./components/home/AboutMe";
import Project from "./components/home/Project";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
// import Skills from "./components/home/Skills";
import Main from "./pages/Main";
// import Leadership from "./components/home/Leadership.jsx";
import JPage from "./team-pages/J/JPage.js";
import PPage from "./team-pages/P/PPage.js";
import KPage from "./team-pages/K/KPage.js";
import CPage from "./team-pages/C/CPage.js";
// import Experience from "./components/home/Experience";

const Home = React.forwardRef((props, ref) => {
  const titleRef = React.useRef();
  return (
    <>
      {navBar.show && <Navbar ref={titleRef} />}
      <MainBody
        gradient={mainBody.gradientColors}
        title={`${mainBody.title}`}
        message={mainBody.message}
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
      {/* {
        experiences.show && (
          <Experience experiences={experiences}/>
        )
      } */}
      {repos.show && (
        <Project
          heading={repos.heading}
          username={repos.gitHubUsername}
          length={repos.reposLength}
          specfic={repos.specificRepos}
        />
      )}
      {/* {leadership.show && (
        <Leadership
          heading={leadership.heading}
          message={leadership.message}
          img={leadership.images}
          imageSize={leadership.imageSize}
        />
      )} */}
      {/* {skills.show && (
        <Skills
        heading={skills.heading}
        hardSkills={skills.hardSkills}
        softSkills={skills.softSkills}
      />
      )} */}
      <Footer />
    </>
  );
});

const App = () => {
  // 개인 페이지로 넘어갔을 때도 메인페이지의 내브바, 푸터 남아있어서 메인페이지에만 나오게끔 뺐습니다... - 현종
  // const titleRef = React.useRef();

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      {/* {navBar.show && <Navbar ref={titleRef} />} */}
      <Routes>
        <Route path="/" exact element={<Home />} />
        {/* <Route path="/" exact element={<Home ref={titleRef} />} /> */}
        <Route path="Form" element={<Main />} />
        <Route path="J-Page" element={<JPage />} />
        <Route path="P-Page" element={<PPage />} />
        <Route path="K-Page" element={<KPage />} />
        <Route path="C-Page" element={<CPage />} />
      </Routes>
      {/* {false && <Route path="/blog" exact component={Blog} />}
      {false && <Route path="/blog/:id" component={BlogPost} />} */}
      {/* <Footer></Footer> */}
    </BrowserRouter>
  );
};

export default App;
