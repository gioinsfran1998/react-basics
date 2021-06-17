import styled from 'styled-components';
import { LineVertical } from '../../components/VerticalLine/styles';

export const ContainerDashboard = styled.div`
	background-color: #8d99ae;
	width: 1000px;
	/* min-height: 100vh; */
	margin: 0 auto;
	padding: 10px;
`;

export const ContainerMain = styled.div`
	background-color: #1e252f;
	width: 400px;
	padding: 10px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const DashLine = styled(LineVertical)`
	border-color: red;
`;
