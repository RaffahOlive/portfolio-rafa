import styled from 'styled-components';

export const Header = styled.header`
background: #111A23;
`;

export const Nav = styled.nav`

`;

export const Ul = styled.ul`
text-align: center;
`;

export const Li = styled.li`
display: inline-block;
list-style: none;
margin: 10px 20px 10px 0;
    a {
        text-decoration: none;
        color: white;
        font-size: large;

        transition: .5s;
    }

    a:hover {
        color: #A9C4E4;
     }
`;