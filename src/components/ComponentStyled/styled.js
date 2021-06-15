import styled from 'styled-components';

export const Container = styled.div`
	background-color: #a066ff;
	padding: 10px;
	display: flex;
	justify-content: space-evenly;
`;

export const Button = styled.button`
	background-color: #ecf0f1;
	border-radius: 3px;
	width: 80px;
	height: 40px;
	border-style: none;
	font-size: 12px;
	transition: all 0.2s ease-in-out;

	&:hover {
		border: 2px solid #e74c3c;
		box-shadow: 1px 1px 10px 2px #fcfcfc;
		background-color: #2ecc71;
		color: white;
		font-size: 18px;
		font-weight: bold;
	}
`;

export const Box = styled.div`
	background-color: #2ecc71;
	height: 300px;
	width: 300px;
	/* visibility: (({show}) => show ? 'visible': 'hidden'); */
`;
