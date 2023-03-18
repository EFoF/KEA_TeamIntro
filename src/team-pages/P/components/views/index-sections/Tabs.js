import React from "react";
// reactstrap components

import {
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components

function Tabs() {
  const [iconPills, setIconPills] = React.useState("1");
  const [pills, setPills] = React.useState("1");
  return (
    <>
      <div id="memo"></div>
      <div className="section section-tabs">
        <Container>
          <div className="text-warning">
            <h3 className="title">Memo</h3>
          </div>
          <Row>
            <Col className="ml-auto mr-auto" md="10" xl="6">
              <p className="category">For ME</p>
              <Card>
                <CardHeader>
                  <Nav className="justify-content-center" role="tablist" tabs>
                    <NavItem>
                      <NavLink
                        className={iconPills === "1" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setIconPills("1");
                        }}
                      >
                        <i className="now-ui-icons objects_umbrella-13"></i>
                        Profile
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={iconPills === "2" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setIconPills("2");
                        }}
                      >
                        <i className="now-ui-icons shopping_cart-simple"></i>
                        Hobby
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={iconPills === "3" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setIconPills("3");
                        }}
                      >
                        <i className="now-ui-icons shopping_shop"></i>
                        Messages
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={iconPills === "4" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setIconPills("4");
                        }}
                      >
                        <i className="now-ui-icons ui-2_settings-90"></i>
                        To Do
                      </NavLink>
                    </NavItem>
                  </Nav>
                </CardHeader>
                <CardBody>
                  <TabContent
                    // className="text-center"
                    activeTab={"iconPills" + iconPills}
                  >
                    <TabPane tabId="iconPills1">
                      <p>
                        가천대학교 인공지능전공에 재학중인 20학번 박정연입니다.
                        <br />
                        <br />
                        &nbsp; - Github : https://github.com/jyeon172
                        <br />
                        &nbsp; - E-Mail : jyeon172@naver.com
                      </p>
                    </TabPane>
                    <TabPane tabId="iconPills2">
                      <p>
                        저는 혼자 산책하거나 놀러다니는 것을 좋아합니다.
                      </p>
                    </TabPane>
                    <TabPane tabId="iconPills3">
                      <p>
                        안녕하세요! <br />
                        저는 가천대학교 인공지능전공에 재학중인 박정연입니다. <br />
                      </p>
                    </TabPane>
                    <TabPane tabId="iconPills4">
                      <p>
                        1. 개인 페이지 마무리
                        <br />
                        2. 메인 페이지 마무리
                        <br />
                        3. 받은 책 1회독 (중간고사 전 까지)
                      </p>
                    </TabPane>
                  </TabContent>
                </CardBody>
              </Card>
            </Col>
            <Col className="ml-auto mr-auto" md="10" xl="6">
              <p className="category">For OTHERS</p>
              <Card>
                <CardHeader>
                  <Nav
                    className="nav-tabs-neutral justify-content-center"
                    data-background-color="blue"
                    role="tablist"
                    tabs
                  >
                    <NavItem>
                      <NavLink
                        className={pills === "1" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setPills("1");
                        }}
                      >
                        Home
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={pills === "2" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setPills("2");
                        }}
                      >
                        To Be Happy
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={pills === "3" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setPills("3");
                        }}
                      >
                        Messages
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={pills === "4" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setPills("4");
                        }}
                      >
                        Quotes
                      </NavLink>
                    </NavItem>
                  </Nav>
                </CardHeader>
                <CardBody>
                  <TabContent
                    // className="text-center"
                    activeTab={"pills" + pills}
                  >
                    <TabPane tabId="pills1">
                      <p>
                        안녕하세요!
                        <br />
                      </p>
                    </TabPane>
                    <TabPane tabId="pills2">
                      <p>
                      </p>
                    </TabPane>
                    <TabPane tabId="pills3">
                      <p>
                      </p>
                    </TabPane>
                    <TabPane tabId="pills4">
                      <p>
                      </p>
                    </TabPane>
                  </TabContent>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Tabs;
