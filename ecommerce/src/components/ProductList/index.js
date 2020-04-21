import React from 'react';
import { headingPages02 } from '../../images';
import Sorting from './Sorting';
import Filter from './Filter';
import ProductCard from './ProductCard';
import axios from 'axios';

export default function ProductList({ allProducts, products, setProducts, setSorting, setRange }) {
	React.useEffect(() => {
		axios
			.get('http://localhost:3333/products')
			.then((res) => {
				setProducts(res.data);
				console.log(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<div>
			{/* <!-- Title Page --> */}
			<section
				className="bg-title-page p-t-50 p-b-40 flex-col-c-m"
				style={{ backgroundImage: `url(${headingPages02})` }}
			>
				<h2 className="l-text2 t-center">Women</h2>
				<p className="m-text13 t-center">New Arrivals Women Collection 2018</p>
			</section>

			{/* <!-- Content page --> */}
			<section className="bgwhite p-t-55 p-b-65">
				<div className="container">
					<div className="row">
						<Filter />

						<div className="col-sm-6 col-md-8 col-lg-9 p-b-50">
							<Sorting
								setSorting={setSorting}
								setRange={setRange}
								resultCount={allProducts.length}
								currentCount={products.length}
							/>

							{/* <!-- Product --> */}
							<div className="row">
								{products.length
									? products.map((prod) => {
											return (
												<div key={prod.guid} className="col-sm-12 col-md-6 col-lg-4 p-b-50">
													<ProductCard product={prod} />
												</div>
											);
									  })
									: null}
							</div>

							{/* <!-- Pagination --> */}
							<div className="pagination flex-m flex-w p-t-26">
								<a href="#" className="item-pagination flex-c-m trans-0-4 active-pagination">
									1
								</a>
								<a href="#" className="item-pagination flex-c-m trans-0-4">
									2
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
