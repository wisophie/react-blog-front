import React from 'react'
import projectspic from '../img/img-4.jpg';
import styled from 'styled-components';
export default function Contact() {
  return (
    <ContactStyled>
      <div className="Cv">
        <main className="page">
          <section>
            <h1 className="f-s-18 f-w-900 m-b-20">联系方式</h1>
            <div className="boxes default m-b-20">
              <div className="box bg-gray-lightest p-t-0 p-b-0">
                <div className="row">
                  <div className="col-4 p-t-10 p-b-10">● 手机：18968351006</div>
                  <div className="col-4 p-t-10 p-b-10">● Email：468179220@qq.com</div>
                  <div className="col-4 p-t-10 p-b-10">● 网站：www.wispw.com</div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <h1 className="f-s-18 f-w-900 m-b-20">个人信息</h1>
            <div className="boxes default m-b-20">
              <div className="box bg-gray-lightest p-t-0 p-b-0">
                <div className="row">
                  <div className="col-4 p-t-10 p-b-10">● 严立 | 男 | 1987</div>
                  <div className="col-4 p-t-10 p-b-10 ">● 本科 | 浙江工业大学 | 信息与计算科学</div>
                  <div className="col-4 p-t-10 p-b-10 ">● 前端开发 | 3 年工作经验</div>
                </div>
                <div className="row">
                  <div className="col-4 p-t-10 p-b-10">● 期望职位：Web高级前端</div>
                  <div className="col-4 p-t-10 p-b-10 ">● 期望工作方式：远程</div>
                </div>
              </div>
              <div className="box bg-gray-lightest">
                ● Github：
                <a href="https://github.com/Redspitee" target="_blank">https://github.com/Redspitee</a>
              </div>
              <div className="box bg-gray-lightest">
                ● Gitee：
                <a href="https://gitee.com/redspite" target="_blank">https://gitee.com/redspite</a>
              </div>
              <div className="box bg-gray-lightest">
                ● 技术博客：
                <a href="https://www.redspite.com" target="_blank">https://www.redspite.com</a>
              </div>
            </div>
          </section>
          <section>
            <h1 className="f-s-18 f-w-900 m-b-20">开源项目</h1>
            <div className="boxes default m-b-20">
              <div className="box bg-gray-lightest">
                ●
                <a href="https://github.com/Redspitee/blog" target="_blank"> 个人博客 - 使用 React + Redux + Ts + Antd + Koa 构建的个人网站，个人简历、文章及留言版展示</a>
              </div>
              <div className="box bg-gray-lightest">
                ●
                <a href="https://github.com/Redspitee/react-go-top" target="_blank"> react-go-top - 基于react的回到顶部插件,发布在npm的插件包 </a>
              </div>
              <div className="box bg-gray-lightest">
                ●
                <a href="https://github.com/Redspitee/Cv" target="_blank"> 早期博客 - 纯静态页面,百度SEO排名较靠前</a>
              </div>
            </div>
          </section>
          <section>
            <h1 className="f-s-18 f-w-900 m-b-20">技能掌握</h1>
            <div className="boxes default m-b-20">
              <div className="box bg-gray-lightest">
                ● 前端框架：Vue/React/微信小程序
              </div>
              <div className="box bg-gray-lightest">
                ● 前端工具：Webpack/Sass/Less/Cordova
              </div>
              <div className="box bg-gray-lightest">
                ● 后端框架：NodeJS/Koa
              </div>
              <div className="box bg-gray-lightest">
                ● 数据库相关：MongoDB
              </div>
              <div className="box bg-gray-lightest">
                ● 版本管理工具：Git/GitLab
              </div>
            </div>
          </section>
          <section>
            <h1 className="f-s-18 f-w-900 m-b-20">工作经历</h1>
            <div className="boxes default m-b-20">
              <div className="box bg-gray-lightest">
                ● 成都深珀数据公司 （ 2016 年 10 月 ~ 至今 ）
              </div>
              <div className="box bg-gray-lightest">
                <p className="m-t-0"><b>主导混合式移动APP、微信小程序、后台管理系统开发</b></p>
                <p>- 前端技术选型、架构设计</p>
                <p>- 项目优化，代码精简，高度组件化、模块化</p>
                <p>- 涉及功能：token加密、用户权限管理、全局状态与路由管理、树状数据管理、列表数据展示、表单验证、关系图示、原生接口对接等</p>
              </div>
            </div>

            <div className="boxes default m-b-20">
              <div className="box bg-gray-lightest">
                ● 成都清风竞技公司 （ 2016 年 3 月 ~ 2016 年 10 月 ）
              </div>
              <div className="box bg-gray-lightest">
                <p className="m-t-0"><b>官网页面更新与维护</b> </p>
                <p> - JQ + CSS3 + Bootstrap + Html5</p>
                <p>- 负责官网静态页开发及简单交互</p>
                <p>- 负责网站移动端、各浏览器适配网页适配</p>
              </div>
            </div>
            ......
          </section>
        </main>
      </div>
    </ContactStyled>

  )
}

