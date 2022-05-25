import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../Layouts';
import BlogsSection from './BlogsSection';
import ContactSection from './ContactSection';
import DemonstrationSection from './DemonstrationSection';
import GradientCardsSection from './GradientCardsSection';
import MainTitle from './MainTitle';
import SellerCard from './SellerCard';
import beianga from '../img/beianga.png';
import reactspring from '../img/reactspring.png';

import { Tooltip } from 'antd';
function BodyContent() {
    return (
        <BodyContentStyled>
            <InnerLayout>
                <MainTitle title={'Top Rank This Month'} subtitle={'All Projects'} />

                <SellerCard />

                <BlogsSection />
                <GradientCardsSection />
                <DemonstrationSection />
            </InnerLayout>
            <ContactSection />
            <footer>
                {/* <p>Copyright ©Yan Li. All Rights Reserved</p> */}
                <div className='logo'>
                    <Tooltip title="React" overlayClassName='tooltips'><img src="data:image/png;base64,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" alt="" /></Tooltip>
                    <Tooltip title="TypeScript" overlayClassName='tooltips'><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAk1BMVEUAAAAAecwAeMsAessAe80AeswAes0AeswAeswAes0AeswAe80AeswAe80Ae80AeswAeswAes0AeswAeswAec0Ae8wAeswAes0Aes0AeswAeswAec0AessAe80Afc8AeswAeswAes0AecwAe80AeswAes0Ad8gAedAAeswAeswAeswAfc4AeswAes0AeswAfMwAesyZUHhbAAAAMHRSTlMAv0CAHUqE1dCemWxkYE/52bqPdDMjybR/eVlFOCkF6+bGqaRxVBcN8d2WE+Guii5cefTEAAAD2klEQVR42uzPSWoCURRA0ZdCrUjFmMYQFMF2YIPi/lfnXCytwftwkXt2cOLyIozQGKExQmOExgiNERojNEZojNAYoTFCY4TGCI0RGiM0RmiM0BihMUJjhMYIjREaIzRGaIzQGKExQmOExgiNERojNEZojNAYoTFCY4TGCI0RGiM0RmiM0BihMUJjhMYIDS7yNZz+NqPZZ7+abc+b73pRIDKuUrxdWp1Gf3Hr+PGfHdlFirbI8mcS9/WaOjWyKBo59KLdcTBOjCwLRlb9eGyyzovsy0WG8dw0LVIXiwyiiyYr8l4qUkU386TIqlCkis5yItd27kO3USiIwvChuuGKOzbuNU5y3v/pVtlsE/WCdlczkb83+DUSBuYa69+E9GBuLTjEQRU9sSEWqgmlhtioyJIZ0kJVnswQG5W1JIa8oip3JHIiXWS5RKcgXAS9MVKWU/6FECcXUpxcf4a4SJvM+FM7kTIZkfVC6s/KooFp6W+enxiH0BAHKW7iGWr4exx3UmpIaHBNOuJTt0m5IR2TG9wlAKzbpOCQLpIcpvS97+MQHbI0CeHmYxyyQ3pGIWxQekiEpIBZxId4SLJ1hnSRslEZckTKXWWIj7SNxpA2MswUhrwii68vpPGCLJGlLYQBsoVbZSFD5DgvBqpCOEaeS6epKcRHge5QT0gDhaKDlhD6KDYebXSE8IQS7kL+bfyHgYsyceehIIQHo/eLCkI4hwF7Jj/ErATBQHyIYclLS3wI5zFMOOJDOO3BRE98CNl2YSC+iQ/hI4xhYCo+hGx2YWAgP4Qc9lDK3SgIIWcnlLH7GkJIa4kSvo4Qcheg0KSvJIRsdi4ocFcTQg4WZ+RaKQoht84EefaaQsjraI1snq4Qsp9z43LWFkIOTsjSUBeS87CyVxiSWbLQGMIIKbbKkANSLkJDtix0RorMkLfoyiK2jpDDGAhZpKMhxOrhQ5sFuvJDBh38MGS+tfSQvv+CX27Mc4PwkNa72V8RRrIvv0PP8KjADmmemJBbgLSF8cL0TUrI4R1ZAqbsV8iwkxLSjJFpcrQSF2fpzyNH5HE71uBKktuZc0K2k5yQxxlF4snKRb62nBC2UN9Y1FuUOWpriwphhJpsYa9M+6hpKCyEU9RylLdWaMao7iRx0XNbo6q1zNXb1UM1F7HLUCdGBbbg9fTOg7FQ9p797QIjniX95EMzdFFq1ZJ/qIa8tqOSaewVHHP6ZB1XucOYT8n/EuKkWKzhsQ8mSDgvR1ON3w5if9vYzQ533x/dW/vXYVPrR5C+zNecniH8Ip4h0jxDpHmGSPMMkeYZIs0zRJpvMd8EbW7RJgkAAAAASUVORK5CYII=" alt="" /></Tooltip>
                    <Tooltip title="Ant Design" overlayClassName='tooltips'><img src="data:image/png;base64,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" alt="" /></Tooltip>
                    <Tooltip title="Nodejs" overlayClassName='tooltips'><img src='http://img.nodejs.cn/logo.svg' alt="" /></Tooltip>
                    <Tooltip title="Reactspring" overlayClassName='tooltips'><img src={reactspring} alt="" /></Tooltip>
                </div>
                <p><a href="https://beian.miit.gov.cn">浙ICP备2022010356号-1</a></p>
                <div className="ga">
                    <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33022602000595">
                        <img src={beianga} alt='' />
                        <p>浙公网安备33022602000595号</p>
                    </a>
                </div>
            </footer>
        </BodyContentStyled >
    )
}

const BodyContentStyled = styled.div`
	height:100vh;
    position:relative;
    /* border:2px solid red; */
    &::before{
        content:"";
        position:absolute;
        top:4%;
        left:0;
        width: 100%;
        height:100%;
        background:linear-gradient(#2193b0,#6dd5ed);
        clip-path:circle(24% at right 60%);
        /* z-index:10; */
       }
    &::after{
        content:"";
        position:absolute;
        top:0;
        left:0;
        width: 100%;
        height:100%;
        background:linear-gradient(#ee9ca7,#ffdde1);
        clip-path:circle(25% at left 25%);
        z-index:-1;
   
    }
    
    

    footer{
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        background-color: #020A27;
        padding: 2rem 1rem;
        border-top: 1px solid rgba(255, 255, 255, 0.08);
        
        .logo{
            display: flex;
            .tooltips{
                .ant-tooltip-content{
                    .ant-tooltip-inner{
                    background-color: rgba(0, 0, 0, 1) !important;
                    color: red !important;
                }    
                }
                
            }
            img{
            padding: 8px;
            height: 40px;
        }
        }
        
        p{
            text-align: center;
            opacity: 0.7;
            &:nth-child(1){
                font-size:1.2rem;
            }
            &:nth-child(2){
                font-size:0.8rem;
            }
        }
        .ga{
           width:230px;
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
`;

export default BodyContent;
