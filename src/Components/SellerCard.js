import React from 'react';
import styled from 'styled-components';
import data from '../data';
import { Link } from "react-router-dom";
function SellerCard() {
    return (
        <SellerCardStyled >
            <div className='projects'>
                <div className='SellerCardswrapper'>
                    <div className='SellerCardsitems'>
                        {
                            data.map((item) => {
                                return (

                                    <div key={item.id} className="SellerCard">

                                        <h2>0{item.id}</h2>

                                        <div className='image'>
                                            <img src={item.image} alt="" />
                                        </div>

                                        <h3>{item.title}</h3>
                                        <div className='content'>
                                            <p>{item.content}</p>
                                        </div>

                                        <Link to='/projects'>点击详情</Link>
                                    </div>



                                )
                            })
                        }

                    </div>
                </div>
            </div>

        </SellerCardStyled>

    )
}

const SellerCardStyled = styled.div`
    .projects{
        display: flex;
        flex-flow: column;
        align-items: stretch;
        /* padding-top: 2rem; */
        max-width: 1300px;
        width: 100%;
        margin: 0 auto;
        /* border: 1px solid red; */
    

    .SellerCardswrapper{
        margin: 20px 0 25px;
            position: relative;
    }
    .SellerCardsitems{
        /* display:flex; */
        /* border: 1px solid red; */
    }
    
    /* display:flex;
    flex-direction:column;
    justify-content:flex-start;
     align-items: center; */
    
    .SellerCard{
        /* display: flex; */
        flex: 1;
        flex-flow: column;

        
        /* height:400px;  */
        border-radius: 20px;
        background: rgba(255, 255, 255, 0.1);
        transition: all .4s ease-in-out;
        border-top:1px solid rgba(255,255,255,0.5);
        border-left:1px solid rgba(255,255,255,0.5);
        backdrop-filter:blur(3px);
    
        margin: 2rem 1rem;
        text-align:center;
         overflow: hidden;
        padding: 1.5rem 1rem 1rem;
        position:relative;
        h2{
            position: absolute;
            right:10px;
            bottom:120px;
            font-size:8rem;
            font-weight:800;
            color:rgba(255,255,255,0.15);
             z-index:-1;   
        }
        h3{
            /* position: absolute; */
            /* font-size:1.2rem; */
            font-weight:700;
        }
        .content{
            /* position: absolute; */
            text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  line-clamp: 4;
  -webkit-box-orient: vertical;

        width:100%;
        height:6rem;
        font-size:1rem;
        /* white-space:nowrap; */
        /* margin: 0 auto; */
            padding:0 0.7rem;
            /* border:1px solid red; */
        }
        &:hover{
        transform: translateY(-20px);
         }
        .image{
            position: relative;
                width: 100%;
                /* height: 8rem; */
                /* display: flex;
                flex-flow: column; */
                padding-top: 80%;
                overflow: hidden;
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
                    border-top-right-radius: 10px;
                    border-top-left-radius: 10px;
            }

           
        }
    }
    a{
        background-color:#fff;
        display:inline-block;
        padding:10px 10px;
        border-radius:20px;
        color:#000;
        font-weight:300;
        margin-top:1rem;
        margin-bottom:1rem;
        box-shadow:0 5px 15px rgba(0,0,0,0.2);
        &:hover{
        background-color:#ccc;
    }
    }
    }
    @media only screen and (min-width: 1024px) {
        .SellerCardsitems {
            display: flex;
        }
    }
       
`;

export default SellerCard;
