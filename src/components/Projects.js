import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  // 为每个标签页定义6个项目的数组
  const productProjects = [  // Tab1 的项目
    {
      title: "产品项目1",
      description: "产品描述1",
      imgUrl: projImg1,
    },
    {
      title: "产品项目2",
      description: "产品描述2",
      imgUrl: projImg2,
    },
    {
      title: "产品项目3",
      description: "产品描述3",
      imgUrl: projImg3,
    },
    {
      title: "产品项目4",
      description: "产品描述4",
      imgUrl: projImg1,
    },
    {
      title: "产品项目5",
      description: "产品描述5",
      imgUrl: projImg2,
    },
    {
      title: "产品项目6",
      description: "产品描述6",
      imgUrl: projImg3,
    },
  ];

  const aiProjects = [  // Tab2 的项目
    {
      title: "AI项目1",
      description: "AI描述1",
      imgUrl: projImg1,
    },
    {
      title: "AI项目2",
      description: "AI描述2",
      imgUrl: projImg2,
    },
    {
      title: "AI项目3",
      description: "AI描述3",
      imgUrl: projImg3,
    },
    {
      title: "AI项目4",
      description: "AI描述4",
      imgUrl: projImg1,
    },
    {
      title: "AI项目5",
      description: "AI描述5",
      imgUrl: projImg2,
    },
    {
      title: "AI项目6",
      description: "AI描述6",
      imgUrl: projImg3,
    },
  ];

  const consultingProjects = [  // Tab3 的项目
    {
      title: "咨询项目1",
      description: "咨询描述1",
      imgUrl: projImg1,
    },
    {
      title: "咨询项目2",
      description: "咨询描述2",
      imgUrl: projImg2,
    },
    {
      title: "咨询项目3",
      description: "咨询描述3",
      imgUrl: projImg3,
    },
    {
      title: "咨询项目4",
      description: "咨询描述4",
      imgUrl: projImg1,
    },
    {
      title: "咨询项目5",
      description: "咨询描述5",
      imgUrl: projImg2,
    },
    {
      title: "咨询项目6",
      description: "咨询描述6",
      imgUrl: projImg3,
    },
  ];


  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Gallery</h2>
                <p>这个展廊陈列了一些我和合作伙伴一起成功共创的典型项目，通过浏览这些项目，您可以大致了解我的工作内容和风格。期待与您的进一步联系！</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">产品设计</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">AI大模型</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">咨询服务</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                    <p className="tab-description">
                      正在整理，敬请期待
                    </p>
                      <Row>
                        {
                          productProjects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p className="tab-description">
                        正在整理，敬请期待
                      </p>
                      <Row>
                        {
                          aiProjects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p className="tab-description">
                        正在整理，敬请期待
                      </p>
                      <Row>
                        {
                          consultingProjects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
