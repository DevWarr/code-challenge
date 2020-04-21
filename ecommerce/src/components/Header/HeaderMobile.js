import React from 'react';
import { logo, iconHeader01, iconHeader02 } from '../../images/icons';
import { itemCart02, itemCart01, itemCart03 } from '../../images';
import Cart from './Cart';

export default function HeaderMobile({ toggleCart, isCartVisible }) {
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

						<Cart showCart={isCartVisible}/>
					</div>
				</div>

				<div
					onClick={() => toggleCart((oldTogg) => !oldTogg)}
					className="btn-show-menu-mobile hamburger hamburger--squeeze"
				>
					<i className="hamburger-inner fa fa-bars" />
				</div>
			</div>
		</div>
	);
}
