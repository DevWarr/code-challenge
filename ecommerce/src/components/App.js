import React from 'react';
import { Route } from 'react-router-dom';
import ProductList from './ProductList';
import Header from './Header';
import Footer from './Footer';

function App() {
	return (
		<>
      <Header />
			<Route exact path="/" component={ProductList} />
			{/* <Route path="/product/:id" component={ProductView} /> */}
      <Footer />
		</>
	);
}

export default App;
