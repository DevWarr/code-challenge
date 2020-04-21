import React from 'react';
import HeaderDesktop from './HeaderDesktop';
import HeaderMobile from './HeaderMobile';
import MenuMobile from './MenuMobile';

export default function Header() {
	const [isMenuVisible, toggleIsMenuVisible] = React.useState(false);
	const [isCartVisible, toggleIsCartVisible] = React.useState(false);

	return (
		<header className="header1">
			<HeaderDesktop toggleCart={toggleIsCartVisible} isCartVisible={isCartVisible} />
			<HeaderMobile
				toggleCart={toggleIsCartVisible}
				isCartVisible={isCartVisible}
				toggleMenu={toggleIsMenuVisible}
			/>
			<MenuMobile showMenu={isMenuVisible} />
		</header>
	);
}
