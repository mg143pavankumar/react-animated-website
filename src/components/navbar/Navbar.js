import React from 'react';
import {Link} from 'react-router-dom';
import styled , {css} from 'styled-components/macro';
import { menuData } from '../../data/MenuData';
import { Button } from '../Button';
import {FaBars} from 'react-icons/fa';

const Nav = styled.nav`
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;
    z-index: 100; 
    position: fixed;

    
`;

const NavLink = css`
    color: #fff;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    text-decoration: none;
`;


const Logo = styled(Link)`
    ${NavLink}
    font-style: italic;
`;

const MenuBars = styled(FaBars)`
    display: none;

    @media screen and (max-width:760px){
        display: block;
        height: 30px;
        width: 30px;
        cursor: pointer;
        position: absoulte;
        top: 0;
        right: 0;
        transform: translate(-50%);
        color: #fff;
    }

`
const NavMenu = styled.div`
    display: flex;
    align-item: center;
    margin-right: -48px;


    @media screen and (max-width:760px){
        display: none;
    }

`
const NavMenuLinks = styled(Link)`
    ${NavLink}
`

const NavBtn = styled.div`
    display: flex;
    align-items: center;
    margin-right: 24px;


    @media screen and (max-width:760px){
        display: none;
    }
`


const Navbar = ({toggle}) => {
    return (
        <Nav>
            <Logo to = "/">ELIXR</Logo>
            <MenuBars onClick = {toggle} />
            <NavMenu>
                {menuData.map((items, index) => {
                    return <NavMenuLinks to = {items.link} key = {index}>
                                {items.title}
                    </NavMenuLinks>;
                })}
            </NavMenu>

            <NavBtn>
                <Button to = "/contact" primary = 'true'>Contact Us</Button>
            </NavBtn>
        </Nav>
    )
}

export default Navbar
