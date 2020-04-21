import React from 'react';
import { Link } from 'react-router-dom';
import { logo, iconHeader01, iconHeader02 } from '../../images/icons';
import Cart from './Cart';

export default function HeaderDesktop({ toggleCart, isCartVisible }) {
	return (
		<div className="container-menu-header">
			<div className="topbar">
				<div className="topbar-social">
					<a href="#" className="topbar-social-item fa fa-facebook"></a>
					<a href="#" className="topbar-social-item fa fa-instagram"></a>
					<a href="#" className="topbar-social-item fa fa-pinterest-p"></a>
					<a href="#" className="topbar-social-item fa fa-snapchat-ghost"></a>
					<a href="#" className="topbar-social-item fa fa-youtube-play"></a>
				</div>

				<span className="topbar-child1">Free shipping for standard order over $100</span>

				<div className="topbar-child2">
					<span className="topbar-email">fashe@example.com</span>

					<div className="topbar-language rs1-select2">
						<select className="selection-1" name="time">
							<option>USD</option>
							<option>EUR</option>
						</select>
					</div>
				</div>
			</div>

			<div className="wrap_header">
				{/* <!-- Logo --> */}
				<Link to="/" className="logo">
					<img src={logo} alt="FASCHE-LOGO" />
				</Link>

				{/* <!-- Menu --> */}
				<div className="wrap_menu">
					<nav className="menu">
						<ul className="main_menu">
							<li>
								<Link to="/">Home</Link>
								<ul className="sub_menu">
									<li>
										<Link to="/">Homepage V1</Link>
									</li>
									<li>
										<a href="#">Homepage V2</a>
									</li>
									<li>
										<a href="#">Homepage V3</a>
									</li>
								</ul>
							</li>

							<li>
								<a href="product.html">Shop</a>
							</li>

							<li className="sale-noti">
								<a href="product.html">Sale</a>
							</li>

							<li>
								<a href="cart.html">Features</a>
							</li>

							<li>
								<a href="blog.html">Blog</a>
							</li>

							<li>
								<a href="about.html">About</a>
							</li>

							<li>
								<a href="contact.html">Contact</a>
							</li>
						</ul>
					</nav>
				</div>

				{/* <!-- Header Icon --> */}
				<div className="header-icons">
					<a href="#" className="header-wrapicon1 dis-block">
						<img src={iconHeader01} className="header-icon1" alt="Profile" />
					</a>

					<span className="linedivide1"></span>

					<div onClick={() => toggleCart((oldTogg) => !oldTogg)} className="header-wrapicon2">
						<img src={iconHeader02} className="header-icon1 js-show-header-dropdown" alt="ICON" />
						<span className="header-icons-noti">0</span>

						<Cart showCart={isCartVisible} />
					</div>
				</div>
			</div>
		</div>
	);
}
