// userType, 0 = normal, 1 = company
// productType, 0 = new product, 1 = old product
// price, the price of the product

function calculatePrice(userType, productType, price, publishDate) {
	try {
		const priceWithUserRebate = handleUser(userType, price);
		const calculatedPrice = handleProductType(productType, priceWithUserRebate, publishDate)
		return calculatedPrice;
	} catch (ex) {
		console.log(ex)
	}
	return 0;

	function handleProductType(product, price, publishDate) {
		switch (product) {
			case productTypes.NEW:
				let newPrice = 25;
				if (isToday(publishDate)) {
					newPrice -= 10;
				}
				return price + newPrice;
			case productTypes.OLD:
				return price + 35;
			default:
				throw "Unsupported product type";
		}
	}

	function handleUser(user, price) {
		switch (user) {
			case userTypes.NORMAL:
				return price;
			case userTypes.COMPANY:
				return price - 5;
			default:
				throw "Unsupported user type"
		}
	}

	function isToday(date) {
		return date.toDateString() === new Date().toDateString()
	}
}