import './App.css';
import React, { Component } from 'react';
import Interface from './components/Interface';
import { ThemeProvider } from 'styled-components';

import { AppContainer } from './styles/Core';

class App extends Component {
	state = {
		theme: {},
	};
	render() {
		return (
			<div className="App">
				<ThemeProvider theme={this.state.theme}>
					<AppContainer>
						<Interface />
					</AppContainer>
				</ThemeProvider>
			</div>
		);
	}
}

export default App;
