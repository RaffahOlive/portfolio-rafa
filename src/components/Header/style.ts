import styled from 'styled-components';

export const Header = styled.header`
    background: #111A23;
`;

export const Nav = styled.nav`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 8vh;
        ul{
            list-style: none;
            display: flex;
            li{
                letter-spacing: 3px;
                margin-left: 32px;
                padding-right: 128px;
            }
        }
        a{
            margin-left: 5px
        }
    }
    @media(max-width: 999px) {
        position: absolute;
        top: 8vh;
        right: 0;
        width: 50vh;
        background: #111A23;
`;

