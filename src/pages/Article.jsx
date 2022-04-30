import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { PostDetail, Categories, PostWidget, Author, Comments, CommentsForm, Loader } from '../Components/jsx';
import { getPosts, getPostDetails } from '../services';

import { useParams } from 'react-router-dom';





export default function Article() {
  const params = useParams();
  console.log(params.code)
  const [post, setPost] = useState({});


  const [isLoading, setLoading] = useState(true);

  useEffect(() => {

    const fetchData2 = async () => {
      const posts = await getPostDetails(params.code);
      // console.log(posts)
      setPost(posts);
      setLoading(false)
    }
    fetchData2()
  }, [])

  // const post = JSON.stringify(post1) == "{}" ? {} : post1;  //重点,fetchData是异步的确保arr有数据才执行
  if (isLoading) {

    return (
      <PostDetailStyled>
        <Loader />
      </PostDetailStyled>
    )

  }

  return (
    <PostDetailStyled>
      <div className="container mx-auto px-10 mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="col-span-1 lg:col-span-8">
            <PostDetail post={post} />
            <Author author={post.author} />
            {/* <AdjacentPosts slug={post.slug} createdAt={post.createdAt} /> */}
            <CommentsForm slug={post.slug} />
            <Comments slug={post.slug} />
          </div>
          <div className="col-span-1 lg:col-span-4">
            <div className="relative lg:sticky top-8">
              <PostWidget slug={post.slug} categories={post.categories.map((category) => category.slug)} />
              <Categories />
            </div>
          </div>
        </div>
      </div>
    </PostDetailStyled>
  )
}


const PostDetailStyled = styled.div`
  position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    height: 100vh;
    width: 70%;
    margin-top:10vh;
    @media (max-width:992px){
      margin-top:8vh;
      width: 100%;
      transition:0.4s all;
    }
    @media (min-width:992px){
       margin-top:10vh;
       
       transition:0.4s all;
    }

`;