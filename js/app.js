"use strict"
document.addEventListener("DOMContentLoaded", () => {
  const heroSwiper = new Swiper('.hero-swiper', {
    /*кол-во слайдов для показа*/
    slidesPerView: 1,

    /*Отключение функционала slidesPerView, если слайдов меньше, чем нужно*/
    watchOverflow: true,

    /*Кол-во перелистываемых слайдов*/
    slidesPerGroup: 1,

    /*Отступы между слайдами в px*/
    // spaceBetween: 10,

    /*Активный слайд по центру, если показано больше одного слайда*/
    // centeredSlides: true,

    /*Стартовый слайд начиная с 0*/
    // initialSlide: 1,

    /*Мультрядность - для корректной работы автовысоту (autoHeight) надо отключить*/
    slidesPerColumn: 1,

    /*Автовысота*/
    autoHeight: false,

    /*Бесконечный цикл прокрутки - не будет работать с мульдирядностью (slidesPerColumn) или значение мультирядности должно быть не больше 1*/
    loop: true,

    /*Кол-во дублирующих слайдов - для корректной работы бесконечном цикле прокрутки при slidesPerView со значением 'auto'*/
    // loopedSlides: 3,

    /*Свободный режим - прокручивается как лента без фиксации на каком-либо слайде*/
    freeMode: false,

    /*Автопрокрутка*/
    autoplay: {
      enabled: true,
      // Пауза между прокруткой (миллисекунды)
      delay: 3000,
      // Закончить на последнем слайде
      stopOnLastSlide: false,
      // Отключить после ручного переключения
      disableOnInteraction: false,
    },

    /*Скорость переключения слайдов*/
    speed: 300,

    /*Вертикальное прокручивание - дополнительно для корректной работы необходимо задать всему swiper фиксированную высоту и сбросить внутренние отступы*/
    //direction: 'vertical',

    /*Эффект переключения слайдов сменой прозрачности*/
    effect: "fade",
    // "slide" - стандартное значение
    // "flip" - переворот. Лучше отключить переключение мышью и колёсиком мыши
    // "cube" - куб. Для лучшего переключения необходимо увеличить ширину swiper
    // "coverflow" - поток. Желательно использовать при показе от 2х слайдов

    // Дополнение к fade эффекту
    fadeEffect: {
      // параллельная смена прозрачности
      crossFade: true,
    },

    // Дополнение к flip эффекту
    // flipEffect: {
    //   // тень
    //   slideShadows: true,
    //   // показ только активного слайда
    //   limitRotation: true,
    // },

    // Дополнение к cube
    // cubeEffect: {
    //   // Настройки тени
    //   slideShadows: true,
    //   shadow: true,
    //   shadowOffseet: 20,
    //   shadowScale: 0.94,
    // },

    // Дополнение к coverflow
    // coverflowEffect: {
    //   // угол
    //   rotate: 20,
    //   // наложение
    //   stretch: 50,
    //   // тень
    //   slideShadows: true,
    // },

    freeMode: true,

    /*Пагинация (ТОЧКИ)*/
    pagination: {
      el: '.hero-swiper-pgn',
      // type: 'bullets',
      // кликабельность буллетов
      // clickable: true,
      // динамическте буллеты
      // dynamicBullets: true,
      // кастомные буллеты
      // renderBullet: function (index, className) {
      //   return '<span class="' + className + '">' + (index + 1) + '</span>';
      // },

      /*Фракция вместо буллетов*/
      type: 'fraction',
      // кастомизация фракции
      renderFraction: function (currentClass, totalClass) {
        return 'Фото <span class="' + currentClass + '"></span>' + ' из ' + '<span class="' + totalClass + '"></span>';
      },

      /*Прогрессбар*/
      // type: 'progressbar',
    },

    // навигация (КНОПКИ)
    navigation: {
      nextEl: '.hero-swiper-nav-btn--next',
      prevEl: '.hero-swiper-nav-btn--prev',
    },

    /*Скролл*/
    scrollbar: {
      el: '.hero-swiper-nav-scrollbar',
      // возможность перетаскивать скролл
      draggable: true,
    },

    /*Включение/отключение перетаскивания на ПК*/
    simulateTouch: true,
    // Чувствительность свайпа
    touchRatio: 1, // значение 0 отключит свайп на всех устройствах
    // Угол срабатывания свайпа/перетаскивания
    touchAngle: 45,
    // Курсор перетаскивания
    grabCursor: true,

    /*Переключение при клике на слайд НЕ РАБОТАЕТ */
    slideToClickedSlide: true,

    /* Навигация по хешу - переключение по стрелкам браузера НЕ РАБОТАЕТ */
    hashNavigation: {
      // отслеживать состояние
      watchState: true,
    },

    /*Управление клавиатурой*/
    keyboard: {
      // Включить/выключить
      enabled: true,
      // Включить/выключить когда слайдер в пределах вьюпорта
      onlyInViewport: true,
      // Включить/выключить управление клавиатурой pageUp, pageDown
      pageUpDown: true,
    },

    /*Управление колёсиком мыши*/
    mousewheel: {
      enabled: false,
      // чувствительность колеса мыши
      sensitivity: 100,
      // класс объекта на котором будет срабатывать прокуртка мышью
      eventsTarget: ".hero-swiper",
    },


    /*Брейк поинты (адаптив)*/
    breakpoints: {
      // срабатывает от 320px
      320: { // если указать '@0.75' при соотношении стороны высоты делённую на ширину
        navigation: {
          enabled: false,
        },
      },
      // срабатывает от 480px
      768: { // если указать '@1.00' при соотношении стороны высоты делённую на ширину
        navigation: {
          enabled: false,
        },
      },
      // срабатывает от 992px
      992: { // если указать '@1.50' при соотношении стороны высоты делённую на ширину
        navigation: {
          enabled: true,
        },
      },
    },


    /*Lazy Loading - отложенная подгрузка картинок НЕ РАБОТАЕТ*/
    /*
    Изображению добавить
    - класс swiper-lazy
    - атрибут data-src="путь к картинке"
    - src="1x1.png" - добавить однопиксельное изображение

    После изображения добавить элемент (div) с классом swiper-lazy-preloader.
    Данный элемент выведет анимационную иконку подгрузки.
    */
    preloadImages: false, // отключение по умолчанию предзагрузку всех картинок

    lazy: {
      enabled: false,
      // подгрузка на старте переключения слайда
      loadOnTransitionStart: false,
      // подгрузка предыдущей и следующей картинок
      loadPrevNext: false,
    },
    // Ниже настройки стоит включать, когда значение slidesPerView: 'auto' или больше 1
    // слежка за видимыми слайдами
    watchSlidesProgress: false,
    // добавление класса видимым слайдам
    watchSlidesVisibility: false,


    /*Увеличение картинок*/
    /*
    Блоку, в котором находится изображение необходимо добавить класс swiper-zoom-container
    */
    zoom: {
      enabled: true,
      // Максимальное увеличение
      maxRatip: 5,
      // Минимальное увеличение
      minRatio: 1,
    },


    /*Миниатюры (превью)*/
    /*
      - в HTML создать копию слайдер со слайдами
      - добавить другие классы и стилизовать, как превью-слайдер
      - всё лишнее желательно убрать: скролл, фракции
      */
    // thumbs: {
    //   swiper: {
    //     el: '.hero-min-swiper',
    //     slidesPerView: 5,
    //   },
    // },

    /*38:28 ФПЖ - остановился на этом "Слайдер в слайдере"*/
  });

  /*Остановка автопрокуртки при наведении НЕ РАБОТАЕТ*/
  // heroSwiper.addEventListener('mouseenter', function (e) {
  //   heroSwiper.autoplay.stop();
  // });
  // heroSwiper.addEventListener('mouseleave', function (e) {
  //   heroSwiper.params.autoplay.disableOnInteraction = false;
  //   heroSwiper.params.autoplay.delay = 500;
  //   heroSwiper.autoplay.start();
  // });
});
