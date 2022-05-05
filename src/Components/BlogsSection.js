import React from 'react'
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { SectionStyled } from '../Layouts';
import MainTitle from './MainTitle';
import blogs from '../blogs';

function BlogsSection() {
    return (
        <BlogsSectionStyled>
            <SectionStyled>
                <div className="title-con">
                    <MainTitle title={'Popular Blogs'} subtitle={'Our Top Blogs'} para={''} />
                </div>

                <div className="blogs">
                    <div className="cards-wrapper">
                        <div className='cards-items' >
                            {
                                blogs.map((blog) => {
                                    // console.log(blog)
                                    return <div className="blog" key={blog.id}>

                                        <Link to={{ pathname: `/post/${blog.code}` }}>
                                            <div className="image" data-category={blog.category}>
                                                <img src={blog.image} alt="" />
                                            </div>
                                            <h6>{blog.title}</h6>
                                            <h7 className="user">Creator : {blog.name}
                                            </h7>
                                        </Link>




                                    </div>
                                })
                            }
                        </div>
                    </div>


                </div>


            </SectionStyled>
        </BlogsSectionStyled>
    )
}

const BlogsSectionStyled = styled.div`
    
    .blogs{
        display: flex;
        flex-flow: column;
        align-items: stretch;
        /* padding-top: 2rem; */
        max-width: 1300px;
        width: 100%;
        margin: 0 auto;
        .cards-wrapper{
            margin: 20px 0 25px;
            position: relative;
        }
        .cards-items{
            /* display:flex; */
            /* margin-bottom: 24px; */
        }
        .blog{
            display: flex;
            flex: 1;
            flex-flow: column;
            /* box-shadow: 0 6px 20px rgba(56, 125, 255, 0.17); */
            margin: 2rem 1rem;
            background: rgba(255, 255, 255, 0.03);
            border-radius: 10px;
            text-align:center;
            overflow: hidden;
                background: rgba(255, 255, 255, 0.1);
                border-top:1px solid rgba(255,255,255,0.5);
                border-left:1px solid rgba(255,255,255,0.5);
                backdrop-filter:blur(3px);
            /* box-shadow: 0 6px 20px rgba(56, 125, 255, 0.17);
            -webkit-filter: drop-shadow(0 6px 20px rgba(56, 125, 255, 0.017));
            filter: drop-shadow(0 6px 20px rgba(56, 125, 255, 0.017)); */
            /* border: 1px solid red; */
            .image{
                position: relative;
                width: 100%;
                /* height: 100%; */
                /* display: flex;
                flex-flow: column; */
                padding-top: 67%;
                overflow: hidden;
                
                transition: all .4s ease-in-out;
                &::after {
                    content: attr(data-category);
                    position: absolute;
                    bottom: 0;
                    left:0;
                    margin-left: 10px;
                    padding: 6px 8px;
                    max-width: calc((100%) - 60px);
                    font-size: 12px;
                    font-weight: 700;
                    color: #fff;
                    background-color: #1f98f4;
                    box-sizing: border-box;
                    border-top-right-radius: 5px;
                    border-top-left-radius: 5px;
                }
                img{
                    position: absolute;
                    top: 0;
                    right: 0;
                    bottom: 0;
                    left: 0;
                    display: block;
                    width: 100%;
                    max-width: 100%;
                    height: 100%;
                    max-height: 100%;
                    transition: all .4s ease-in-out;
                    object-fit: cover;
                    /* border-top-right-radius: 10px;
                    border-top-left-radius: 10px; */
                    filter: grayscale(50%);
                    &:hover{
                        transform: scale(1.1) ;
                        filter: grayscale(0);
                    }
                }
            }

            h6{
                font-weight: 500;
                font-size: 1.1rem;
                padding-top: 1rem;
                padding-left: 1rem;
                padding-right: 1rem;
                transition:0.3s;
                &:hover{
                        color:#ccc ;
                    
                    }
            }
            .user{
                /* text-align:center; */
                font-size: 1.0rem;
                line-height:2.0rem;
                padding-top: 0.2rem;
                /* padding-bottom:1.5rem; */
                /* margin-bottom:1rem; */
                /* display: flex; */
                /* padding-left: 2rem;
                padding-right: 1rem; */
                opacity: 0.5;

                
            }

        }
    }
    @media only screen and (min-width: 1024px) {
    .cards-items {
    display: flex;
        }
    }
`;

export default BlogsSection;
