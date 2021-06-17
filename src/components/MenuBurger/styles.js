import styled from 'styled-components';

export const ContainerHambur = styled.div`
	display: flex;
	margin: 200px;
`;

export const ButtonMenu = styled.button`
	height: 50px;
	width: 50px;
	padding: 10px;
	background-color: #2c3e50;
	border: none;
	color: white;
	font-size: 23px;
	border-radius: 5px;
	cursor: pointer;
`;

export const NavMenu = styled.nav`
	background-color: #8e44ad;
	width: 250px;
	/* transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
   */
	opacity: ${(props) => (props.open ? 1 : 0)};
	/* opacity: 1; */
`;
