export default class Controller {
	constructor(model, view) {

		this.model = model;
		this.view = view;

		this.currencyList = [
			{
				name: 'USD',
				value: 0
			},
			{
				name: 'EUR',
				value: 0
			},
		];

		this.model.takeCurrency()
			.then(data => this.currencyList = this.model.adapter(data))
			.then(res => res.map(i => { this.view.addCurrency(i.name, i.value) }));
	}
}