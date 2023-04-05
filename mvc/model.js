export default class Model {

	adapter(data) {
		let modifiedData = data.map(currency => {
			return {
				name: currency.cc,
				value: currency.rate
			}
		})
		return modifiedData;
	}

	takeCurrency() {
		return fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')
			.then(resp => resp.json());
	}
}