import styled from 'styled-components';

export const ContainerAppBar = styled.div`
	background-color: #003566;
	padding: 10px;
	height: 60px;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	color: white;

	.ContainerTitle {
		padding: 10px;
	}
`;

export const ButtonMenu = styled.button`
	background-color: transparent;
	border: none;
	padding: 5px;
	width: 100%;
	height: 100%;
	max-width: 40px;
	max-height: 40px;
	font-size: 1.8rem;
	display: flex;
	justify-content: center;
	align-items: center;
	color: white;
	border-radius: 20px;

	&:hover {
		/* background-color: red; */
		box-shadow: 0px 0px 5px 0px #343a40;
		transition: ease 0.5s;
	}
`;
