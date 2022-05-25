import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { PostCard, Categories, PostWidget } from '../Components/jsx';
import { getPosts } from '../services'
import FeaturedPosts from '../Components/sections/FeaturedPosts';

export default function BlogArticles() {
  const [arr, setArr] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const posts = await getPosts();
      console.log(posts)
      setArr(posts);
    }
    fetchData()
  }, [])

  // console.log(arr[0])
  // const arr1 = arr.length > 0 ? arr : '';  //重点,fetchData是异步的确保arr有数据才执行
  // console.log(arr1)
  // arr数据有异步等待功能
  return (
    <BlogArticlesStyled>
      <FeaturedPosts />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">

          {arr.map((post) => <PostCard post={post.node} key={post.title} />)}

        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>

    </BlogArticlesStyled>



  )
}
// Fetch data at build time
// export async function getStaticProps() {
//   const posts = (await getPosts()) || [];
//   console.log(posts)
//   return {
//     props: { posts },
//   };
// }

const BlogArticlesStyled = styled.div`
  position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 70%;
    height: 100vh;
    margin-top:10vh;
    transition:0.4s all;
    @media (max-width:992px){
      /* margin-top:10vh; */
      width: 80%;
      /* transition:0.4s all; */
    }
    @media (min-width:992px){
       /* margin-top:10vh; */
       /* transition:0.4s all; */
    }

`;