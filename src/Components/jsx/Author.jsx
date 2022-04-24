import React from 'react'
import styled from 'styled-components';
export default function Author({ author }) {
  return (
    <Authorstyled>
      <div className="text-center mt-20 mb-8 p-12 relative rounded-lg bg-black bg-opacity-20">
        <div className="logo">
          <img
            // unoptimized
            // loader={grpahCMSImageLoader}
            alt={author.name}
            height="100px"
            width="100px"
            className="align-middle rounded-full"
            src={author.photo.url}
          />
        </div>
        <h3 className="text-white mt-4 mb-4 text-xl font-bold">{author.name}</h3>
        <p className="text-white text-ls">{author.bio}</p>
      </div>
    </Authorstyled>

  );

}
const Authorstyled = styled.div`
  .logo{
    /* border:1px solid red; */
    /* display:inline-block; */
    position:absolute;
    top: -30%;
    left: 50%;
    transform: translateX(-50%);
   
  }
`