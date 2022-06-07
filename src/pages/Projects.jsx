import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components';
import projectspic from '../img/img-8.jpg';
import iphone from '../img/browser_big.png';
import linklogo from '../img/link.0d16a785.svg'
import { useSpring, animated } from '@react-spring/web'
import lichatlogo from '../img/lichatlogo.png'
import fast from '../img/fast.png'
import nodelogo from '../img/node.png'
import uniapplogo from '../img/uniapp.jpg'
import net163logo from '../img/net163.jpg'
import lichatjp from '../img/lichat.jpg'
import net163jp from '../img/net163jp.jpg'
import itjp from '../img/itjp.jpg'
import lichatserver from '../img/lichatserver.jpg'
import logo2_1 from '../img/logo2_1.png';
import blog from '../img/blog.jpg';
import { Tooltip, Modal, Image } from 'antd';
import { MaskContext } from '../App';

// const numContext = createContext()
// function Sub() {
//   const { num, setNum } = useContext(numContext)
//   const [num1, setNum1] = useState(9)
//   useEffect(() => {
//     const timeout = setTimeout(() => {

//       setNum(num + 1)
//       // setNum(prevNum => {
//       //   console.log(prevNum)
//       //   return prevNum

//     }, 1000)
//     if (num > 2) {
//       clearTimeout(timeout)
//     }

//     // return () => clearTimeout(timeout)
//   }, [num])



//   function fn() {
//     const time2 = setInterval(() => {
//       setNum1(num1 => {
//         console.log(num1 - 1);
//         if (num1 < 2) {
//           clearInterval(time2)
//         };
//         return num1 - 1
//       })

//     }, 1000)
//   }
//   return (
//     <ProjectsStyled>

//       <h2>{num}</h2>
//       <h2>{num1}</h2>
//       <button onClick={() => fn()}></button>

//     </ProjectsStyled>

//   )
// }


// function Father() {


//   return (
//     <ProjectsStyled>
//       <Sub />

//     </ProjectsStyled>

//   )
// }



