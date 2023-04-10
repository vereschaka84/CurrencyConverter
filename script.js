import View from './mvc/view.js';
import Controller from './mvc/controller.js';
import Model from './mvc/model.js';

document.addEventListener('DOMContentLoaded', () => {
	new Controller(new Model(), new View());
})

console.log(1);