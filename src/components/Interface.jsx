import React, { Component } from 'react';
import Pad from './Pad';
import SideButton from './SideButton';
import {
	Launchpad,
	SideButtonContainer,
	SideButtonsContainer,
	LaunchpadContainer,
} from '../styles/Interface';
import { getQueriesForElement } from '@testing-library/dom';

class Interface extends Component {
	state = {
		sequencerPath: [
			'04',
			'15',
			'26',
			'37',
			'47',
			'56',
			'65',
			'74',
			'73',
			'62',
			'51',
			'40',
			'30',
			'21',
			'12',
			'03',
		],
		color: {
			0: 'green',
			1: 'yellow',
			2: 'magenta',
			3: 'cyan',
			4: 'pink',
			5: 'beige',
			6: 'purple',
			7: 'blue',
		},
		activeTrack: 0,
		activeStep: 0,
	};

	returnPadColor = (coordinatesString) => {
		if (this.state.sequencerPath[this.state.activeStep] === coordinatesString) {
			return '#FFFFFF';
		}
		if (this.state.sequencerPath.includes(coordinatesString)) {
			return this.state.color[this.state.activeTrack];
		} else {
			return '#000';
		}
	};

	createLaunchpad = () => {
		const pads = [];

		for (let i = 0; i < 8; i++) {
			for (var j = 0; j < 8; j++) {
				pads.push(
					<Pad row={i} column={j} color={this.returnPadColor(`${i}${j}`)} />
				);
			}
		}
		return pads;
	};

	changeActiveTrack = (i) => {
		this.setState({ activeTrack: i });
	};

	createSideButtons = () => {
		const sideButtons = [];
		for (let i = 0; i < 8; i++) {
			sideButtons.push(
				<SideButton
					index={i}
					color={this.state.color[this.state.activeTrack]}
					activeTrack={this.state.activeTrack}
					changeActiveTrack={this.changeActiveTrack}
				/>
			);
		}
		return sideButtons;
	};

	count(i = 0, direction = 1) {
		i += direction;
		console.log();
		direction *= i % 8 == 0 ? -1 : 1;
	}
	render() {
		return (
			<>
				<LaunchpadContainer>
					<Launchpad>{this.createLaunchpad()}</Launchpad>
					<SideButtonsContainer>
						{this.createSideButtons()}
					</SideButtonsContainer>
				</LaunchpadContainer>
			</>
		);
	}
}

export default Interface;
