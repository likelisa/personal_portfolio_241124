import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    WeChat: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('发送邮件');
  const [status, setStatus] = useState({});
  const [errors, setErrors] = useState({});

  const onFormUpdate = (category, value) => {
      setFormDetails({
        ...formDetails,
        [category]: value
      })
  }

  const validateForm = () => {
    const newErrors = {};
    
    if (!formDetails.firstName.trim()) {
      newErrors.firstName = '请输入名字';
    }
    
    if (!formDetails.lastName.trim()) {
      newErrors.lastName = '请输入姓氏';
    }
    
    if (!formDetails.email.trim()) {
      newErrors.email = '请输入邮箱';
    } else if (!/\S+@\S+\.\S+/.test(formDetails.email)) {
      newErrors.email = '请输入有效的邮箱地址';
    }
    
    if (!formDetails.WeChat.trim()) {
      newErrors.WeChat = '请输入微信号';
    }
    
    if (!formDetails.message.trim()) {
      newErrors.message = '需要在消息中简单介绍一下你自己哦';
    } else if (formDetails.message.trim().length < 10) {
      newErrors.message = '消息中需要至少10个字哦';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setStatus({ success: false, message: '请填写所有必填字段' });
      return;
    }
    
    setButtonText("发送中...");
    try {
      let response = await fetch("http://localhost:8080/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(formDetails),
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      let result = await response.json();
      if (result.code === 200) {
        setStatus({ success: true, message: '消息发送成功！' });
        setFormDetails(formInitialDetails);
        setErrors({});
      } else {
        setStatus({ success: false, message: result.message || '发送失败，请稍后重试。' });
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus({ success: false, message: '发送失败，请检查网络连接。' });
    }
    setButtonText("发送");
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Get In Touch</h2>
                <p className="contact-text">邮箱：boaai2023@163.com<br/>微信公众号：暂无<br/>全网同名：暂无</p>
                <form onSubmit={handleSubmit}>
                  <Row>
                    <Col sm={6} className="px-1">
                      <input
                        type="text"
                        value={formDetails.firstName}
                        placeholder="姓氏"
                        onChange={(e) => onFormUpdate('firstName', e.target.value)}
                      />
                      {errors.firstName && <div className="error-message">{errors.firstName}</div>}
                    </Col>
                    <Col sm={6} className="px-1">
                      <input
                        type="text"
                        value={formDetails.lastName}
                        placeholder="名字"
                        onChange={(e) => onFormUpdate('lastName', e.target.value)}
                      />
                      {errors.lastName && <div className="error-message">{errors.lastName}</div>}
                    </Col>
                    <Col sm={6} className="px-1">
                      <input
                        type="email"
                        value={formDetails.email}
                        placeholder="邮箱地址"
                        onChange={(e) => onFormUpdate('email', e.target.value)}
                      />
                      {errors.email && <div className="error-message">{errors.email}</div>}
                    </Col>
                    <Col sm={6} className="px-1">
                      <input
                        type="tel"
                        value={formDetails.WeChat}
                        placeholder="微信号"
                        onChange={(e) => onFormUpdate('WeChat', e.target.value)}
                      />
                      {errors.phone && <div className="error-message">{errors.phone}</div>}
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea rows="3" value={formDetails.message} placeholder="留言消息" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                      {errors.message && <div className="error-message">{errors.message}</div>}
                      <button type="submit"><span>{buttonText}</span></button>
                    </Col>
                    {
                      status.message &&
                      <Col>
                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                      </Col>
                    }
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
