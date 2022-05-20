import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
        font-family: 'Montserrat', sans-serif;
    }
    body{
        color: white;
        font-size: 1.2rem;
        font-weight: 400;
        background-color: #5577AA;
        overflow-y:scroll;
        overflow-x:hidden;
        ::-webkit-scrollbar{
            width: 16px;
        }
        ::-webkit-scrollbar-track{
            background: #ccc;
        }
        ::-webkit-scrollbar-thumb{
            background: linear-gradient(180deg, #7F41DB 0%, #022894 100%);
            border-radius: 24px;
        }
        
        /* scroll-behavior: smooth; */
    }
    a{
        color: inherit;
        font-family: inherit;
        text-decoration: none;
    }
    p{
        line-height: 2rem;
    }

    .GradientText{
        background: linear-gradient(120deg, rgb(132, 111, 244), rgb(241, 118, 116));
        background-clip: text;
        display: inline-block;
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
        font-size:1.6vw;
        font-weight:700;
        @media (max-width:992px){
          font-size:1.2rem;
            }
    }

    .Before{
        padding-left: 3rem;
        position: relative;
        transition:0.3s all;
        &::before{
            content: '';
            position: absolute;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
            width: 35px;
            height: 2px;
            background-color: #395FF6 ;
            transition:0.3s all;
        }
        @media (max-width:992px){
          padding-left: 2rem;
          transition:0.3s all;
           &::before{
            width: 20px;
           }
          }
    }

    .title-con{
        width: 50%;
        margin: 0 auto;
        text-align: center;
    }

    .gradient-cards-con{
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        grid-gap: 2rem;
    }

    .text-shadow{
  text-shadow: 0px 2px 0px rgb(0 0 0 / 30%);
}

.adjacent-post{
  & .arrow-btn{
    transition: width 300ms ease;
    width: 50px;
  }
  &:hover{
    & .arrow-btn{
      width: 60px;
    }
  }
}

.react-multi-carousel-list {
  & .arrow-btn{
    transition: width 300ms ease;
    width: 50px;
    &:hover{
      width: 60px;
    }
  }
  
}
#nprogress .bar {
  position:fixed !important;
	background: #FF9797 !important;
	height: 2px !important;
}
.ant-image-preview-img{
  position: absolute;
    top: 0;
    left: 0;
    bottom:0;
    right:0;
    margin:auto;
}

`;

export default GlobalStyle;