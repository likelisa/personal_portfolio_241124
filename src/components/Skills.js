import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import meter4 from "../assets/img/meter4.svg";
import meter5 from "../assets/img/meter5.svg";
import meter6 from "../assets/img/meter6.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const skillsData = [
    {
      image: meter1,
      title: "AI解决方案数",
      description: "已完成16个AI应用解决方案，涵盖Saas、金融、电子设备等多个领域"
    },
    {
      image: meter2,
      title: "大模型教学场次",
      description: "累计完成11场大模型应用培训，覆盖多个头部央国企"
    },
    {
      image: meter3,
      title: "Prompt交付数",
      description: "设计并优化117个高质量Prompt，涵盖客服、智能家居、AI搜索、数据分析等多个场景"
    },
    {
      image: meter4,
      title: "产品设计数",
      description: "设计2个商业产品，包括家居独立站、跨境电商平台等"
    },
    {
      image: meter5,
      title: "跨境电商咨询量",
      description: "提供67次跨境电商的咨询服务，专注于个人副业发展和早期起号的跨境电商服务"
    }
  ];

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>里程碑点</h2>
                        <p><strong>大模型、产品设计、跨境电商、留学咨询、就业咨询</strong><br/><br/><strong>这里通过里程碑的方式记录了我在最擅长的领域经历，期待可以为你提供帮助或合作</strong></p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            {skillsData.map((skill, index) => (
                                <div className="item" key={index}>
                                    <div className="skill-item">
                                        <img src={skill.image} alt={skill.title} />
                                        <h5>{skill.title}</h5>
                                        <div className="skill-description">
                                            <p>{skill.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