export default function Projects() {
  const { maskclick, setMaskclick, maskclick2, setMaskclick2, setUrl } = useContext(MaskContext)
  // const [num, setNum] = useState(0)
  const [state, toggle] = useState(true)
  const [state1, toggle1] = useState(true)
  const [state2, toggle2] = useState(true)
  const lichaturl = "http://www.wispw.com:8086"
  const yuantiku = "http://www.wispw.com:8083"
  const net163 = "http://www.wispw.com:8084"
  const personalblog = "/home"
  const { x } = useSpring({
    from: { x: 0 },
    x: state ? 1 : 0,
    config: { duration: 1000 },
  })
  const { x1 } = useSpring({
    from: { x1: 0 },
    x1: state1 ? 1 : 0,
    config: { duration: 1000 },
  })
  const { x2 } = useSpring({
    from: { x2: 0 },
    x2: state2 ? 1 : 0,
    config: { duration: 1000 },
  })
  // 返回顶部
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);



  function warning() {
    Modal.warning({
      title: '提示',
      content: '请先登录!',
    });
  }

  const handlereview = (a) => {
    let user = sessionStorage.getItem('user');
    if (user) {
      setMaskclick(!maskclick);
      setUrl(a)
    }
    else {
      warning()
    }

  }
  const handlereview2 = (a) => {
    let user = sessionStorage.getItem('user');
    if (user) {
      setMaskclick2(!maskclick2);
      setUrl(a)
    }
    else {
      warning()
    }

  }

  return (
    <ProjectsStyled>

      {/* <numContext.Provider value={{ num, setNum }}>
        
      </numContext.Provider> */}
      <div className='wrap'>
        <div className='Projects'>
          <h1>PROJECTS</h1>
          <h4 class="typing typing-item">个人项目</h4>
        </div>
      </div>

      <div className='main'>
        <div className='col' style={{ width: '33.3333%' }}>
          <div className='items'>
            <div className='item'>
              <img className='lichatlogo' src={lichatlogo} alt="" />
              <h4>立聊即时通讯软件</h4>
              <div></div>
              <div className='jp'><Image src={lichatjp} /></div>
              <div className='discription'><p>立聊即时通讯软件，uniapp做前端，nodejs做服务器端，数据库为mongodb，可实现一对一单聊，可发送文字、表情、图片等。</p></div>
              <div className='linkwrap' onMouseEnter={() => toggle(!state)}

              >
                <animated.div onClick={() => handlereview2(lichaturl)} className='link' style={{
                  opacity: x.to({ range: [0, 1], output: [1, 1] }),
                  scale: x.to({
                    range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                    output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1],
                  }),
                }}><Tooltip title="点击预览"><img src={linklogo} alt="" /></Tooltip>

                </animated.div>
                {/* <Modal height={1000} wrapClassName={'web'} footer={null} style={{ overflow: "auto !important" }} title="preview" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} >
                  <div className='z' style={{ width: '500px', height: '850px' }}>
                    <iframe className='iframe' width='425' height='600' src="https://www.wispw.com:8083" style={{ background: 'white', }} ></iframe>
                  </div>
                </Modal> */}
                <a href="www.wispw.com:8086" target="_blank" rel="noopener noreferrer">www.wispw.com:8086</a>
              </div>

              <div className='techused'>
                <h4>技术栈</h4>
                <div>
                  <Tooltip title="Vue"><img src="data:image/png;base64,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" alt="" /></Tooltip>
                  <Tooltip title="Uniapp"><img src={uniapplogo} alt="" /></Tooltip>
                  <Tooltip title="Nodejs"><img src={nodelogo} alt="" /></Tooltip>
                  <Tooltip title="MongoDB"><img src='https://webimages.mongodb.com/_com_assets/cms/kuyjf3vea2hg34taa-horizontal_default_slate_blue.svg?auto=format%252Ccompress' alt="" /></Tooltip>
                </div>
              </div>
            </div>
          </div>
          <div className='items'> <div className='item'>
            <img className='lichatlogo' src={lichatlogo} alt="" />
            <h4>立聊App服务器端</h4>
            <div></div>
            <div><Image src={lichatserver} alt="" /></div>
            <div className='discription'><p>立聊app服务器端，基于nodejs实现，数据库为mongodb。</p></div>
            <div className='linkwrap' onMouseEnter={() => toggle(!state)}

            >
              <div className='link server' style={{
                opacity: x.to({ range: [0, 1], output: [1, 1] }),
                scale: x.to({
                  range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                  output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1],
                }),
              }}><img src={linklogo} alt="" />
              </div>
            </div>
            <div className='techused'>
              <h4>技术栈</h4>
              <div>
                <Tooltip title="Nodejs"><img src={nodelogo} alt="" /></Tooltip>
                <Tooltip title="MongoDB"><img src='https://webimages.mongodb.com/_com_assets/cms/kuyjf3vea2hg34taa-horizontal_default_slate_blue.svg?auto=format%252Ccompress' alt="" /></Tooltip>
              </div>

            </div>
          </div></div>
          {/* <div className='items'> <div className='item'>

          </div></div> */}
        </div>
        <div className='col' style={{ width: ' 33.3333%' }}>
          <div className='items'>
            <div className='item'>
              <img className='lichatlogo' src={fast} alt="" />
              <h4>ITIKU爱题库H5移动端</h4>
              <div></div>
              <div><Image src={itjp} alt="" /></div>
              <div className='discription'><p>一个以IT为主题的考试题库练习移动端软件。</p></div>
              <div className='linkwrap' onMouseEnter={() => toggle1(!state1)}

              >
                <animated.div onClick={() => handlereview2(yuantiku)} className='link' style={{
                  opacity: x1.to({ range: [0, 1], output: [1, 1] }),
                  scale: x1.to({
                    range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                    output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1],
                  }),
                }}><Tooltip title="点击预览"><img src={linklogo} alt="" /></Tooltip>
                </animated.div>
              </div>
              <div className='techused'>
                <h4>技术栈</h4>
                <div>
                  <Tooltip title="React" overlayClassName='tooltips'><img src="data:image/png;base64,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" alt="" /></Tooltip>
                  <Tooltip title="Javascript"><img src='https://github.yanhaixiang.com/static/media/js.d1d71893.png' alt="" /></Tooltip>
                  <Tooltip title="webpack"><img src='data:image/png;base64,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' alt="" /></Tooltip>

                </div>
              </div>
            </div>
          </div>
          <div className='items'><div className='item'>
            <img className='lichatlogo' src={logo2_1} alt="" />
            <h4>个人博客站</h4>
            <div></div>
            <div className='jp'><Image src={blog} /></div>
            <div className='discription'><p>基于REACT的个人博客，React做前端，graphQL,nodejs做服务器端，数据库为mongodb，实现了全响应式的网页布局。</p></div>
            <div className='linkwrap' onMouseEnter={() => toggle(!state)}

            >
              <animated.div onClick={() => handlereview(personalblog)} className='link' style={{
                opacity: x.to({ range: [0, 1], output: [1, 1] }),
                scale: x.to({
                  range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                  output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1],
                }),
              }}><Tooltip title="移动端预览"><img src={linklogo} alt="" /></Tooltip>

              </animated.div>
              {/* <Modal height={1000} wrapClassName={'web'} footer={null} style={{ overflow: "auto !important" }} title="preview" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} >
                  <div className='z' style={{ width: '500px', height: '850px' }}>
                    <iframe className='iframe' width='425' height='600' src="http://www.wispw.com:8083" style={{ background: 'white', }} ></iframe>
                  </div>
                </Modal> */}
            </div>

            <div className='techused'>
              <h4>技术栈</h4>
              <div>
                <Tooltip title="React" overlayClassName='tooltips'><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAPFBMVEUAAABh2vth2vtg3/9h2vth2vxh2vxg2vpg2/tg1/9i2vxh2vti2/ph2vth2vtg2vxh2vtg2vph2/th2vusqfc3AAAAE3RSTlMAwIAQ8OCgMEAgYJBwsNBQz28//KjXxwAACpVJREFUeNrsW9mWpCAMhbCDqFX8/7/OekatIAGUXubUfevTFhhycxMgsjfeeOONN954443/BgtwLlPiPMIi2GWIBfSvAdWv8diHwWqZ9ljDpcmXsKY9pLbsI2B4wlDgWBccqITBDRsOSCeInjXDx3SCBxsLEdM5uG2k6JrOEQUbCIGm7jfF8lTEOtISZEc3uw2nh2LDoFMFoDPSMDQbhCXtMIO3FkArrGCWZFXmRxrAWg9z2mFQShFyt1huE9AJCUAQxXECItFktuF2bpdjwmSbXxkiGShTiI6XZ2Vwpw8ENgBiY5VgCF5V5oHHi8k+M9M8wiU4PqVjCNiUKCrykPT5dC9p5eiHJEMQJKJXkVYSBCUrkt2OpULe3TE5eOS0Y4gXyjOOVu3+HGKL5m5OwbEaKFZtsONyyb9IbynGtNj9R7eUUvNFbtFLNDECk0QFEy7T6FHSX6BIu0uzHKNg5mPI4zCf6bdzhMndiDSz8iSS5rcdEhOujluR3QvVlGunoyVHO6YmcVnZvTiVVFq9pDH7vxbWthbsVhhCfInUh2KmQV3MGNEq0BsXTBhz/e/R0l0BzsnXtvdaDCBzl/qqSxtK3SMvMMQQ3lPW9JUb/AsZcqyugH1fQ8xBhb+vIUKmHaT4AoZw2hD6OG8VPVPqz/cI0l/++R7pMUQnBP0dDZlSBtNXMUS11wIpzbtqxX+RhJg6hHcWQnWI8JidlW00xEm0H2m1pLFoHFNUi/V1h9gswmaMIa5tWI5O1H2rCFt0SEBgBGPhENzIEvjEHSKTDS9hj++M04odoJOtqh5rKyycAHVT1RXbM1fvoQYdIBGd8NSPsqK1GJVI6ABR4tRVgVHA5Lz5MN7QD54+auuvBw168G79Xaoz4VTyliRU1V9UX9rVgaR2SRZ4bZgE4jR+9NYqoAAhwqR7uut3upUBEuEP+F/AH8TKMBl3r+uJaDdPD1qmBsgAj+eTiHXPGtF9YWGeD4hcpn6sHOBpTgoUx26HfM1Q7glRpdugIizmNa9Ldj/irvhxC3CZRmDVj1/WKCR9A3J74DKNBQ8jGwZs+gRYdj+W9IEYVaAIH1MrZp5BuzhEL24T3gdPDdDWWoKk1uomAXi4D/IF5xqVJrWbL+kh8uF+sZqSl+nP8vNWVi/H3bCzEyXo2nY746FKIaAni+qXBuGPmW2Ls8UUqx49bnGFwkmBPSOKqB5fnhT0YjlnmtSt0WKKnFKoMu4435xOf7TexjCn82xS+QrYXLsASdLly1M15wPfXTIjerctYkBv1FqrYvuxq/zWintEHcFAZtXvuFZ5jkDvhw8+d5+QxKn+S2AdTdLcC3QyZXKRPrNGqJxGGCSAws+t7d5Cl79w8Rlu6f4Kz+ZUO+QykguypR3EKuSMF0Mxt+yVtumQWQR1sqfyvNop8GqzOU9jBmmlElfa7TlilqbrDCBohaShwC1/reJekEtCaTynaXqJtUrh5Au3FFGbmAfwn4CHIZLJmmEWbcoqynZwS16em4qGeRfUjtIh+8iLBBsy4iwvWeJW1CRNcEEfOQ41EhhEId4VWqi6zmKH/FHXJC330h8KxaKXCUH6Qrz7/V+Kas7L+4SjuWjFhD0vgJDA8oPbYkyVWu7zHS7Q0CRtdlSI59Krq74AQ/REZWlNFytkDnpmUV9X+O13vuGrNii4xNdXO2LGh0YK6XKVVznfnIOeKcCfLg3whrNrwV/3R9DYlYuDeMFsKUCKM7MlWplKn0zbrAU7SNrwxg8vA3ZJRe1BflQ2tba7OOpc0yUCjmKiaG1BmvZV39TZGsczCt3oEk4oG7nvX/dy2nucbTBTCKjWEWkJdfsdcjV4cflMImGKI/KOC8GJ6ba7Icxph/1NYiq6xHfdo/GeuyFV4jP0fCoes8Rr6b2RPScgUGr04YkEL0hh35uovh5IgRxy1RCmCe2ldKvPEPcFDfnR3pVtuQ3CUCPJrN4S/v9f2z60bkbYImBKpsf3aU5yBqyYRYirq8qhFe2nDK2iyU7smWonu66d7PXLr71i+XWFyy/uQ9wX/PvGhknthjjXboh+cNUuyvoZLsoemIZCp3Hs5zTC3ydKX+3G+1o33pa68S+PgOOb0VtgI6XLwYo/uRf49/I5dqo86gqTSM4k8IxYXBZ8ILwm+KBZ8CHPjoWvl5vLXyisFUI8acDxvuNEqY90kNckuiVbEqCjSwJ0+o0AnSUpkyBCZsjUXx4ydfkhUzj4aXCRhFf4zRi+tOfqg9iQHcR2iqXIJy0hyNjVAxsWgvyUdK1AmHutAMTtSFsSx9yLnn2iXn3Ro8Ub290Obol8Z0VfVrxRWGfMBOonYJKu3sa8qzerZOkFHWVT1q974Mp2xZaXoTbPKfNRMmU31nFqTOPraW5G9IJYzo7RY7rj5Yy9kA+dTxjAXYgs504qcKqXSQb2Ug+zllM4QnKj2mE4DS4IbS8JBp5jBznH3lIB9wEzSTUuwUlcrBxgoUPCKv5pJu0rhQY0J/fYIgNlrSwIMYENDBtZLC3PVhHP+NgysEUOAqyjAo77CfngibYCKiBnFrL+BJJMKceU37mGXI8zb0Sy56/imSIcm6Ie5ogum92NO1gj3Mo6FgaVDK9OSdiPJ9+g82NSM1+18QkznXXph1K4QFI6kX/iy3gXOkub7p6ec7C55GkVVk1RgppZZnR+BGPLyMUgvV6TPEIxH/PzJ/CkuV/f65gPYqkKTd8LBykG1kj7d8FhYiPI0e47WezcMxLWl0tSK9kG2yihEi3oJTbAosFi44RKYic3O2kVL4P6O0VIN0hxlfKZrQVQisoNUAFWi60FBvKbNnaCt8whAGvln60GsnaBnD0a4A+U0vAbQViRhMT8DlIJJEklQCepBNa/dFpSwtfFOizt5UTknxyyfctVmJLtBV4smwTJ70yBwEs3yR1CQfylh+SOzk8IUwdXkri9E5Rc2P77gbJUYz9ZKsaGynT4dTLYbzoKhck7bZofNKU++z7i3jML/fv9k7mHmJ7crJwTIWd2yD9dN8FJPBScHLFQcLK/BCg5Rx8jAQr52wh3hLdt/9t+iCjreyw9Dv8pMrmCIRKRLnxH4eKUAH5/KWklGyKXV1iwvyGFcuuvbItPkFuXDZHDrN9YAP91lujva8gHF4kYq+qLaqw+OPQopLLV1QFlh/ZOpW3cFhPY+pW2kZ1quWDH3393KDZU44v6eFj+yXco/1Qc1AhnBbmgOGxz7TWPDFTnJdLkIsYNrnoKVFJtis3qWCW7TkXrjNRwmoKtMO1BQq8yglyiRl51eYBOpnsLzMY2pTZllbHp5F3Ro1OpTZYRIdYpJ6n4qelS/HQgaZagZmxWoSYfoDRDaLgecL45I1CGg4hzDpHMNC0QjMQt4WaIi9vEKdLcjrZVtOEw7cfqWFFEW5vDfQiGFsAxqer2DGNtWfMNTFKzc8ShCezXyvAAKQ7HUlJonlSAxwP02IYbxH1BGVDIkeYIQzPMUYIymS5Phljx0A6oBDPskA2rBDtwaAkdjzG+uQ37MR5DD40xkUwvrqdI0zQ0h9N0Ib3YBRII8A2B0+uYWMJa5Y6G5XWETjj8MxgApWJUaob1gm5xBaWWX+0BmOHGjRs3bty4ceN/wQ8LkBIRW3UwFAAAAABJRU5ErkJggg==" alt="" /></Tooltip>
                <Tooltip title="TypeScript" overlayClassName='tooltips'><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAk1BMVEUAAAAAecwAeMsAessAe80AeswAes0AeswAeswAes0AeswAe80AeswAe80Ae80AeswAeswAes0AeswAeswAec0Ae8wAeswAes0Aes0AeswAeswAec0AessAe80Afc8AeswAeswAes0AecwAe80AeswAes0Ad8gAedAAeswAeswAeswAfc4AeswAes0AeswAfMwAesyZUHhbAAAAMHRSTlMAv0CAHUqE1dCemWxkYE/52bqPdDMjybR/eVlFOCkF6+bGqaRxVBcN8d2WE+Guii5cefTEAAAD2klEQVR42uzPSWoCURRA0ZdCrUjFmMYQFMF2YIPi/lfnXCytwftwkXt2cOLyIozQGKExQmOExgiNERojNEZojNAYoTFCY4TGCI0RGiM0RmiM0BihMUJjhMYIjREaIzRGaIzQGKExQmOExgiNERojNEZojNAYoTFCY4TGCI0RGiM0RmiM0BihMUJjhMYIDS7yNZz+NqPZZ7+abc+b73pRIDKuUrxdWp1Gf3Hr+PGfHdlFirbI8mcS9/WaOjWyKBo59KLdcTBOjCwLRlb9eGyyzovsy0WG8dw0LVIXiwyiiyYr8l4qUkU386TIqlCkis5yItd27kO3USiIwvChuuGKOzbuNU5y3v/pVtlsE/WCdlczkb83+DUSBuYa69+E9GBuLTjEQRU9sSEWqgmlhtioyJIZ0kJVnswQG5W1JIa8oip3JHIiXWS5RKcgXAS9MVKWU/6FECcXUpxcf4a4SJvM+FM7kTIZkfVC6s/KooFp6W+enxiH0BAHKW7iGWr4exx3UmpIaHBNOuJTt0m5IR2TG9wlAKzbpOCQLpIcpvS97+MQHbI0CeHmYxyyQ3pGIWxQekiEpIBZxId4SLJ1hnSRslEZckTKXWWIj7SNxpA2MswUhrwii68vpPGCLJGlLYQBsoVbZSFD5DgvBqpCOEaeS6epKcRHge5QT0gDhaKDlhD6KDYebXSE8IQS7kL+bfyHgYsyceehIIQHo/eLCkI4hwF7Jj/ErATBQHyIYclLS3wI5zFMOOJDOO3BRE98CNl2YSC+iQ/hI4xhYCo+hGx2YWAgP4Qc9lDK3SgIIWcnlLH7GkJIa4kSvo4Qcheg0KSvJIRsdi4ocFcTQg4WZ+RaKQoht84EefaaQsjraI1snq4Qsp9z43LWFkIOTsjSUBeS87CyVxiSWbLQGMIIKbbKkANSLkJDtix0RorMkLfoyiK2jpDDGAhZpKMhxOrhQ5sFuvJDBh38MGS+tfSQvv+CX27Mc4PwkNa72V8RRrIvv0PP8KjADmmemJBbgLSF8cL0TUrI4R1ZAqbsV8iwkxLSjJFpcrQSF2fpzyNH5HE71uBKktuZc0K2k5yQxxlF4snKRb62nBC2UN9Y1FuUOWpriwphhJpsYa9M+6hpKCyEU9RylLdWaMao7iRx0XNbo6q1zNXb1UM1F7HLUCdGBbbg9fTOg7FQ9p797QIjniX95EMzdFFq1ZJ/qIa8tqOSaewVHHP6ZB1XucOYT8n/EuKkWKzhsQ8mSDgvR1ON3w5if9vYzQ533x/dW/vXYVPrR5C+zNecniH8Ip4h0jxDpHmGSPMMkeYZIs0zRJpvMd8EbW7RJgkAAAAASUVORK5CYII=" alt="" /></Tooltip>
                <Tooltip title="Javascript"><img src='https://github.yanhaixiang.com/static/media/js.d1d71893.png' alt="" /></Tooltip>
                <Tooltip title="webpack"><img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAb1BMVEX///+O1foceMCH0/r1+//s+P4AbbwTdb8Acr7I6v3N6/2i3PvV7/3m7/crfsOevd9Rkcu04vwAa7ua2fvc8f3j9P6q3/u65fyWud23zueCrNdmnNDE1+s6hcatx+Pf6vTY5fJHi8jN3e54ptRalcwkI5luAAAG3klEQVR42uzWOwrEMBCD4RHyFk7ShLzuf9MlsGQCLgyGBY/Rd4O/EMhEREREREREREREREREROQfcrbbvNuYdvBXyPlj4/lsfAoBrsnGklYCr0KQ2UaSSbwLb8Rio1hAoCgEuI0xx2MjgLLwxjP+HNNJoCh8kJfFdpFwXujIyeKavK8odMRhMe0gXFnoOEecY5q9r1YIcrVoVsLVCgM+gEyiUlgg4hxyH2C98C3KIb8vNpoKYxzy5AOsFoacYybRXBjgkC8g0F7Y/SH3i91Y2Pkh94vdXNj3Ib9ItBeWyL7m6Be7tbDErZ9DfoBAQ2GUOX65M8PltGEYADPFk7xuUOYbPaBQKPD+zzjo7irFAoTrelXQz/YC+RRL+hRYsWsJnQq5mvDVhL72YzHh6wkdCrlSbOtmZ1fT4k7IvxsFqJWT5fUsozMhV4ptznAzO76EvPSkPQXb8TwJOSt2RSWpD/Ej5Jz+8m64mQd9EJwZQHgq5HsQ1+5TxMe+zrorx5p7mmMEgAgLmS9n5fhQyCfb/AtF+Be43p1rqw6EfFbaYATfaoLwHoTTjRQHL+U467qPJnv7igQyKO2DOBpFjN23Jois2eUFM35+5+OIOO/PVx8yrovGbjBhmZhPRowvo1GpyTVcqLhoygztMUa4FDhZiew9dU4sXBwouxMsQPDpIHzdKpX4ok1qFpR021nerRGMoPQ8tk2Oj768nc9+cj/UbxOWoR2QwA7CpWFyvEJxjjmPnznr/xjJ7rqeoZl83HKumhx7N2ehCSGfQE62YWi3hWVyPHu41zUh5F7NN2Iamh2WyXHq+F/tCPnbuPdxg9GGZodlctyb2TlaEnIz4eo0DM0Iw+T4o7kyGhOyUXNfyAwtFfBZJse9i59rY0ItLeGnYWhljNQzud/q3XpTQlt/HzFCbcTJytq82xOq+pCGVh9scmrzbk+o/VMbWn0Qsslxz/6/hLocx+sE9cGyqudue0Jrz13xIa0+phtDVJsTcnRBmlpVI2WDk63m1/F7/RCOwjPWMtJpJPolfBOaygIMI4+E44WYGVK6i/V7K4arK8IkrXmO9EGfWci+Ba4IkdIyqLeHhQdUFOBmijTxRZi9G9wZ+5PxuubNbt0RnoxyJ3bgGIsKML/UJSEQHuSDuPmo6sfvlfDEuBQiN72JkZK85oAEngmz57GaRJMPp3kBOic8MvaGGkZrG8xG6QAIgVCISdhfkdXeT97b9ZFvGIT5bLskcoT7IJQ2EQyHkF/xXtmr8DX3oEER5gCJdAqy9x+DIwRKlw8hYX6Mh0ioGgkye96KhkqY7euLGM/sSKc/DpgQAKdZOUZaZEowcELI9qq0lDtSAhg+YSZyoa/m90EIgLxX9XekuyHkvaq3I90T4d/2zmYnYSgKwsHyG1lAkYUkLEx8/2dUU+KIY6Wnp4W5zczCjVH4mnvagd6Z4jMSvuaYGuHXOL7+dDgTJHx6qhsD8PY5gBMlXDeEu5UJTWhCE5rQhCY0oQlNaEITmtCEJhQlrKdOOD8v04R850qJEHcA04TItEnt3MOehCQhcokiexPR5oT7EHlCJBKwSV9gnzfSJBlCpEoU9nkjOkOJoH6EnAxCSv6+hNyNy6muOCHfwFlQ3uJRmZnjjJN5cUJO6FFo7V6EHEOkdGW9jhNyyvIy6CAem5DCzDjVcUK2XsUIOSmLk/W9s2scB8YvaBdlV8JVTWnnlgDw6IQVRboDSXUQdk6sc4h7TEJ+tUjbABNih+l/rQN8VEcj5BUTaYxgQji0G70bPBkjEVJkPNr6AcJo+wcH5Ucg3FBkvFtzywKbEkAYbXDhK9QIhC909Y207zAhZ7eJjxcHvZ2EcmV0nM9nwlX9fp2/V2mJ7FzqxE4OhOTQDlWoeiqvfB0rTqvoyQBhaw/GwzuUA52V7ORO9fJC2N5K9/gO5ci7YSe3a86c5xNNtVArLa2o0Cln3vwkhyazSGGr0g1y+FciZXRQrwO/b21GU+33jA/P5s8OW61SyOQ4zrZ0jMR7dnusseO1Q9PvSmZ3c9uQ4A/L6LvGUgs1lh+qWTmd5fuqB+Gz+AAmxhGERT07AF+5RwhVPkrEyoXzhLoP1YMh70SoYbGHdwAgVLHYQxtyEOpY7GENOQiVLPaQDgCEUhZ7wHEEofQVPvFsQBDKWeykIWdCQYudGkcmlLTYiWfQMGGZA3jbkINQ1WJnxxGEuhY7Z8hBqGyxM4YchNIWO+EAQChuscOGnAnlLXZM26r6TSj5nMoBxhGEJVjsPuMIwhKv8F0MOQhLsdhhB/BNWI7FDhvyC2FBFjtqyJtL32FSA2hZlmVZlmVZlmVZlmVZlmVZlmVZlqWjD/hXn+81tl9RAAAAAElFTkSuQmCC' alt="" /></Tooltip>
                <Tooltip title="Nodejs"><img src={nodelogo} alt="" /></Tooltip>
                <Tooltip title="MongoDB"><img src='https://webimages.mongodb.com/_com_assets/cms/kuyjf3vea2hg34taa-horizontal_default_slate_blue.svg?auto=format%252Ccompress' alt="" /></Tooltip>
              </div>
            </div>
          </div></div>
          {/* <div className='items'><div className='item'></div></div> */}
        </div>
        <div className='col' style={{ width: ' 33.3333%' }}>
          <div className='items'>
            <div className='item'>
              <img className='lichatlogo' src={net163logo} alt="" />
              <h4>仿网易严选H5移动端项目</h4>
              <div></div>
              <div><Image src={net163jp} alt="" /></div>
              <div className='discription'><p>一个仿网易严选H5移动端前端项目，简单的实现了注册登录，分类展示，购物车结算等功能。</p></div>
              <div className='linkwrap' onMouseEnter={() => toggle2(!state2)}

              >
                <animated.div onClick={() => handlereview2(net163)} className='link' style={{
                  opacity: x2.to({ range: [0, 1], output: [1, 1] }),
                  scale: x2.to({
                    range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                    output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1],
                  }),
                }}><Tooltip title="点击预览"><img src={linklogo} alt="" /></Tooltip>
                </animated.div>
              </div>
              <div className='techused'>
                <h4>技术栈</h4>
                <div>
                  <Tooltip title="Vue"><img src="data:image/png;base64,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" alt="" /></Tooltip>
                  <Tooltip title="Vant"><img src='https://img01.yzcdn.cn/vant/logo.png' alt="" /></Tooltip>
                  <img src='https://github.yanhaixiang.com/static/media/js.d1d71893.png' alt="" />

                </div>
              </div>
            </div>
          </div>
          <div className='items'>
            <div className='mores'><span>更多</span>
            </div>
          </div>
          {/* <div className='items'><div className='item'></div></div> */}
        </div>
      </div>



      {/* <div className='z' style={{ width: '500px', height: '850px' }}>
        <iframe className='iframe' width='425' height='600' src="https://www.wispw.com:8083" style={{ background: 'white', }} ></iframe>
      </div> */}





    </ProjectsStyled>
  )
}



