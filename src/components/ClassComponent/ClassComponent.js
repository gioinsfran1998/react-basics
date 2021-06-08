import React, { Component } from 'react';

export default class ClassComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			contador: 0,
		};
	}

	componentDidMount() {
		console.log('Componente montado !');
		setInterval(() => {
			this.setState({
				contador: this.state.contador + 1,
			});
		}, 1000);
	}

	componentDidUpdate() {
		console.log('Component Actualizado');
	}

	render() {
		return (
			<>
				<h2>Class Component</h2>
				<p>{this.state.contador}</p>
			</>
		);
	}
}
