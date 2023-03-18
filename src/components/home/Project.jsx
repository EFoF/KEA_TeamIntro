import React, { useState, useEffect, useCallback } from "react";
import Container from "react-bootstrap/Container";
import { Jumbotron } from "./migration";
import Row from "react-bootstrap/Row";
import ProjectCard from "./ProjectCard";
import axios from "axios";

const dummyProject = {
  name: null,
  description: null,
  svn_url: null,
  stargazers_count: null,
  languages_url: null,
  pushed_at: null,
};

/*
// 카드 별 정보
const dummyProject = {
  name: null, 
  description: null, 
  git_url: null, 
  personal_page: null, 
  temp1: null, 
  temp2: null
};
*/

const API = "https://api.github.com";
// const gitHubQuery = "/repos?sort=updated&direction=desc";
// const specficQuerry = "https://api.github.com/repos/hashirshoaeb/";

// heading: members -> 제목
// username: hashirshoaeb -> 아마 깃헙 Url 때문에 있는 듯..
// length: 5 -> 멤버 카드 개수
// specific: [] -> 이거도 무슨 레포 api 때문에 있는 거 같음
const Project = ({ heading, username, length, specfic }) => {
  // 여기들은 지워도 될 거 같당
  const allReposAPI = `${API}/users/${username}/repos?sort=updated&direction=desc`;
  const specficReposAPI = `${API}/repos/${username}`;
  // dummy는 냅두고
  const dummyProjectsArr = new Array(length + specfic.length).fill(
    dummyProject
  );

  // 멤버 정보 배열 변수에 저장
  const members_info = [
    {
      name: "최철웅 🦅",
      description: "독수리 오남매, 첫째.ᐟ",
      svn_url: "https://github.com/Owen-Choi",
      personal_page: "/home/C-Page",
      student_id: "201835539",
      email: "oldstyle482@gmail.com",
      stargazers_count: 0,
      languages_url: "",
      pushed_at: 0,
    },
    {
      name: "지현종 🦅",
      description: "독수리 오남매, 둘째.ᐟ.ᐟ",
      svn_url: "https://github.com/JongAAAAAAAAA",
      personal_page: "/home/J-Page",
      student_id: "201835746",
      email: "wlguswhd0809@naver.com",
      stargazers_count: 0,
      languages_url: "",
      pushed_at: 0,
    },
    {
      name: "임동혁 🦅",
      description: "독수리 오남매, 셋째.ᐟ.ᐟ.ᐟ",
      svn_url: "https://github.com/IMDongH",
      personal_page: "/home/I_Page",
      student_id: "201835506",
      email: "idh1007@naver.com",
      stargazers_count: 0,
      languages_url: "",
      pushed_at: 0,
    },
    {
      name: "김민경 🦅",
      description: "독수리 오남매, 넷째.ᐟ.ᐟ.ᐟ.ᐟ",
      svn_url: "https://github.com/minkyung73",
      personal_page: "/home/K-Page",
      student_id: "202035311",
      email: "minkyung7365@gmail.com",
      stargazers_count: 10,
      languages_url: "",
      pushed_at: 0,
    },
    {
      name: "박정연 🦅",
      description: "독수리 오남매, 다섯째.ᐟ.ᐟ.ᐟ.ᐟ.ᐟ",
      svn_url: "https://github.com/jyeon172",
      personal_page: "/home/P-Page",
      student_id: "202035521",
      email: "jyeon172@naver.com",
      stargazers_count: 0,
      languages_url: "",
      pushed_at: 0,
    },
  ];

  // 여기는 냅둬도 될 거 같당
  // 아니야 없애도 돼
  const [projectsArray, setProjectsArray] = useState([]);
  // const [membersArray, setMembersArray] = useState([]);

  // 이거 필요없고 위에 projectArray로 멤버 정보 채우기
  const fetchRepos = useCallback(async () => {
    let repoList = [];
    try {
      // getting all repos
      const response = await axios.get(allReposAPI);
      // slicing to the length
      repoList = [...response.data.slice(0, length)];
      // adding specified repos
      try {
        for (let repoName of specfic) {
          const response = await axios.get(`${specficReposAPI}/${repoName}`);
          repoList.push(response.data);
        }
      } catch (error) {
        console.error(error.message);
      }
      // setting projectArray
      // TODO: remove the duplication.
      setProjectsArray(repoList);
    } catch (error) {
      console.error(error.message);
    }
  }, [allReposAPI, length, specfic, specficReposAPI]);

  // 여기도 지워도 될 듯?
  useEffect(() => {
    fetchRepos();
  }, [fetchRepos]);

  return (
    <Jumbotron fluid id="projects" className="bg-light m-0">
      <Container className="">
        <h2 className="display-4 pb-5 text-center">{heading}</h2>
        <Row>
          {projectsArray.length
            ? members_info.map((project, index) => (
                <ProjectCard
                  // key={`project-card-${index}`}
                  // id={`project-card-${index}`}
                  value={project}
                />
              ))
            : dummyProjectsArr.map((project, index) => (
                <ProjectCard
                  key={`dummy-${index}`}
                  id={`dummy-${index}`}
                  value={project}
                />
              ))}
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default Project;
