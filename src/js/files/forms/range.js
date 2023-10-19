// Подключение из node_modules
import * as noUiSlider from 'nouislider';

// Подключение стилей из scss/base/forms/range.scss 
// в файле scss/forms/forms.scss

// Подключение cтилей из node_modules
// import 'nouislider/dist/nouislider.css';

export function rangeInit() {
	const rangeItems = document.querySelectorAll('[data-range]');
	if (rangeItems.length) {
		rangeItems.forEach(rangeItem => {
			const fromValue = rangeItem.querySelector('[data-range-from]');
			const toValue = rangeItem.querySelector('[data-range-to]');
			var inputs = [fromValue, toValue];
			const item = rangeItem.querySelector('[data-range-item]');


			noUiSlider.create(item, {
				start: [Number(fromValue.value), Number(toValue.value)], // [0,200000]
				connect: true,
				range: {
					'min': [Number(fromValue.dataset.rangeFrom)],
					'max': [Number(toValue.dataset.rangeTo)]
				},
				format: wNumb({
					decimals: 0
				}),
			});
			item.noUiSlider.on('update', function (values, handle) {
				inputs[handle].value = Math.floor(values[handle]);
			});

			fromValue.addEventListener('change', function () {
				item.noUiSlider.set([this.value, null]);
			});
			toValue.addEventListener('change', function () {
				item.noUiSlider.set([null, this.value]);
			});
		});
	}
}
rangeInit();

