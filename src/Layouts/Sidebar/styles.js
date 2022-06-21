import styled from "styled-components";
import { Link } from "react-router-dom";
export const Container = styled.div`
width: 90%;
margin: auto;
`;
export const Logo = styled.div`
color: azure;
font-size: 21px;
font-weight: 600;

`;
export const LinkWrapper = styled(Link)`
width: 80%;
margin: 10px auto;
display: flex;
position: relative;
transition: 0.5s ease;
cursor: pointer;
`;

export const Icon = styled.div`
height: 19px;
width: 19px;
position: absolute;
right: 20%;
svg{
    height: 100%;
}
`;
export const PathName = styled.div`
color: #fff;
font-size: 16px;
font-weight: 400;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;
