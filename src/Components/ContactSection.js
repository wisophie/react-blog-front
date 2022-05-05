import React from 'react'
import styled from 'styled-components'
import { SectionStyled } from '../Layouts';
import map from '../img/map.png';
import { Link } from "react-router-dom";
import beianga from '../img/beianga.png';
import nhyanliwx from '../img/nhyanliwx.jpg'

function ContactSection() {
  return (
    <ContactSectionStyled>
      <SectionStyled>
        {/* <div className="contact-info">
                    <h3 className="contact-title">
                        Contact Us
                    </h3>
                </div> */}
        <div className='footer-container'>
          <section className='footer-subscription'>
            {/* <p className='footer-subscription-heading'>
                            Join the Adventure newsletter to receive our best vacation deals
                        </p> */}
            {/* <p className='footer-subscription-text'>
                            You can unsubscribe at any time.
                        </p> */}
            {/* <div className='input-areas'>
                            <form>
                                <input
                                    className='footer-input'
                                    name='email'
                                    type='email'
                                    placeholder='Your Email'
                                />
                                <Button buttonStyle='btn--outline'>Subscribe</Button>
                            </form>
                        </div> */}
          </section>
          <div class='footer-links'>
            <div className='footer-link-wrapper'>
              <div class='footer-link-items'>
                <h2>About Us</h2>
                <Link to='/'>How it works</Link>
                <Link to='/'>Testimonials</Link>
                <Link to='/'>Careers</Link>
                <Link to='/'>Investors</Link>
                <Link to='/'>Terms of Service</Link>
              </div>
              <div class='footer-link-items'>
                <h2>Contact Us</h2>
                <Link to='/'>Contact</Link>
                <Link to='/'>Support</Link>
                <Link to='/'>Destinations</Link>
                <Link to='/'>Sponsorships</Link>
              </div>
            </div>
            <div className='footer-link-wrapper'>
              <div class='footer-link-items'>
                <h2>Videos</h2>
                <Link to='/'>Submit Video</Link>
                <Link to='/'>Ambassadors</Link>
                <Link to='/'>Agency</Link>
                <Link to='/'>Influencer</Link>
              </div>
              <div class='footer-link-items'>
                <h2>Social Media</h2>

                <Link to='/' className='wechat'>WeChat
                  <div className='wechatpic'><img src={nhyanliwx} alt="" /></div></Link>
                <Link to='/'>公众号</Link>
                <Link to='/'>TouTiao</Link>
                <Link to='/'>Weibo</Link>

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
          <div className="bg-image">
            <img src={map} alt="" />
          </div>
        </div>

      </SectionStyled>
    </ContactSectionStyled>
  )
}

const ContactSectionStyled = styled.div`
  
    /* background-color: #020C31;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 4rem 0;
    position: relative;
    z-index: 1;
    p{
        opacity: 0.5;
    } */
    
    /* .contact-title{
        position: relative;
        padding-bottom: 1rem;
        margin-bottom: 2rem;
        font-weight: 500;
        font-size: 1.5rem;
        &::before{
            content: '';
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 4rem;
            height: 2px;
            background-color: #eb3fa9;
        }
    } */
    .footer-container {
  /* background-color: #242424; */
  padding: 2rem 2rem 0rem 2rem;
  display: flex;
  position:relative;
  /* height:100%;
  width:100%; */
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'PT Sans', sans-serif;
  /* border:1px solid red; */
  &::before{
            content: '';
            position: absolute;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 50%;
            height: 1px;
            background-color: #ccc;
            opacity:0.3;
            /* border:1px dotted #ccc; */
        }
  .bg-image{
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-40%, -50%);
        z-index:-1;
        /* border:1px solid red; */
        img{
            width: 70%;
            height:100%;
            opacity: 0.2;
        }
    }
}

.footer-subscription {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  margin-bottom: 24px;
  /* padding: 10px; */
  color: #fff;
}

.footer-subscription > p {
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
}

.footer-subscription-heading {
  margin-bottom: 24px;
  font-size: 24px;
}

.footer-subscription-text {
  margin-bottom: 24px;
  font-size: 20px;
}

.footer-input {
  padding: 8px 20px;
  border-radius: 2px;
  margin-right: 10px;
  outline: none;
  border: none;
  font-size: 18px;
  margin-bottom: 16px;
  border: 1px solid #fff;
}

.footer-links {
  width: 100%;
  max-width: 1000px;
  display: flex;
  justify-content: center;
  /* border:1px solid red; */
}

.footer-link-wrapper {
  display: flex;
}

.footer-link-items {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  font-size:1rem;
  position:relative;
}
.wechat{
  &:hover{
    .wechatpic{
      width:8rem;
  height:8rem;
    opacity:1
  }
    
  }
.wechatpic{
  position:absolute;
  width:0;
  height:0;
  background-color:#fff;
  top:3.5rem;
  left:6rem;
  border-top-right-radius:.5rem;
  border-bottom-right-radius:.5rem;
  border-bottom-left-radius:.5rem;
  /* visibility:hidden; */
  opacity:0;
  transition:0.3s;
  /* overflow:hidden; */
  img{
    width: 100%;
    height: 100%;
    border-top-right-radius:.5rem;
  border-bottom-right-radius:.5rem;
  border-bottom-left-radius:.5rem;
  }
  &::before{
    content:'';
    position:absolute;
    width: 0;
    height: 0;
    top:0;
    left:-1rem;
    border-top: 1rem solid #fff;
    border-left: 1rem solid transparent;
    
  }
  
}
}


.footer-link-items h2 {
    font-size:1.5rem;
  margin-bottom: 16px;
  font-weight:600;
}

.footer-link-items > h2 {
  color: #fff;
  
}
.footer-link-items Link {
  font-size: 0.5rem;
}

.footer-link-items a {
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
}

.footer-link-items a:hover {
  color: #ccc;
  transition: 0.3s ease-out;
}

.footer-email-form h2 {
  margin-bottom: 2rem;
}

.footer-input::placeholder {
  color: #b1b1b1;
}

/* Social Icons */
.social-icon-link {
  color: #fff;
  font-size: 24px;
}

.social-media {
  max-width: 1000px;
  width: 100%;
}

.social-media-wrap {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 90%;
  max-width: 1000px;
  margin: 10px auto 0 auto;
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

.website-rights {
  color: #fff;
  margin-bottom: 16px;
}

@media screen and (max-width: 820px) {
  .footer-links {
    padding-top: 2rem;
  }

  .footer-input {
    width: 100%;
  }

  .btn {
    width: 100%;
  }

  .footer-link-wrapper {
    flex-direction: column;
  }

  .social-media-wrap {
    flex-direction: column;
  }
}

@media screen and (max-width: 768px) {
}

`;

export default ContactSection;
