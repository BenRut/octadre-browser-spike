import React, { Component } from 'react';
import Pad from './Pad';
import { Launchpad } from '../styles/Interface';

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
	};
	createLaunchpad = () => {
		const pads = [];
		for (let i = 0; i < 8; i++) {
			for (var j = 0; j < 8; j++) {
				pads.push(<Pad row={i} column={j} />);
			}
		}
		return pads;
	};

	count(i = 0, direction = 1) {
		i += direction;
		console.log();
		direction *= i % 8 == 0 ? -1 : 1;
	}
	render() {
		return (
			<>
				<Launchpad>{this.createLaunchpad()}</Launchpad>
			</>
		);
	}
}

export default Interface;
