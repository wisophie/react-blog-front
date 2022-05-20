import React, { useContext } from 'react'
import styled from 'styled-components';
import iphone from '../../img/browser_big.png';
import { MaskContext } from '../../App';
const Mask = () => {
  const { maskclick, setMaskclick, url } = useContext(MaskContext)
  return (
    <Maskstyled>
      <div>
        <div className={maskclick ? 'mask' : ''}>
        </div>
        <div className={maskclick ? 'z' : 'z active'} style={{ width: '380px', height: '690px' }}>
          <iframe className='iframe' scrolling="auto" width='343' height='482' src={url} style={{ background: 'white', }} ></iframe>
          <div onClick={() => setMaskclick(!maskclick)} className='close'></div>
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
        .iframe{
            margin:0 auto;
            /* margin-top: 115px; */
            /* margin:115px 0 0 23px; */
            margin:91px 0 0 15px;
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