const ContactStyled = styled.div`
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    
    padding-top:10vh;
  .Contact {
    display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-size: 3rem;
  background-image: url(${projectspic});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  color: #fff;
}
.page {
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
  box-shadow: 1px 1px 8px rgba(0, 0, 0, .15);
  background-color: #fff;
  color: #3f1c1c;
  font-size: 14px;
  border-radius:10px;
  .m-b-20 {
    margin-bottom: 20px !important;
  }

  .f-s-18 {
    font-size: 18px !important;
  }

  .f-w-900 {
    font-weight: 900 !important;
  }

  .boxes.default {
    // border-color: #ddd;
  }

  .boxes>.box:last-child {
    border-bottom-left-radius: 3px !important;
    border-bottom-right-radius: 3px !important;
  }

  .boxes>.box:first-child {
    border-top-left-radius: 3px !important;
    border-top-right-radius: 3px !important;
  }

  .boxes>.box {
    border-width: 0;
    border-radius: 0;
    margin-bottom: 0;
    // border-bottom: 1px solid #ddd;
  }
  .boxes > .box:last-child{
    border-bottom: none;
  }

  .bg-gray-lightest {
    background-color: #F7F3EE;
  }

  .p-b-0 {
    padding-bottom: 0px !important;
  }

  .p-t-0 {
    padding-top: 0px !important;
  }

  .box {
    padding: 10px 15px;
    margin-bottom: 15px;
    // border: 1px solid #ddd;
    border-radius: 4px;
    background-color: #fff;
  }

  .row {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-left: -15px;
    margin-right: -15px;
  }

  .boxes {
    border: 2px solid transparent;
    border-radius: 5px;
    margin-bottom: 15px;
  }

  h1 {
    margin-left: -20px;
    padding-left: 15px;
    border-left: 5px solid #e38fa9;
    text-align: left;
    font-size: 14px;
  }

  .border {
    position: relative;
  }
/* 
  .border:before {
    content: '';
    position: absolute;
    top: 0;
    left: -2px;
    width: 2px;
    height: 100%;
    // background: #ddd;
    // border-left: 2px solid #ddd !important;
  } */

  .col,
  .col-1,
  .col-2,
  .col-3,
  .col-4,
  .col-5,
  .col-6,
  .col-7,
  .col-8,
  .col-9,
  .col-10,
  .col-11,
  .col-12 {
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-left: 15px;
    padding-right: 15px;
  }

  section a {
    color: #666;
  }

  section a:hover {
    color: #333;
    text-decoration: underline;
  }

  .p-b-10 {
    padding-bottom: 10px !important;
  }

  .p-t-10 {
    padding-top: 10px !important;
  }
.flex-p{
  display: flex;
  flex:1;
}
p.flex-p span:first-child {
  color: #d56386;
  min-width: 5em;
}
  .border {
    position: relative;
  }

  .bg-gray-lightest {
    background-color: #f5f5f5;
  }

  @media (min-width: 576px) {
    .col-4 {
      -webkit-box-flex: 0;
      -ms-flex: 0 0 33.33333%;
      flex: 0 0 33.33333%;
      max-width: 33.33333%;
    }
  }

}
`