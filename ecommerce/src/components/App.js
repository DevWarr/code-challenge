import React from 'react';
import { Route } from 'react-router-dom';
import ProductList from './ProductList';
import SingleProduct from './SingleProduct';
import Header from './Header';
import Footer from './Footer';

function App() {
	const [products, setProducts] = React.useState([]);

	return (
		<div className="animsition">
			<Header />
			<Route exact path="/" render={() => <ProductList products={products} setProducts={setProducts} />} />
			<Route path="/product-detail/:id" render={() => <SingleProduct products={products} />} />
			<Footer />
		</div>
	);
}

export default App;
