describe('price calculator', () => {
	const calculatePrice = initPriceCalculator(() => new Date());

	describe('normal customer', () => {
		const user = userTypes.NORMAL;

		it('should calculate price for new products without rebate', () => {
			const product = productTypes.NEW;
			const price = 1;
			const publishedDate = new Date(2019, 01, 01);

			const expected = 26;
			const actual = calculatePrice(user, product, price, publishedDate);
			expect(expected).to.equal(actual);
		});

		it('should calculate price for new products with rebate', () => {
			const product = productTypes.NEW;
			const price = 5;
			const publishedDate = new Date();

			const expected = 20;
			const actual = calculatePrice(user, product, price, publishedDate);
			expect(expected).to.equal(actual);

		});

		it('should calculate price for old products', () => {
			const product = productTypes.OLD;
			const price = 3;
			const publishedDate = new Date();

			const expected = 38;
			const actual = calculatePrice(user, product, price, publishedDate);
			expect(expected).to.equal(actual);
		});
	});

	describe('company customer', () => {
		const user = userTypes.COMPANY;

		it('should calculate price for new products without rebate', () => {
			const product = productTypes.NEW;
			const price = 10;
			const publishedDate = new Date(2019, 01, 01);

			const expected = 30;
			const actual = calculatePrice(user, product, price, publishedDate);
			expect(expected).to.equal(actual);
		});

		it('should calculate price for new products with rebate', () => {
			const product = productTypes.NEW;
			const price = 1;
			const publishedDate = new Date();

			const expected = 11;
			const actual = calculatePrice(user, product, price, publishedDate);
			expect(expected).to.equal(actual);
		});

		it('should calculate price for old products', () => {
			const product = productTypes.OLD;
			const price = 2;
			const publishedDate = new Date();

			const expected = 32;
			const actual = calculatePrice(user, product, price, publishedDate);
			expect(expected).to.equal(actual);
		});
	})
});