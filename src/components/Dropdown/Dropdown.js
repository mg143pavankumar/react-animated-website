import React from 'react'
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import { menuData } from '../../data/MenuData';
import { Button } from '../Button';

const DropDownContainer = styled.div`
        position: fixed;
        z-index: 999;
        width: 100%;
        height: 100%;
        background: #cd853f;
        display: grid;
        align-items: center;

        top: 0;
        left: 0;
        transition: .3s ease-in-out;
        opacity:${({isOpen}) => (isOpen ? '1' : '0')};
        top: ${({isOpen}) => (isOpen ? '0' : '-100%')};;
    }
`

const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`;
const CloseIcon = styled(FaTimes)`
    color: #000d1a;

`;
const DropdownWrapper = styled.div``;
const DropdownMenu = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4,80px);
    text-align: center;
    margin-bottom: 4rem;

    @media screen and (max-width: 480px){
        grid-template-rows: repeat(4,60px);
    }

`;
const DropdownLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: 500;
    text-style: none;
    cursor: pointer;
    transition: .2s ease-in-out;

    &:hover{
        color: #000d1a;
    }

`;
const BtnWrapper = styled.div`
    display: flex;
    justify-content: center;
`;


const Dropdown = ({isOpen, toggle}) => {
    return (
        <DropDownContainer isOpen = {isOpen} onClick = {toggle}>
            <Icon onClick = {toggle}>
                <CloseIcon/>
            </Icon>
            <DropdownWrapper>
                <DropdownMenu>
                    {menuData.map((items, index) => {
                        return (
                            <DropdownLink to = {items.link} key = {index} >
                                {items.title}
                            </DropdownLink>
                        );
                    })}
                </DropdownMenu>
                <BtnWrapper>
                    <Button primary = 'true' big = 'true' to = "/contact" >
                        Contact us
                    </Button>
                </BtnWrapper>
            </DropdownWrapper>
        </DropDownContainer>
    )
}

export default Dropdown
