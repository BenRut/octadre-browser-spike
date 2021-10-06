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
			[0, 4],
			[1, 5],
			[2, 6],
			[3, 7],
			[4, 7],
			[5, 6],
			[6, 5],
			[7, 4],
			[7, 3],
			[6, 2],
			[5, 1],
			[4, 0],
			[3, 0],
			[2, 1],
			[1, 2],
			[0, 3],
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
	};
	createLaunchpad = () => {
		const pads = [];
		for (let i = 0; i < 8; i++) {
			for (var j = 0; j < 8; j++) {
				pads.push(
					<Pad
						row={i}
						column={j}
						color={this.state.color[this.state.activeTrack]}
					/>
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
