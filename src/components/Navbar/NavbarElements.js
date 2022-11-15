import styled from "styled-components";
import { NavLink as Link } from 'react-router-dom';


export const Nav = styled.nav`
    font-weight: 500;
`

export const NavLink = styled(Link)`
    color: #fff;
    font-size: 4rem;
    text-decoration: none;
    cursor: pointer;


    @media screen and (max-width: 400px){
        position: absolute;
        top: 10px;
        left: 25px;
    }
`

export const NavIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10rem;
    button {
        font-size: 2.5rem;
        color: white;
        background-color: #CC5500;
        cursor: pointer;
        border-radius: 15px;
        padding: 10px 50px 10px 50px;
        :hover{
            filter: brightness(0.5);
        }
    }

    
   
`
