import React, { useState } from 'react'
import styled from 'styled-components';
import beianga from '../img/beianga.png';
import nhyanliwx from '../img/nhyanliwx.jpg'

import { Link } from "react-router-dom";
export default function Login() {
  const [click, setClick] = useState(false);
  const wxloginshow = () => {
    setClick(!click)
  }
  return (
    <Loginstyled>
      <div className='login-wrap'>
        <div className='login-box'>
          <div className='login-title'>
            <h2>Login</h2>
            <div className='wxlogo'>第三方账号:
              <svg onClick={wxloginshow} t="1651940703850" className='icon' viewBox="0 0 1756 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1928" width="35" height="35"><path d="M615.497143 330.057143c0 22.674286 18.285714 40.96 40.96 40.96s40.96-18.285714 40.96-40.96-18.285714-40.96-40.96-40.96S615.497143 307.382857 615.497143 330.057143L615.497143 330.057143z" p-id="1929" fill="#00DB00"></path><path d="M934.582857 541.805714c0 17.737143 14.445714 32.182857 32.182857 32.182857s32.182857-14.445714 32.182857-32.182857-14.445714-32.182857-32.182857-32.182857C948.845714 509.805714 934.582857 524.068571 934.582857 541.805714z" p-id="1930" fill="#1afa29"></path><path d="M824.502857 330.057143c0 22.674286 18.285714 40.96 40.96 40.96s40.96-18.285714 40.96-40.96-18.285714-40.96-40.96-40.96S824.502857 307.382857 824.502857 330.057143L824.502857 330.057143z" p-id="1931" fill="#1afa29"></path><path d="M1361.371429 167.862857c0-79.542857-65.462857-142.262857-142.262857-142.262857L533.577143 25.6C453.851429 25.6 391.314286 91.062857 391.314286 167.862857l0 688.457143c0 79.542857 65.462857 142.262857 142.262857 142.262857l688.457143 0c79.542857 0 142.262857-65.462857 142.262857-142.262857L1361.371429 167.862857zM755.931429 674.377143c-36.754286 0-66.377143-7.497143-103.314286-14.811429L549.668571 711.314286l29.44-88.685714c-73.874286-51.565714-117.942857-118.125714-117.942857-199.131429 0-140.251429 132.754286-250.88 294.948571-250.88 145.005714 0 272.091429 88.32 297.691429 207.177143-9.325714-0.914286-18.834286-1.645714-28.342857-1.645714-140.068571 0-250.697143 104.411429-250.697143 233.325714 0 21.394286 3.291429 42.057143 9.142857 61.805714C774.4 674.011429 765.257143 674.377143 755.931429 674.377143zM1190.948571 777.691429l22.125714 73.691429-80.822857-44.251429c-29.44 7.314286-59.062857 14.811429-88.502857 14.811429-140.251429 0-250.88-95.817143-250.88-213.942857 0-117.942857 110.445714-213.942857 250.88-213.942857 132.571429 0 250.514286 96.182857 250.514286 213.942857C1294.262857 674.377143 1250.194286 733.257143 1190.948571 777.691429z" p-id="1932" fill="#1afa29"></path><path d="M1095.131429 541.805714c0 17.737143 14.445714 32.182857 32.182857 32.182857 17.737143 0 32.182857-14.445714 32.182857-32.182857s-14.445714-32.182857-32.182857-32.182857C1109.577143 509.805714 1095.131429 524.068571 1095.131429 541.805714z" p-id="1933" fill="#1afa29"></path></svg>
              <svg t="1651941262659" className='icon' viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4586" width="27" height="27"><path d="M851.4 590.193c-22.196-66.233-90.385-90.422-105.912-91.863-15.523-1.442-29.593-9.94-19.295-27.505 10.302-17.566 29.304-68.684-7.248-104.681-36.564-36.14-116.512-22.462-173.094 0.866-56.434 23.327-53.39 7.055-51.65-8.925 1.89-16.848 32.355-111.02-60.791-122.395C311.395 220.86 154.85 370.754 99.572 457.15 16 587.607 29.208 675.873 29.208 675.873h0.58c10.009 121.819 190.787 218.869 412.328 218.869 190.5 0 350.961-71.853 398.402-169.478 0 0 0.143-0.433 0.575-1.156 4.938-10.506 8.71-21.168 11.035-32.254 6.668-26.205 11.755-64.215-0.728-101.66z m-436.7 251.27c-157.71 0-285.674-84.095-285.674-187.768 0-103.671 127.82-187.76 285.674-187.76 157.705 0 285.673 84.089 285.673 187.76 0 103.815-127.968 187.768-285.673 187.768z" fill="#E71F19" p-id="4587"></path><path d="M803.096 425.327c2.896 1.298 5.945 1.869 8.994 1.869 8.993 0 17.7-5.328 21.323-14.112 5.95-13.964 8.993-28.793 8.993-44.205 0-62.488-51.208-113.321-114.181-113.321-15.379 0-30.32 3.022-44.396 8.926-11.755 4.896-17.263 18.432-12.335 30.24 4.933 11.662 18.572 17.134 30.465 12.238 8.419-3.46 17.268-5.33 26.41-5.33 37.431 0 67.752 30.241 67.752 67.247 0 9.068-1.735 17.857-5.369 26.202a22.832 22.832 0 0 0 12.335 30.236l0.01 0.01z" fill="#F5AA15" p-id="4588"></path><path d="M726.922 114.157c-25.969 0-51.65 3.744-76.315 10.942-18.423 5.472-28.868 24.622-23.5 42.91 5.509 18.29 24.804 28.657 43.237 23.329a201.888 201.888 0 0 1 56.578-8.064c109.253 0 198.189 88.271 198.189 196.696 0 19.436-2.905 38.729-8.419 57.16-5.508 18.289 4.79 37.588 23.212 43.053 3.342 1.014 6.817 1.442 10.159 1.442 14.943 0 28.725-9.648 33.37-24.48 7.547-24.906 11.462-50.826 11.462-77.175-0.143-146.588-120.278-265.813-267.973-265.813z" fill="#F5AA15" p-id="4589"></path><path d="M388.294 534.47c-84.151 0-152.34 59.178-152.34 132.334 0 73.141 68.189 132.328 152.34 132.328 84.148 0 152.337-59.182 152.337-132.328 0-73.15-68.19-132.334-152.337-132.334zM338.53 752.763c-29.454 0-53.39-23.755-53.39-52.987 0-29.228 23.941-52.989 53.39-52.989 29.453 0 53.39 23.76 53.39 52.989 0 29.227-23.937 52.987-53.39 52.987z m99.82-95.465c-6.382 11.086-19.296 15.696-28.726 10.219-9.43-5.323-11.75-18.717-5.37-29.803 6.386-11.09 19.297-15.7 28.725-10.224 9.43 5.472 11.755 18.864 5.37 29.808z" fill="#040000" p-id="4590"></path></svg>
            </div>
          </div>
          <div className={click ? 'login-wxlogin' : 'login-norm'}>
            <div className='login-content'></div>
            <div className='login-reg'>Don't have an account?<Link to='/' className='Register'>Register</Link> now
            </div>
            <div onClick={wxloginshow} className='login-wxback'>Cancel</div>
          </div>

        </div>
      </div>

      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              THINK
              <i class='fab fa-typo3' />
            </Link>
          </div>
          {/* <small class='website-rights'>

                            </small> */}
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
      <footer>
        <p>Copyright ©Yan Li. All Rights Reserved</p>
        <p><a href="https://beian.miit.gov.cn">浙ICP备2022010356号-1</a></p>
        <div className="ga">
          <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33022602000595">
            <img src={beianga} />
            <p>浙公网安备33022602000595号</p>
          </a>
        </div>
      </footer>
    </Loginstyled>
  )
}
const Loginstyled = styled.div`
height:100vh;
    /* position:relative; */
/* position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 80%; */
    padding-top:10vh;
    .login-wrap{
      width: 100%;
      /* background-color:#fff; */
      padding:6.5rem 0 6rem 0;
      .login-box{
        width:80%;
        max-width: 500px;
        height: 400px;
        padding:2rem;
        border-radius:20px;
        margin:0 auto;
        background-color:#fff;
        z-index:10;
        border:1px solid #ccc;
        .login-title{
          display:flex;
          justify-content:space-between;
          align-items:center;
            color:black;
            font-size:1.5rem;
            font-weight:500;
            .wxlogo{
              display:flex;
              justify-content:space-between;
          align-items:center;
              font-size:1rem;
              font-weight:400;
              .icon{
                cursor: pointer;
              }
            }
        }
        .login-wxlogin{
          position:relative;
          
          height:90%;
          padding:2rem;
          background:url(${nhyanliwx}) no-repeat center center;
          background-size:contain;
          .login-wxback{
            position:absolute;
            left:42%;
            bottom:-5%;
            height:10%;
          color:black;
          text-align:center;
          font-size:1.2rem;
          cursor: pointer;
          }
          .login-content{
            display:none;
          }
          .login-reg{
            display:none;
          }
        }
        .login-norm{
          height:90%;
          border:1px solid red;
          .login-wxback{
            display:none;
          }
        }
        .login-content{
          width:100%;
          height:50%;
          margin:2rem 0;
          border:1px solid red;
        }
        .login-reg{
          height:10%;
          color:black;
          font-size:1rem;
          border:1px solid red;
          .Register{
            
              color:blue;
              font-weight:500;
          }
        }
      }
    }
  
  


  .social-media {
    
  max-width: 1000px;
  width: 100%;
  margin:0 auto;
}

.social-media-wrap {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 90%;
  max-width: 1000px;
  margin: 15px auto 0 auto;
  /* border:1px solid red; */

}

.social-icons {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
  /* border:1px solid red; */

}

.social-logo {
  color: #fff;
  justify-self: start;
  margin-left: 10px;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  /* border:1px solid red; */
}
  footer{
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        background-color: #020A27;
        padding: 2rem 1rem;
        border-top: 1px solid rgba(255, 255, 255, 0.08);
        p{
            text-align: center;
            opacity: 0.7;
            &:nth-child(1){
                font-size:1.1rem;
            }
            &:nth-child(2){
                font-size:0.8rem;
            }
        }
        .ga{
           width:215px;
           
            /* border:1px solid red; */
            a{
                display:flex;
                /* border:1px solid red; */
                img{
                    height:20px;
                    width:20px;
                }
                
                p{
                height:20px;
                line-height:20px;
                margin: 0px 0px 0px 3px; 
                color:#939393;
            }
            }
            
        }
        
    }
    @media screen and (max-width: 820px) {
  
  .footer-link-wrapper {
    flex-direction: column;
  }

  .social-media-wrap {
    flex-direction: column;
  }
}
`