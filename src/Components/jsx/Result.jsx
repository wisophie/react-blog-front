import React, { useEffect } from 'react'
import { Result, Button } from 'antd';
import { Link } from "react-router-dom";
export default function Results({ num, setNum, lgclick }) {

  // if (!lgclick) {

  //   return (
  //     <div></div>
  //   )

  // } // 不能这么写
  useEffect(() => {
    if (lgclick) {
      const time = setInterval(() => {
        setNum(num => {
          console.log(num)
          if (num < 2) {
            clearInterval(time)
          };
          return num - 1
        })
      }, 1000)
    }
  }, [lgclick])


  return (
    <Result
      status="success"
      title="Successfully Loginned!"
      subTitle="登陆成功，点击返回首页，或5S后自动返回首页。"
      extra={[
        <Link to='/home'>
          <Button type="primary" key="console">
            返回首页({num + 's'})
          </Button></Link>
      ]}
    />

  )
}

