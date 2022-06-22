import React from 'react';
import { Link } from 'react-router-dom';
import { Wrapper, Content, LogoImg, TMDBLogoImg } from './Header.style';
import RMDBLogo from '../../images/react-movie-logo.svg';
import TMDBLogo from '../../images/tmdb_logo.svg';

export default function Header() {
    return (
        <Wrapper>
            <Content>
                <Link to="/">
                    <LogoImg src={RMDBLogo} alt="rmdb-logo" />
                </Link>
                <TMDBLogoImg src={TMDBLogo} alt="tmdb-logo" />
            </Content>
        </Wrapper>
    )
}
