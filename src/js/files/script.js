// Подключение функционала "Чертогов Фрилансера"
import { isMobile, bodyLock, bodyUnlock, bodyLockStatus } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

window.onload = function () {
  if (document.body.classList.contains('transition_disabled')) {
    document.body.classList.remove('transition_disabled');
  }
}

// наведение пунктов меню
const menuItems = document.querySelectorAll('.menu__item')
menuItems.forEach(item => {
  if (!isMobile.any()) {
    let menuItemOverTimeout,
      menuItemOutTimeout
    item.addEventListener('mouseover', (event) => {
      clearTimeout(menuItemOutTimeout);
      menuItemOverTimeout = setTimeout(() => {
        item.classList.add('_active')
        item.closest('.menu__list').classList.add('_active')
        if (item.querySelector('.submenu')) {
          document.documentElement.classList.add('menu-hover')
        }
      }, 200);
    });
    item.addEventListener('mouseout', (event) => {
      clearTimeout(menuItemOverTimeout);
      menuItemOutTimeout = setTimeout(() => {
        item.classList.remove('_active')
        item.closest('.menu__list').classList.remove('_active')
        if (item.querySelector('.submenu')) {
          document.documentElement.classList.remove('menu-hover')
        }
      }, 200);
    })
  }
});

// модуль проверки выбрана ли опция в карточке товара ========================================================================================================================================================

// функция проверки выбрана ли опция в карточке товара
function checkOptions() {
  const optionsItems = document.querySelectorAll('.option-checkbox__input');
  let activeFlag = false
  optionsItems.forEach(item => {
    if (item.checked) {
      activeFlag = true
      return
    }
  });

  return activeFlag
}

// функция активности кнопки "Добавить в корзину"
function addCartButton(item) {
  const radioInput = item.previousElementSibling
  const button = document.querySelector('.product-card-info__button_add')
  const buttonSpan = document.querySelector('.product-card-info__button_add span')

  const activeOptions = checkOptions()

  if (activeOptions) {
    if (radioInput.classList.contains('_disabled')) {
      buttonSpan.textContent = 'Сообщить о поступлении'
      button.classList.add('_admission')
      button.disabled = false
      button.dataset.popup = "#popup-admission"
    } else {
      buttonSpan.textContent = 'в корзину'
      button.disabled = false
      button.classList.remove('_admission')
      button.removeAttribute("data-popup")
    }
  } else {
    buttonSpan.textContent = 'выберите размер'
    button.disabled = true
    button.classList.remove('_admission')
    button.removeAttribute("data-popup")
  }

}


// клик ========================================================================================================================================================
document.addEventListener("click", documentActionsClick);

function documentActionsClick(e) {
  const el = e.target;

  if (el.closest('.option-checkbox__label')) {
    const item = el.closest('.option-checkbox__label');
    if (document.querySelector('.product-card-info__button_add')) {
      setTimeout(() => {
        addCartButton(item)
      }, 100);
    }
  }

  if (el.closest('[data-popup-gallery]')) {
    const button = el.closest('[data-popup-gallery]');
    const popupId = button.dataset.popupGallery;

    if (bodyLockStatus) {
      const popup = document.querySelector(`#${popupId}`);
      console.log(popup)
      if (popup) {
        popup.classList.add('popup_show');
        bodyLock();
      }
    }

  }

  if (el.closest('[data-close]')) {
    const close = el.closest('[data-close]');
    if (bodyLockStatus) {
      close.closest('.popup').classList.remove('popup_show');
      bodyUnlock();
    }
  }

  if (el.closest('.products-item__action-addcart')) {
    const item = el.closest('.products-item__action-addcart');
    item.classList.toggle('_active');
  }

  if (el.closest('.products-item__action-whishlist')) {
    const item = el.closest('.products-item__action-whishlist');
    item.classList.toggle('_active');
  }

  if (el.closest('.products-item-small__action-addcart')) {
    const item = el.closest('.products-item-small__action-addcart');
    item.classList.toggle('_active');
  }

  if (el.closest('.products-item-small__action-whishlist')) {
    const item = el.closest('.products-item-small__action-whishlist');
    item.classList.toggle('_active');
  }

  if (el.closest('.close-menu')) {
    const item = el.closest('.close-menu');
    document.documentElement.classList.remove('menu-open');
  }

  if (el.closest('.close-filters')) {
    const item = el.closest('.filters-menu');
    document.documentElement.classList.remove('filters-open');
  }

  if (el.closest('.card-featured__add')) {
    const item = el.closest('.card-featured');
    item.classList.toggle('_added');
  }

  if (el.closest('.menu__link') && isMobile.any()) {
    const link = el.closest('.menu__link');
    if (link.nextElementSibling) {
      e.preventDefault();
      const activeLink = document.querySelector('.menu__link.menu-hover');
      if (activeLink && activeLink !== link) {
        activeLink.classList.remove('menu-hover');
        activeLink.closest('.menu__item').classList.remove('_active');
        activeLink.closest('.menu__list').classList.remove('_active');
        document.documentElement.classList.remove('menu-hover');
      }
      link.classList.toggle('menu-hover');
      link.closest('.menu__item').classList.toggle('_active');
      link.closest('.menu__list').classList.toggle('_active');
      document.documentElement.classList.toggle('menu-hover');
    }
  }

  if (!el.closest('.menu__link')) {
    if (document.documentElement.classList.contains('menu-hover')) {
      document.querySelector('.menu__link.menu-hover').classList.remove('menu-hover');
      document.querySelector('.menu__item._active').classList.remove('_active');
      document.querySelector('.menu__list._active').classList.remove('_active');
      document.documentElement.classList.remove('menu-hover');
    }
  }

  if (el.closest('.card-featured-small')) {
    const item = el.closest('.card-featured-small')
    item.classList.toggle('_added-to-card')
  }

  if (el.closest('.product-card-info__wishlist')) {
    const item = el.closest('.product-card-info__wishlist')
    item.classList.toggle('_active')
  }

  if (el.closest('.cart-popup-product__more')) {
    const button = el.closest('.cart-popup-product__more')
    const parent = button.closest('.popup')
    if (parent) {
      parent.classList.add('option-open')
    }
  }

  if (!el.closest('.product-mob-options__body') && !el.closest('.cart-popup-product__more') && document.querySelector('.popup.option-open')) {
    document.querySelector('.popup.option-open').classList.remove('option-open')
  }
  if (el.closest('.product-mob-options__delete')) {
    const button = el.closest('.product-mob-options__delete')
    const parent = button.closest('.popup.option-open')
    if (parent) {
      parent.classList.remove('option-open')
    }
  }

}
