import React from 'react';
import { Route } from 'react-router-dom';
import ProductList from './ProductList';
import SingleProduct from './SingleProduct';
import Header from './Header';
import Footer from './Footer';

function App() {
	const [products, setProducts] = React.useState([]);

	// 0 - Default
	// 1 - Date newest to oldest
	// 2 - Price low to high
	// 3 - Price high to low
	const [sorting, setSorting] = React.useState(0);

	const [range, setRange] = React.useState([0, Infinity]);

	const sortedProducts = () => {
		if (sorting === 1) {
			return products.sort((a, b) => new Date(a.registered) - new Date(b.registered));
		} else if (sorting === 2) {
			return products.sort((a, b) => a.price - b.price);
		} else if (sorting === 3) {
			return products.sort((a, b) => b.price - a.price);
		} else return products;
	};

	const filterProducts = () => {
		const sorted = sortedProducts();
		return sorted.filter((prod) => range[0] < prod.price && prod.price < range[1]);
	};

	return (
		<div className="animsition">
			<Header />
			<Route
				exact
				path="/"
				render={() => (
					<ProductList
						allProducts={products}
						products={filterProducts()}
						setProducts={setProducts}
						setSorting={setSorting}
						setRange={setRange}
					/>
				)}
			/>
			<Route path="/product-detail/:id" render={() => <SingleProduct products={products} />} />
			<Footer />
		</div>
	);
}

export default App;
