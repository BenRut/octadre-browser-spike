import React, { Component } from 'react';
import { CheckBox, PadContainer, CheckMark } from '../styles/Interface';

class Pad extends Component {
	state = {
		checked: false,
		color: '',
	};
	handlePress = (e) => {
		this.setState({ checked: !this.state.checked });
	};

	render() {
		return (
			<>
				<PadContainer checked={this.state.checked} onClick={this.handlePress}>
					<CheckBox />
					<p>Row:{this.props.row}</p>
					<p>Column{this.props.column}</p>
				</PadContainer>
			</>
		);
	}
}

export default Pad;
