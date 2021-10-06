import styled, { keyframes } from 'styled-components';

const CheckBox = styled.input`
	/* position: absolute; */
	opacity: 0;
	cursor: pointer;
	height: 0;
	width: 0;
`;

const CheckMark = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	transform: translate(-50%, -50%);
	height: 100%;
	width: 100%;
`;

const PadContainer = styled.div`
	font-size: 10px;
	position: relative;
	height: 60px;
	width: 60px;
	margin: 5px;
	background-color: ${(props) => (props.checked ? '#FFFFFF' : '#000000')};
	border: solid white 4px;
`;

const Launchpad = styled.div`
	width: 700px;
	display: flex;
	flex-wrap: wrap;
`;

export { CheckBox, PadContainer, CheckMark, Launchpad };
