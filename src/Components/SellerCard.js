import React from 'react';
import styled from 'styled-components';
import data from '../data';

function SellerCard() {
    return (
        <SellerCardStyled>
            {
                data.map((item) => {
                    return (<div key={item.id} className="SellerCard">
                        <div className="number">
                            <p>0 {item.id}</p>
                        </div>
                        <div className="profile">
                            <img src={item.image} alt="" />
                            <div className="text">
                                <h4>{item.name}</h4>
                                <p>{item.currency}</p>
                            </div>
                        </div>

                    </div>
                    )
                })
            }
            <a href="">READ MORE</a>
        </SellerCardStyled>
    )
}

const SellerCardStyled = styled.div`
    border-radius: 20px;
    background: rgba(255, 255, 255, 0.1);
    transition: all .4s ease-in-out;
    border-top:1px solid rgba(255,255,255,0.5);
    border-left:1px solid rgba(255,255,255,0.5);
    backdrop-filter:blur(3px);
    &:hover{
        transform: translateY(-20px);
    }
    /* display:flex;
    flex-direction:column;
    justify-content:flex-start;
     align-items: center; */
    text-align:center;
    .SellerCard{
        display: flex;
        align-items: center;
        padding: 1.5rem 1rem;
        .number{
            padding-right: 1rem;
            font-size: 1.6rem;
            opacity: 0.5;
            p{
                font-weight: 700;
            }
        }
        .profile{
            display: flex;
            img{
                width: 70px;
                height: 70px;
                object-fit: cover;
                border-radius: 50%;
                margin-right: 1rem;
                border: 2px solid #395FF6;
            }

            .text{
                display: flex;
                flex-direction: column;
                justify-content: center;
                h4{
                    font-weight: 500;
                }
                p{
                    padding-top: .5rem;
                    opacity: 0.5;
                    text-align:left;
                }
            }
        }
    }
    a{
        background-color:#fff;
        display:inline-block;
        padding:10px 10px;
        border-radius:20px;
        color:#000;
        font-weight:500;
        margin-top:1rem;
        margin-bottom:2rem;
        box-shadow:0 5px 15px rgba(0,0,0,0.2);
        &:hover{
        background-color:#ccc;
    }
    }
`;

export default SellerCard;
