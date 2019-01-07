import styled from 'styled-components';

export const StyledGame=styled.div`
display: flex;
flex-direction: row;
`;
export const StyledGameInfo = styled.span`
margin-left: 20px;
`;
export const StyledLink= styled.div`
color:blue;
margin-top:10px;
&:hover{
    cursor:pointer;
    text-decoration:underline;
    font-wight:bold;
}
`;