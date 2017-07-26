import React, { Component } from 'react'
class Ingredient extends Component {
		constructor(props) {
			super(props);

		}
		addIngredients() {
			console.log("ingredient added")
			console.log(this.refs.quantity.value, this.refs.ingredient.value)

		}
	render() {
		return (
			<div className="form-inline form-group">
				<label htmlFor="quantity">Quantity</label>
				<input
					ref="quantity"
					type="text"
					className="form-control"
					id="Quantity"
					placeholder="Quantity" />
				<label htmlFor="ingredient">Ingredients</label>
				<input
					ref="ingredient"
					type="text"
					className="form-control"
					id="ingredient"
					placeholder="Ingredient" />
				<button type="button" onClick={() => this.addIngredients()} className="btn btn-info">Add</button>

			</div>

		)
	}
}

export default Ingredient;