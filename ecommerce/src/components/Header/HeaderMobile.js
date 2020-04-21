import React from 'react';
import { logo, iconHeader01, iconHeader02 } from '../../images/icons';
import { itemCart02, itemCart01, itemCart03 } from '../../images';

export default function HeaderMobile() {
	return (
		<div className="wrap_header_mobile">
			{/* <!-- Logo moblie --> */}
			<a href="index.html" className="logo-mobile">
				<img src={logo} alt="IMG-LOGO" />
			</a>

			{/* <!-- Button show menu --> */}
			<div className="btn-show-menu">
				{/* <!-- Header Icon mobile --> */}
				<div className="header-icons-mobile">
					<a href="#" className="header-wrapicon1 dis-block">
						<img src={iconHeader01} className="header-icon1" alt="ICON" />
					</a>

					<span className="linedivide2"></span>

					<div className="header-wrapicon2">
						<img src={iconHeader02} className="header-icon1 js-show-header-dropdown" alt="ICON" />
						<span className="header-icons-noti">0</span>

						{/* <!-- Header cart noti --> */}
						<div className="header-cart header-dropdown">
							<ul className="header-cart-wrapitem">
								<li className="header-cart-item">
									<div className="header-cart-item-img">
										<img src={itemCart01} alt="IMG" />
									</div>

									<div className="header-cart-item-txt">
										<a href="#" className="header-cart-item-name">
											White Shirt With Pleat Detail Back
										</a>

										<span className="header-cart-item-info">1 x $19.00</span>
									</div>
								</li>

								<li className="header-cart-item">
									<div className="header-cart-item-img">
										<img src={itemCart02} alt="IMG" />
									</div>

									<div className="header-cart-item-txt">
										<a href="#" className="header-cart-item-name">
											Converse All Star Hi Black Canvas
										</a>

										<span className="header-cart-item-info">1 x $39.00</span>
									</div>
								</li>

								<li className="header-cart-item">
									<div className="header-cart-item-img">
										<img src={itemCart03} alt="IMG" />
									</div>

									<div className="header-cart-item-txt">
										<a href="#" className="header-cart-item-name">
											Nixon Porter Leather Watch In Tan
										</a>

										<span className="header-cart-item-info">1 x $17.00</span>
									</div>
								</li>
							</ul>

							<div className="header-cart-total">Total: $75.00</div>

							<div className="header-cart-buttons">
								<div className="header-cart-wrapbtn">
									{/* <!-- Button --> */}
									<a href="cart.html" className="flex-c-m size1 bg1 bo-rad-20 hov1 s-text1 trans-0-4">
										View Cart
									</a>
								</div>

								<div className="header-cart-wrapbtn">
									{/* <!-- Button --> */}
									<a href="#" className="flex-c-m size1 bg1 bo-rad-20 hov1 s-text1 trans-0-4">
										Check Out
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="btn-show-menu-mobile hamburger hamburger--squeeze">
					<span className="hamburger-box">
						<span className="hamburger-inner"></span>
					</span>
				</div>
			</div>
		</div>
	);
}
