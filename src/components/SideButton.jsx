import React, { Component } from 'react';
import { CheckBox, SideButtonContainer } from '../styles/Interface';

class SideButton extends Component {
	state = {
		checked: false,
	};
	handlePress = (e) => {
		this.setState({ checked: !this.state.checked });
	};

	render() {
		return (
			<>
				<SideButtonContainer
					checked={this.state.checked}
					onClick={() => this.props.changeActiveTrack(this.props.index)}
					color={this.props.color}
					isActive={this.props.activeTrack === this.props.index ? true : false}
				>
					<CheckBox />
				</SideButtonContainer>
			</>
		);
	}
}

export default SideButton;