const ProjectsStyled = styled.div`
  position: relative;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 70%;
    
    padding-top:10vh;
    @media (max-width:992px){
      /* margin-top:8vh; */
      width: 80%;
      transition:0.4s all;
    }
    
      .jp{
        display:flex;
      }
      .wrap{
        padding:0 1.4rem;
      }
  .Projects {
    display: flex;
  align-items: flex-end;
  justify-content: center;
  height: 12vh;
  /* font-size: 4vw; */
  border-radius:10px;
  background-image: url(${projectspic});
  background-position:center;
  background-size: cover;
  background-repeat: no-repeat;
  text-shadow: 0 1px 1px rgba(0,34,69,.6);
  
  h1{
    @media (max-width:992px){
      line-height:2.1rem;
    font-size: 1.7rem;
    }
    color: #fff;
    line-height:4vw;
    font-size: 4vw;
  }
  h4{
    @media (max-width:992px){
    line-height:1.5rem;
    font-size: 1rem;
    }
    line-height:3vw;
    font-size: 2vw;
    color: #fff;
  }
        .typing{
          font-size: 2vw;
      font-weight: normal;
      letter-spacing: .3rem;
      -webkit-animation: type 1s steps(50, end) forwards;
      animation: type 0.4s steps(50, end) forwards;
      }
      .typing-item{
        margin-left:0.5rem;
      text-align: left;
      color: #fff;
      width:22%;
      white-space:nowrap;
      overflow:hidden;
      }
        @-webkit-keyframes type{
        from { width: 0;}
        }
        
        @keyframes type{
        from { width: 0;}
        }
        }
.main{
  /* border:1px solid red;  */
  display: flex;
  height:100vh;
  .col{
    background-clip: padding-box;
    /* border:1px solid red; */
    .items{
      padding: 24px;
      transition: transform .3s;
      /* border:1px solid red; */
      .item{
        padding: 20px;
      border-radius: 6px;
        background: #fff;
      text-align: center;
      box-shadow: 0 3px 5px 0 rgba(0,0,0,.4);
      transition: transform .3s;
      &:hover{
                        transform: translateY(-3px) ;
                       
                    }
       
      /* border:1px solid red; */
      .lichatlogo{
        height: 80px;
        margin:0 auto 12px;;
      }
      h4{
        margin-bottom: 12px;
        font-size: 1.5em;
        line-height: 1.125;
        color: #002245;
        text-shadow: 0 1px 1px rgba(0,34,69,.32);
        font-family: SiYuanHeiTi,Helvetica,Arial,sans-serif;
        font-weight: 700;
      }
      .discription{
        margin: 35px 0 25px;
        font-size: 15px;
        display: inline-block;
        color: #151515;
        letter-spacing: 1px;
        text-shadow: 0 1px 1px #e0e0e0;
        line-height: 1.5;
        text-align: left;
        padding:0 1rem;
      }
      .linkwrap{
        color:black;
        font-size:1rem;
        .link{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 15px;
        height: 48px;
        img{
          height: 80%;
          cursor:pointer;
        }
      }
      }
      
      
      .server{
        &:hover{
                        
                        filter: grayscale(1);
                    }
      }
      .techused{
        
        h4{
          font-weight: 700;
      padding-top: 16px;
      padding-bottom: 12px;
      border-top: 1px solid #cacaca;
      font-size: 24px;
      display: inline-block;
      width: 80%;
      color: #151515;
        }
        div{
          display: flex;
    justify-content: center;
    flex-wrap: wrap;
    img{
          height: 32px;
          margin: 3px 5px;
        }
        }
        
      }
    }
    .mores{
        background: rgb(21, 160, 0); 
        font-size:2rem;
        padding: 20px;
      border-radius: 6px;
      text-align: center;
      box-shadow: 0 3px 5px 0 rgba(0,0,0,.4);
      transition: transform .3s;
      cursor: pointer;
      &:hover{
                        transform: translateY(-3px) ;
                       
                    }
      }
  }
}
}

.h2{
  font-size:2rem;
}
@media (max-width:992px){
  .wrap{
        padding:0 0;
      }
  .main{
    display:flex;
    flex-direction:column;
    
    .col{
      width:100% !important;
      .items{
      padding: 24px 0;
    }
    }
  }
}
.z{
        /* margin:0 auto; */
        display:none;
        position:absolute;
        top: 15vh;
        left: 50%;
        transform: translateX(-50%);
        background: url(${iphone}) no-repeat 0 0;
        z-index:1220 ;
        border:1px solid red;
        .iframe{
            margin:0 auto;
            /* margin-top: 115px; */
            margin:115px 0 0 23px;
            /* border:1px solid red; */
        }
    }

`;