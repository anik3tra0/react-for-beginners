import React from 'react';
import { getFunName } from '../helpers'

class StorePicker extends React.Component {

	goToStore(event) {
		event.preventDefault();
		console.log("Noe You See Me!");
		// Two Things
		// 	Grab Input Value
		const storeId = this.storeInput.value;
		// 	Redirect to store with store id
		this.context.router.transitionTo(`/store/${ storeId }`)
	}

	render() {
		// Always comment outside of JSX
		return (
			<form className="store-selector" onSubmit={this.goToStore.bind(this)}>
				<h2>Please Enter A Store</h2>
				<input type="text" required placeholder="Store Name" defaultValue={getFunName()} ref={(input) => { this.storeInput = input}} />
				<button type="submit">Visit Store -></button>
			</form>
		)

	}
}

StorePicker.contextTypes = {
	router: React.PropTypes.object
}

export default StorePicker;
