import React from 'react';
import productData from '../data/product'
import ProductReview from './ProductReview'
import productInfo from './ProductsProps'


class productIndexPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			products: [...productData],
		};
	}
	deleteproduct(id) {
		console.log('id: ', id);
    console.log('this: ', this);
    
		this.setState((state, props) => {
			return {
				products: state.products.filter((q) => q.id !== id)
			};
		});
	}
	render() {
		return (
			<main className="productIndexPage">
				<h1>products</h1>
				<ul>
					{this.state.products.map((product, index) => (
						<li key={index}>
							<p>
								{product.title}
								<br />
								<small>Price {product.price}$ </small><br/>
								<small>Seller: {product.seller.full_name}</small>
								<button
									className="ui right floated red button"
									onClick={() => this.deleteproduct(product.id)}
								>
									Delete
								</button>
								{/* <DeleteButton onDeleteClick={() => this.deleteproduct(product.id)} /> */}
							</p>
							<p><ProductReview product ={productInfo}/></p>
						</li>
					))}
				</ul>
			</main>
		);
	}
}

export default productIndexPage;
