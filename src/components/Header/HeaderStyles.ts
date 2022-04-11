import styled from 'styled-components'

export const HeaderNav = styled.header`
div{
    display:inline-block;
    margin-top: 10px;
}
a{
    text-decoration: none;
    color: #d9cff3;
    margin-left: 10px;
    font-size:larger;

}
a:hover{
        color:#888d99;
        transition: 0.2s;
    }
`;

export const MainDiv = styled.div`

`;

export const LinksDiv = styled.div`
    padding-left: 500px;
    @media screen and (max-width: 960px) {
		padding-left: 60px;
	}
`;

export const IconsDiv = styled.div`
    padding-left: 500px;
    @media screen and (max-width: 960px) {
		padding-left: 10px;
	}
`;