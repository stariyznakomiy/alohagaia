/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper from 'swiper';
import { Navigation, Pagination, FreeMode, Autoplay, EffectFade } from 'swiper/modules';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';
import "swiper/scss/effect-fade"
import "swiper/scss/autoplay"

// Инициализация слайдеров
function initSliders() {
	// Перечень слайдеров
	// Проверяем, есть ли слайдер на стронице

	const featuredSliders = document.querySelectorAll('.product-card-featured');
	if (featuredSliders) {
		for (let index = 0; index < featuredSliders.length; index++) {
			const slide = featuredSliders[index];
			slide.classList.add(`slider-id-${index}`);
			slide.querySelector('.swiper-wrapper').classList.add(`slider-wrapper-id-${index}`);

			if (document.querySelector('.product-card-featured__slider')) { // Указываем скласс нужного слайдера
				// Создаем слайдер
				new Swiper(`.product-card-featured.slider-id-${index} .product-card-featured__slider`, { // Указываем скласс нужного слайдера
					// Подключаем модули слайдера
					// для конкретного случая
					modules: [Navigation],
					observer: true,
					observeParents: true,
					slidesPerView: "auto",
					spaceBetween: 8,
					autoHeight: true,
					speed: 800,

					//touchRatio: 0,
					//simulateTouch: false,
					//loop: true,
					//preloadImages: false,
					//lazy: true,

					/*
					// Эффекты
					effect: 'fade',
					autoplay: {
						delay: 3000,
						disableOnInteraction: false,
					},
					*/

					// Пагинация
					/*
					pagination: {
						el: '.swiper-pagination',
						clickable: true,
					},
					*/

					// Скроллбар
					/*
					scrollbar: {
						el: '.swiper-scrollbar',
						draggable: true,
					},
					*/

					// Кнопки "влево/вправо"
					navigation: {
						prevEl: `.product-card-featured.slider-id-${index} .swiper-button-prev`,
						nextEl: `.product-card-featured.slider-id-${index} .swiper-button-next`,
					},

					// Брейкпоинты
					/*
					breakpoints: {
						320: {
							slidesPerView: 1,
							spaceBetween: 0,
							autoHeight: true,
						},
						768: {
							slidesPerView: 2,
							spaceBetween: 20,
						},
						992: {
							slidesPerView: 3,
							spaceBetween: 20,
						},
						1268: {
							slidesPerView: 4,
							spaceBetween: 30,
						},
					},
					*/
					// События
					on: {

					}
				});
			}
		}
	}

	const optionsSliders = document.querySelectorAll('.product-card-options_slider');
	if (optionsSliders) {
		for (let index = 0; index < optionsSliders.length; index++) {
			const slide = optionsSliders[index];
			slide.classList.add(`slider-id-${index}`);
			slide.querySelector('.swiper-wrapper').classList.add(`slider-wrapper-id-${index}`);

			if (document.querySelector('.product-card-options__slider')) { // Указываем скласс нужного слайдера
				// Создаем слайдер
				new Swiper(`.product-card-options.slider-id-${index} .product-card-options__slider`, { // Указываем скласс нужного слайдера
					// Подключаем модули слайдера
					// для конкретного случая
					modules: [Navigation],
					observer: true,
					observeParents: true,
					slidesPerView: "auto",
					spaceBetween: 4,
					autoHeight: true,
					speed: 800,

					//touchRatio: 0,
					//simulateTouch: false,
					//loop: true,
					//preloadImages: false,
					//lazy: true,

					/*
					// Эффекты
					effect: 'fade',
					autoplay: {
						delay: 3000,
						disableOnInteraction: false,
					},
					*/

					// Пагинация
					/*
					pagination: {
						el: '.swiper-pagination',
						clickable: true,
					},
					*/

					// Скроллбар
					/*
					scrollbar: {
						el: '.swiper-scrollbar',
						draggable: true,
					},
					*/

					// Кнопки "влево/вправо"
					navigation: {
						prevEl: `.product-card-options.slider-id-${index} .swiper-button-prev`,
						nextEl: `.product-card-options.slider-id-${index} .swiper-button-next`,
					},

					// Брейкпоинты
					/*
					breakpoints: {
						320: {
							slidesPerView: 1,
							spaceBetween: 0,
							autoHeight: true,
						},
						768: {
							slidesPerView: 2,
							spaceBetween: 20,
						},
						992: {
							slidesPerView: 3,
							spaceBetween: 20,
						},
						1268: {
							slidesPerView: 4,
							spaceBetween: 30,
						},
					},
					*/
					// События
					on: {

					}
				});
			}
		}
	}

	const productsSliders = document.querySelectorAll('.products-slider');
	if (productsSliders) {
		for (let index = 0; index < productsSliders.length; index++) {
			const slide = productsSliders[index];
			let slidesPerView = 4;
			if (slide.classList.contains('products-slider_3')) {
				slidesPerView = 3;
			}
			slide.classList.add(`slider-id-${index}`);
			slide.querySelector('.swiper-wrapper').classList.add(`slider-wrapper-id-${index}`);
			if (document.querySelector('.products-slider__list')) { // Указываем скласс нужного слайдера
				// Создаем слайдер
				new Swiper(`.products-slider.slider-id-${index} .products-slider__list`, { // Указываем скласс нужного слайдера
					// Подключаем модули слайдера
					// для конкретного случая
					modules: [Navigation],
					observer: true,
					observeParents: true,
					slidesPerView: slidesPerView,
					spaceBetween: 8,
					speed: 800,

					//touchRatio: 0,
					//simulateTouch: false,
					//loop: true,
					//preloadImages: false,
					//lazy: true,

					/*
					// Эффекты
					effect: 'fade',
					autoplay: {
						delay: 3000,
						disableOnInteraction: false,
					},
					*/

					// Пагинация
					/*
					pagination: {
						el: '.swiper-pagination',
						clickable: true,
					},
					*/

					// Скроллбар
					/*
					scrollbar: {
						el: '.swiper-scrollbar',
						draggable: true,
					},
					*/

					// Кнопки "влево/вправо"
					navigation: {
						prevEl: `.products-slider.slider-id-${index} .swiper-button-prev`,
						nextEl: `.products-slider.slider-id-${index} .swiper-button-next`,
					},

					// Брейкпоинты

					breakpoints: {
						320: {
							slidesPerView: 2,
							spaceBetween: 8,
						},
						1023.98: {
							slidesPerView: slidesPerView,
							spaceBetween: 8,
						},
					},

					// События
					on: {

					}
				});
			}
		}
	}

	const popupSliders = document.querySelectorAll('.popup__slider');
	if (popupSliders) {
		for (let index = 0; index < popupSliders.length; index++) {
			const slide = popupSliders[index];
			slide.classList.add(`slider-id-${index}`);
			slide.querySelector('.swiper-wrapper').classList.add(`slider-wrapper-id-${index}`);
			// Создаем слайдер
			new Swiper(`.popup__slider.slider-id-${index}`, { // Указываем скласс нужного слайдера
				// Подключаем модули слайдера
				// для конкретного случая
				modules: [Navigation, FreeMode],
				observer: true,
				observeParents: true,
				slidesPerView: "auto",
				spaceBetween: 8,
				speed: 800,
				//touchRatio: 0,
				//simulateTouch: false,
				//loop: true,
				//preloadImages: false,
				//lazy: true,

				/*
				// Эффекты
				effect: 'fade',
				autoplay: {
					delay: 3000,
					disableOnInteraction: false,
				},
				*/

				// Пагинация
				/*
				pagination: {
					el: '.swiper-pagination',
					clickable: true,
				},
				*/

				// Скроллбар
				/*
				scrollbar: {
					el: '.swiper-scrollbar',
					draggable: true,
				},
				*/

				// Кнопки "влево/вправо"
				navigation: {
					prevEl: `.popup__slider.slider-id-${index} .swiper-button-prev`,
					nextEl: `.popup__slider.slider-id-${index} .swiper-button-next`,
				},

				// Брейкпоинты
				/* 
				breakpoints: {
					320: {
						slidesPerView: 2,
						spaceBetween: 8,
					},
					1023.98: {
						slidesPerView: 4,
						spaceBetween: 8,
					},
				},
				 */
				// События
				on: {

				}
			});
		}
	}

	if (document.querySelector('.product-card__gallery')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper(`.product-card__gallery`, { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination],
			observer: true,
			observeParents: true,
			slidesPerView: 2,
			spaceBetween: 8,
			// autoHeight: true,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагинация

			pagination: {
				el: '.product-card__gallery-pagination',
				clickable: true,
			},


			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			// navigation: {
			// 	prevEl: `.swiper-button-prev`,
			// 	nextEl: `.swiper-button-next`,
			// },

			// Брейкпоинты

			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 8,
				},
				1023.98: {
					slidesPerView: 2,
					spaceBetween: 8,
				},
			},

			// События
			on: {
				beforeInit: function () {
					if (window.innerWidth > 1023.98) {
						this.disable();
					} else {
						this.enable();
					}
				},
				resize: function () {
					if (window.innerWidth > 1023.98) {
						this.slideTo(0);
						this.disable();
					} else {
						this.enable();
					}
				}
			}
		});
	}

	if (document.querySelector('.shops__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper(`.shops__slider`, { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination],
			observer: true,
			observeParents: true,
			slidesPerView: 3,
			spaceBetween: 8,
			// autoHeight: true,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагинация
			/* 
			pagination: {
				el: '.product-card__gallery-pagination',
				clickable: true,
				},
				*/

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			// navigation: {
			// 	prevEl: `.swiper-button-prev`,
			// 	nextEl: `.swiper-button-next`,
			// },

			// Брейкпоинты

			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 8,
				},
				479.98: {
					slidesPerView: 2,
					spaceBetween: 8,
				},
				1023.98: {
					slidesPerView: 3,
					spaceBetween: 8,
				},
			},

			// События
			on: {
			}
		});
	}

	if (document.querySelector('.hero__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.hero__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, EffectFade, Autoplay],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			autoHeight: true,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,


			// Эффекты
			effect: 'fade',
			fadeEffect: {
				crossFade: true
			},
			autoplay: {
				delay: 6000,
				disableOnInteraction: false,
			},


			// Пагинация

			/* pagination: {
				el: '.product-card__gallery-pagination',
				clickable: true,
			}, */


			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			// navigation: {
			// 	prevEl: `.swiper-button-prev`,
			// 	nextEl: `.swiper-button-next`,
			// },

			// Брейкпоинты

			/* breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 8,
				},
				1023.98: {
					slidesPerView: 2,
					spaceBetween: 8,
				},
			}, */

			// События
			on: {
			}
		});
	}
}
// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initSliders();
	// Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
});