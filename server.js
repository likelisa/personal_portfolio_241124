const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

// server used to send emails
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);

// 使用端口 8080
const PORT = 8080;
app.listen(PORT, () => console.log(`Server Running on port ${PORT}`));

const contactEmail = nodemailer.createTransport({
  host: "smtp.163.com",
  port: 465,
  secure: true,
  auth: {
    user: "boaai2023@163.com",
    pass: "VZcJ2yWWwEMJThaJ"
  }
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

router.post("/contact", (req, res) => {
  // 后端验证
  const { firstName, lastName, email, WeChat, message } = req.body;
  
  if (!firstName?.trim() || !lastName?.trim() || !email?.trim() || !WeChat?.trim() || !message?.trim()) {
    return res.status(400).json({
      code: 400,
      status: "Error",
      message: "所有字段都是必填的"
    });
  }

  // 验证邮箱格式
  const emailRegex = /\S+@\S+\.\S+/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      code: 400,
      status: "Error",
      message: "请输入有效的邮箱地址"
    });
  }

  // 验证消息长度
  if (message.trim().length < 10) {
    return res.status(400).json({
      code: 400,
      status: "Error",
      message: "消息内容至少需要10个字符"
    });
  }

  const name = firstName + lastName;
  const mail = {
    from: `"Portfolio Contact" <boaai2023@163.com>`,
    to: "boaai2023@163.com",
    subject: "Portfolio Contact Form - New Message",
    html: `
      <h3>新的联系表单提交</h3>
      <p><strong>姓名：</strong> ${name}</p>
      <p><strong>邮箱：</strong> ${email}</p>
      <p><strong>微信号：</strong> ${WeChat}</p>
      <p><strong>消息内容：</strong></p>
      <p>${message}</p>
    `,
  };

  contactEmail.sendMail(mail, (error) => {
    if (error) {
      console.error("Email sending error:", error);
      res.status(500).json({ 
        code: 500, 
        status: "Error", 
        message: error.message 
      });
    } else {
      console.log("Email sent successfully");
      res.json({ code: 200, status: "Message Sent" });
    }
  });
});

// 在所有路由之后添加
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    code: 500,
    status: "Error",
    message: "服务器内部错误"
  });
});
