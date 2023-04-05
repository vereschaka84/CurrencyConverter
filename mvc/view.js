export default class View {
	addCurrency(name, currency) {
		document.querySelector('header').innerHTML +=
			`<h2 class="text-center mb-3">${name} currency: <span class="fw-bold">${currency}</span></h2>`;
	}
}