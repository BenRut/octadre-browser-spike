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
	background-color: ${(props) => (props.checked ? '#FFFFFF' : props.color)};
	border: solid white 4px;
`;

const SideButtonContainer = styled.div`
	font-size: 10px;
	position: relative;
	height: 60px;
	width: 60px;
	margin: 5px;
	background-color: ${(props) => (props.isActive ? props.color : '#000')};
	border: solid white 4px;
`;

const Launchpad = styled.div`
	width: 630px;
	display: flex;
	flex-wrap: wrap;
`;

const LaunchpadContainer = styled.div`
	display: flex;
`;

const SideButtonsContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

const TopButtonsContainer = styled.div`
	display: flex;
`;

export {
	CheckBox,
	PadContainer,
	CheckMark,
	Launchpad,
	SideButtonContainer,
	LaunchpadContainer,
	SideButtonsContainer,
};
