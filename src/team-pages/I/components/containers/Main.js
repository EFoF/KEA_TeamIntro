import React, { useEffect, useState } from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import Skills from "./skills/Skills";
import WorkExperience from "./workExperience/WorkExperience";
import Achievement from "./achievement/Achievement";
import Education from "./education/Education";
import ScrollToTopButton from "./topbutton/Top";
import { StyleProvider } from "../contexts/StyleContext";
import { useLocalStorage } from "../hooks/useLocalStorage";
import "./Main.scss";

const Main = () => {
  const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
  const [isDark, setIsDark] = useLocalStorage("isDark", darkPref.matches);

  return (
    <div className={"dark-mode"}>
      <StyleProvider value={{ isDark }}>
        <Header />
        {/* 여기 greeting , skills 들에 react-lottie 가 묶여있음 */}
        <Greeting />
        <Skills />
        <Education />
        <WorkExperience />

        <Achievement />
        <ScrollToTopButton />
      </StyleProvider>
    </div>
  );
};

export default Main;
