/* global AOS, Typed, Waypoint, PureCounter, GLightbox, imagesLoaded, Isotope, Swiper, initSwiperWithCustomPagination, window, document, location, URLSearchParams */

;(() => {
  'use strict'

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled () {
    const selectBody = document.querySelector('body')
    const selectHeader = document.querySelector('#header')
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled')
  }

  document.addEventListener('scroll', toggleScrolled)
  window.addEventListener('load', toggleScrolled)

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle')

  function mobileNavToogle () {
    document.querySelector('body').classList.toggle('mobile-nav-active')
    mobileNavToggleBtn.classList.toggle('bi-list')
    mobileNavToggleBtn.classList.toggle('bi-x')
  }
  mobileNavToggleBtn.addEventListener('click', mobileNavToogle)

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle()
      }
    })
  })

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function (e) {
      e.preventDefault()
      this.parentNode.classList.toggle('active')
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active')
      e.stopImmediatePropagation()
    })
  })

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader')
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove()
    })
  }

  /**
   * Scroll top button
   */
  const scrollTop = document.querySelector('.scroll-top')

  function toggleScrollTop () {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active')
    }
  }
  if (scrollTop) {
    scrollTop.addEventListener('click', e => {
      e.preventDefault()
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    })
  }

  window.addEventListener('load', toggleScrollTop)
  document.addEventListener('scroll', toggleScrollTop)

  /**
   * Animation on scroll function and init
   */
  function aosInit () {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  }
  window.addEventListener('load', aosInit)

  /**
   * Init typed.js
   */
  const selectTyped = document.querySelector('.typed')
  if (selectTyped) {
    let typedStrings = selectTyped.getAttribute('data-typed-items')
    typedStrings = typedStrings.split(',')
    // eslint-disable-next-line no-new
    new Typed('.typed', {
      strings: typedStrings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    })
  }

  /**
   * Animate the skills items on reveal
   */
  const skillsAnimation = document.querySelectorAll('.skills-animation')
  skillsAnimation.forEach(item => {
    // eslint-disable-next-line no-new
    new Waypoint({
      element: item,
      offset: '80%',
      handler: function (direction) {
        const progress = item.querySelectorAll('.progress .progress-bar')
        progress.forEach(el => {
          el.style.width = el.getAttribute('aria-valuenow') + '%'
        })
      }
    })
  })

  /**
   * Initiate Pure Counter (attach to window to avoid no-new/no-unused)
   */
  window._pureCounter = new PureCounter()

  /**
   * Initiate glightbox (attach to window to avoid no-unused-vars)
   */
  window._glightbox = GLightbox({
    selector: '.glightbox'
  })

  /**
   * Init isotope layout and filters
   */
  document.querySelectorAll('.isotope-layout').forEach(function (isotopeItem) {
    const layout = isotopeItem.getAttribute('data-layout') ?? 'masonry'
    const filter = isotopeItem.getAttribute('data-default-filter') ?? '*'
    const sort = isotopeItem.getAttribute('data-sort') ?? 'original-order'

    let initIsotope
    imagesLoaded(isotopeItem.querySelector('.isotope-container'), function () {
      initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
        itemSelector: '.isotope-item',
        layoutMode: layout,
        filter,
        sortBy: sort
      })
    })

    isotopeItem.querySelectorAll('.isotope-filters li').forEach(function (filters) {
      filters.addEventListener('click', function () {
        isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active')
        this.classList.add('filter-active')
        if (initIsotope) {
          initIsotope.arrange({
            filter: this.getAttribute('data-filter')
          })
        }
        if (typeof aosInit === 'function') {
          aosInit()
        }
      }, false)
    })
  })

  /**
   * Frequently Asked Questions Toggle
   */
  document.querySelectorAll('.faq-item h3, .faq-item .faq-toggle').forEach(faqItem => {
    faqItem.addEventListener('click', () => {
      faqItem.parentNode.classList.toggle('faq-active')
    })
  })

  /**
   * Init swiper sliders
   */
  function initSwiper () {
    document.querySelectorAll('.init-swiper').forEach(function (swiperElement) {
      const config = JSON.parse(
        swiperElement.querySelector('.swiper-config').innerHTML.trim()
      )

      if (swiperElement.classList.contains('swiper-tab')) {
        initSwiperWithCustomPagination(swiperElement, config)
      } else {
        // associe l’instance au noeud pour éviter no-new et pouvoir la détruire plus tard
        swiperElement._swiper = new Swiper(swiperElement, config)
      }
    })
  }

  window.addEventListener('load', initSwiper)

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  window.addEventListener('load', function () {
    if (window.location.hash) {
      const target = document.querySelector(window.location.hash)
      if (target) {
        setTimeout(() => {
          const section = target
          const scrollMarginTop = getComputedStyle(section).scrollMarginTop
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth'
          })
        }, 100)
      }
    }
  })

  /**
   * Navmenu Scrollspy
   */
  const navmenulinks = document.querySelectorAll('.navmenu a')

  function navmenuScrollspy () {
    navmenulinks.forEach(navmenulink => {
      if (!navmenulink.hash) return
      const section = document.querySelector(navmenulink.hash)
      if (!section) return
      const position = window.scrollY + 200
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'))
        navmenulink.classList.add('active')
      } else {
        navmenulink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navmenuScrollspy)
  document.addEventListener('scroll', navmenuScrollspy)
})()
