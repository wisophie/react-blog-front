import React, { useContext } from 'react'
import styled from 'styled-components';
import iphone from '../../img/browser_big.png';
import { MaskContext } from '../../App';
const Mask = () => {
  const { maskclick2, setMaskclick2, url } = useContext(MaskContext)
  return (
    <Maskstyled>
      <div>
        <div className={maskclick2 ? 'mask' : ''}>
        </div>
        <div className={maskclick2 ? 'z' : 'z active'} style={{ width: '380px', height: '690px' }}>
          <div className='iframewrap'>
            <iframe title="navigation" className='iframe' scrolling="auto" width='343' height='482' src={url} style={{ background: 'white', }} ></iframe>
          </div>

          <div onClick={() => setMaskclick2(!maskclick2)} className='close'></div>
        </div>
      </div>

    </Maskstyled>


  )
}

const Maskstyled = styled.div`
  .mask{
    position:absolute;
  width:100%;
  height:200vh;
  top:0;
  left:0;
  background-color:rgba(0, 0, 0, 0.8);
  z-index:100;
  transition:.2s;
  }
  
  .z{
        /* margin:0 auto; */
        /* display:none; */
        position:fixed;
        top: 15vh;
        left: 50%;
        transform: translateX(-50%);
        background: url(${iphone}) no-repeat 0 0;
        z-index:1220 ;
        transition:.4s;
        overflow: hidden;
        .iframewrap{
          margin:0 auto;
          margin:91px 0 0 15px;
          border-radius:4px;
          width:343px;
          height:484px;
          /* overflow: hidden; */
          /* border:1px solid red; */
        }
        .iframe{
            margin:0 auto;
            /* margin-top: 115px; */
            /* margin:115px 0 0 23px; */
            margin:0px 0 0 0px;
            border-radius:4px;
            
            /* border:1px solid red; */
        }
        .close{
          position:absolute;
          width: 70px;
          height:60px;
          top:88%;
          left:40%;
        }
    }
    .z.active{
          display:none;
        }
`
export default Mask