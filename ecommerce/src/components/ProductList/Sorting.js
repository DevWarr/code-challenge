import React from 'react';

export default function Sorting({ setSorting, setRange, resultCount, currentCount }) {
	const onChangeSorting = (e) => {
		const option = e.target.value;
		if (option.includes('Date')) {
			setSorting(1);
		} else if (option.match(/price.+low.+high/i)) {
			setSorting(2);
		} else if (option.match(/price.+high.+low/i)) {
			setSorting(3);
		} else {
			setSorting(0);
		}
	};

	const onChangePriceRange = (e) => {
		const range = e.target.value.split('-');
		setRange([
			Number(range[0]) || 0, 
			Number(range[1]) || Infinity
		]);
	};

	return (
		<div className="flex-sb-m flex-w p-b-35">
			<div className="flex-w">
				<div className="rs2-select2 bo4 of-hidden w-size12 m-t-5 m-b-5 m-r-10">
					<select className="selection-2" name="sorting" onChange={onChangeSorting}>
						<option>Default Sorting</option>
						<option>Date</option>
						<option>Price: low to high</option>
						<option>Price: high to low</option>
					</select>
				</div>

				<div className="rs2-select2 bo4 of-hidden w-size12 m-t-5 m-b-5 m-r-10">
					<select className="selection-2" name="sorting" onChange={onChangePriceRange}>
						<option value="">Price</option>
						<option value="0-50">$0.00 - $50.00</option>
						<option value="50-100">$50.00 - $100.00</option>
						<option value="100-150">$100.00 - $150.00</option>
						<option value="150-200">$150.00 - $200.00</option>
						<option value="200-">$200.00+</option>
					</select>
				</div>
			</div>

			<span className="s-text8 p-t-5 p-b-5">Showing {currentCount} of {resultCount} results</span>
		</div>
	);
}
