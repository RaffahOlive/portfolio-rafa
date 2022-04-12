import styled from 'styled-components'

export const HeaderNav = styled.header`
div{
    display:inline-block;
    margin-top: 10px;
}
`;

export const MainDiv = styled.div`
a{
    margin-left: 20px;
    text-decoration: none;
    color: white;
    font-size:larger;
}
a:hover{
        color:#ecb939;
        transition: 0.2s;
    }
`;

export const IconsDiv = styled.div`
    padding-left: 900px;
    @media screen and (max-width: 960px) {
		padding-left: 10px;
	}
`;