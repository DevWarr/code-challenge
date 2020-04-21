import React from 'react';
import axios from 'axios';
import { useRouteMatch } from 'react-router-dom';
import ProductCard from '../ProductList/ProductCard';

export default function SingleProduct({ products }) {
	const [oneProduct, setOneProduct] = React.useState({});
	const [dropDown, setDropDown] = React.useState({ description: false, info: false, reviews: false });
	const [quantity, setQuantity] = React.useState(1);

	const match = useRouteMatch();
	const guid = match.params.id;

	React.useEffect(() => {
		const singleProd = products.find((prod) => prod.guid === guid);
		if (singleProd) {
			setOneProduct(singleProd);
		} else {
			axios
				.get(`http://localhost:3333/products/${guid}`)
				.then((res) => {
					setOneProduct(res.data);
					console.log(res.data);
				})
				.catch((err) => {
					console.log(err);
				});
		}
	}, []);

	const toggleDropDown = (key) => {
		setDropDown((oldDropDown) => ({ ...oldDropDown, [key]: !oldDropDown[key] }));
	};

	const changeQuantity = (val) => {
		if (Number(val) !== NaN && typeof val === 'string') {
			setQuantity(Number(val));
		} else if (quantity + val > 0) {
			setQuantity((oldQuantity) => oldQuantity + val);
		}
	};

	return (
		<div>
			{/* <!-- breadcrumb --> */}
			<div className="bread-crumb bgwhite flex-w p-l-52 p-r-15 p-t-30 p-l-15-sm">
				<a href="index.html" className="s-text16">
					Home
					<i className="fa fa-angle-right m-l-8 m-r-9" aria-hidden="true"></i>
				</a>

				<a href="product.html" className="s-text16">
					Women
					<i className="fa fa-angle-right m-l-8 m-r-9" aria-hidden="true"></i>
				</a>

				<a href="#" className="s-text16">
					T-Shirt
					<i className="fa fa-angle-right m-l-8 m-r-9" aria-hidden="true"></i>
				</a>

				<span className="s-text17">Boxy T-Shirt with Roll Sleeve Detail</span>
			</div>

			{/* <!-- Product Detail --> */}
			<div className="container bgwhite p-t-35 p-b-80">
				<div className="flex-w flex-sb">
					<div className="w-size13 p-t-30 respon5">
						<div className="wrap-slick3 flex-sb flex-w">
							<div className="item-slick3 main" data-thumb="images/thumb-item-01.jpg">
								<div className="wrap-pic-w">
									<img src={oneProduct?.image} alt={oneProduct?.name} />
								</div>
							</div>

							<div className="slick3">
								<div className="item-slick3" data-thumb="images/thumb-item-01.jpg">
									<div className="wrap-pic-w">
										<img src={oneProduct?.image} alt={oneProduct?.name} />
									</div>
								</div>

								<div className="item-slick3" data-thumb="images/thumb-item-02.jpg">
									<div className="wrap-pic-w">
										<img src={oneProduct?.image} alt={oneProduct?.name} />
									</div>
								</div>

								<div className="item-slick3" data-thumb="images/thumb-item-03.jpg">
									<div className="wrap-pic-w">
										<img src={oneProduct?.image} alt={oneProduct?.name} />
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="w-size14 p-t-30 respon5">
						<h4 className="product-detail-name m-text16 p-b-13">{oneProduct?.name}</h4>

						<span className="m-text17">{`$${oneProduct?.price}` || null}</span>

						<p className="s-text8 p-t-10">{oneProduct?.about || null}</p>

						{/* <!--  --> */}
						<div className="p-t-33 p-b-60">
							<div className="flex-m flex-w p-b-10">
								<div className="s-text15 w-size15 t-center">Size</div>

								<div className="rs2-select2 rs3-select2 bo4 of-hidden w-size16">
									<select className="selection-2" name="size">
										<option>Choose an option</option>
										<option>Size S</option>
										<option>Size M</option>
										<option>Size L</option>
										<option>Size XL</option>
									</select>
								</div>
							</div>

							<div className="flex-m flex-w">
								<div className="s-text15 w-size15 t-center">Color</div>

								<div className="rs2-select2 rs3-select2 bo4 of-hidden w-size16">
									<select className="selection-2" name="color">
										<option>Choose an option</option>
										<option>Gray</option>
										<option>Red</option>
										<option>Black</option>
										<option>Blue</option>
									</select>
								</div>
							</div>

							<div className="flex-r-m flex-w p-t-10">
								<div className="w-size16 flex-m flex-w">
									<div className="flex-w bo5 of-hidden m-r-22 m-t-10 m-b-10">
										<button
											onClick={() => changeQuantity(-1)}
											className="btn-num-product-down color1 flex-c-m size7 bg8 eff2"
										>
											<i className="fs-12 fa fa-minus" aria-hidden="true"></i>
										</button>

										<input
											className="size8 m-text18 t-center num-product"
											type="number"
											name="num-product"
											value={quantity}
											onChange={(e) => changeQuantity(e.target.value)}
										/>

										<button
											onClick={() => changeQuantity(1)}
											className="btn-num-product-up color1 flex-c-m size7 bg8 eff2"
										>
											<i className="fs-12 fa fa-plus" aria-hidden="true"></i>
										</button>
									</div>

									<div className="btn-addcart-product-detail size9 trans-0-4 m-t-10 m-b-10">
										{/* <!-- Button --> */}
										<button className="flex-c-m sizefull bg1 bo-rad-23 hov1 s-text1 trans-0-4">
											Add to Cart
										</button>
									</div>
								</div>
							</div>
						</div>

						<div className="p-b-45">
							<span className="s-text8 m-r-35">SKU: MUG-01</span>
							<span className="s-text8">Categories: Mug, Design</span>
						</div>

						{/* <!--  --> */}
						<div className="wrap-dropdown-content bo6 p-t-15 p-b-14 active-dropdown-content">
							<h5
								onClick={() => toggleDropDown('description')}
								className="js-toggle-dropdown-content flex-sb-m cs-pointer m-text19 color0-hov trans-0-4"
							>
								Description
								<i className="down-mark fs-12 color1 fa fa-minus dis-none" aria-hidden="true"></i>
								<i className="up-mark fs-12 color1 fa fa-plus" aria-hidden="true"></i>
							</h5>

							<div className={`dropdown-content p-t-15 p-b-23 ${dropDown.description ? '' : 'dis-none'}`}>
								<p className="s-text8">
									Fusce ornare mi vel risus porttitor dignissim. Nunc eget risus at ipsum blandit
									ornare vel sed velit. Proin gravida arcu nisl, a dignissim mauris placerat
								</p>
							</div>
						</div>

						<div className="wrap-dropdown-content bo7 p-t-15 p-b-14">
							<h5
								onClick={() => toggleDropDown('info')}
								className="js-toggle-dropdown-content flex-sb-m cs-pointer m-text19 color0-hov trans-0-4"
							>
								Additional information
								<i className="down-mark fs-12 color1 fa fa-minus dis-none" aria-hidden="true"></i>
								<i className="up-mark fs-12 color1 fa fa-plus" aria-hidden="true"></i>
							</h5>

							<div className={`dropdown-content p-t-15 p-b-23 ${dropDown.info ? '' : 'dis-none'}`}>
								<p className="s-text8">
									Fusce ornare mi vel risus porttitor dignissim. Nunc eget risus at ipsum blandit
									ornare vel sed velit. Proin gravida arcu nisl, a dignissim mauris placerat
								</p>
							</div>
						</div>

						<div className="wrap-dropdown-content bo7 p-t-15 p-b-14">
							<h5
								onClick={() => toggleDropDown('reviews')}
								className="js-toggle-dropdown-content flex-sb-m cs-pointer m-text19 color0-hov trans-0-4"
							>
								Reviews (0)
								<i className="down-mark fs-12 color1 fa fa-minus dis-none" aria-hidden="true"></i>
								<i className="up-mark fs-12 color1 fa fa-plus" aria-hidden="true"></i>
							</h5>

							<div className={`dropdown-content p-t-15 p-b-23 ${dropDown.reviews ? '' : 'dis-none'}`}>
								<p className="s-text8">
									Fusce ornare mi vel risus porttitor dignissim. Nunc eget risus at ipsum blandit
									ornare vel sed velit. Proin gravida arcu nisl, a dignissim mauris placerat
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* <!-- Relate Product --> */}
			<section className="relateproduct bgwhite p-t-45 p-b-138">
				<div className="container">
					<div className="sec-title p-b-60">
						<h3 className="m-text5 t-center">Related Products</h3>
					</div>

					{/* <!-- Slide2 --> */}
					<div className="wrap-slick2">
						<div className="slick2">
							{products.length &&
								products
									.filter((prod, i) => i < 6)
									.map((prod) => {
										return (
											<div key={prod.guid} className="item-slick2 p-l-15 p-r-15">
												<ProductCard product={prod} />
											</div>
										);
									})}
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
