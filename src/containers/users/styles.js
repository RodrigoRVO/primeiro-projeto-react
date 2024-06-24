import styled from 'styled-components';

import Background from '../../assets/bkg1.png'

export const Container = styled.div`
    background: url('${Background}');
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    height: 100%;
    min-height: 100vh;
`;

export const Image = styled.img`
    margin-top: 30px;

`;

export const ContainerItens = styled.div`
    background: linear-gradient(
        157.44deg,
        rgba(255, 255, 255, 0.6) 0.84%,
        rgba(255, 255, 255, 0.6) 0.85%,
        rgba(255, 255, 255, 0.15) 100%
        );
    border-radius: 61px 61px 0px 0px ;
    padding: 50px 36px;
    display: flex;
    flex-direction: column;
    height: 100%;
    min-height: calc(100vh - 170px);
`;

export const H1 = styled.h1`
    color: #FFF;
    text-align: center;
    font-size: 34px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-bottom: 80px;
`;

export const Button = styled.button`
    width: 342px;
    height: 74px;
    margin-top: 30px;
    border-radius: 14px;
    border: 1px solid #ffffff;
    background: transparent;
    color: #FFF;
    font-size: 17px;
    font-style: normal;
    font-weight: 700;
    line-height: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    cursor: pointer;

    &:hover {
        opacity: 0.8;
    }

    &:active {
        opacity: 0.5;
    }

    img {
        transform: rotateY(180deg);
    }
`

export const User = styled.li`

  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  width: 342px;
  height: 58px;
  border: none;
  margin-top: 20px;

  p {
    color: #FFF;
    font-size: 20px;
    font-style: normal;
    font-weight: normal;
    line-height: 28px;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
  }

`

;

