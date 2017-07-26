import React, { Component } from 'react'
import Navbar from './Navbar'
import Ingredient from './Ingredient'
class Submit extends Component {
	constructor(props) {
		super(props);

		this.state={};
	}
	submitRecipe() {
		console.log('submit recipe');
		console.log(this.refs.name.value, this.refs.desc.value,this.refs.quantity.value, this.refs.ingredient.value)
	}
	render() {
		return (
			<div>
				<Navbar />
				<div className="row">
					<div className="container">
						<h1>Submit</h1>

						<form>
							<div className="form-group">
								<label htmlFor="Name">Name</label>
								<input 
								ref="name"
								type="text" 
								className="form-control" 
								id="Name" 
								placeholder="Name" />
							</div>
							<div className="form-group">
								<label htmlFor="exampleInputPassword1">Description</label>
								<textarea
								ref="desc" 
								type="text" 
								className="form-control" 
								placeholder="enter a brief description" />
							</div>
							<Ingredient />

							<button type="button" onClick={() => this.submitRecipe()} className="btn btn-default">Submit</button>
						</form>
					</div>
				</div>
			</div>
		)
	}
}

export default Submit;