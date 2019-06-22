import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../src/logo.svg';
import styled from 'styled-components';
import { ButtonContainer } from './Button';

class NavBar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm bg-primary navbar-dark px-sm-5">
                <Link to='/'>
                    <img src={logo} alt="store" className="navbar-brand" />
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className='nav-item ml-5'>
                        <Link to='/' className='nav-link' >Products</Link>
                    </li>
                </ul>
                <Link to='/cart' className="ml-auto" >
                    <ButtonContainer>
                        <i className="fas fa-cart-plus" />
                        my cart
                    </ButtonContainer>
                </Link>
            </NavWrapper>
        )
    }
}

export default NavBar;

const NavWrapper = styled.nav`

background: var(--mainBlue);
.nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize !important;
}

`;
