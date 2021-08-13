window.addEventListener('load', function () {
    new Glider(document.querySelector('.opiniones-comments'), {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: {
            prev: '.carousel__arrow--left',
            next: '.carousel__arrow--right'
        },
        responsive: [
            {
              // screens greater than >= 775px
              breakpoint: 300,
              settings: {
                // Set to `auto` and provide item width to adjust to viewport
                slidesToShow: 1,
                slidesToScroll: 1,
                itemWidth: 320,
                duration: 0.25
              }
            },
            {
              // screens greater than >= 775px
              breakpoint: 600,
              settings: {
                // Set to `auto` and provide item width to adjust to viewport
                slidesToShow: 2,
                slidesToScroll: 1,
                itemWidth: 320,
                duration: 0.25
              }
            },
            {
              // screens greater than >= 775px
              breakpoint: 1024,
              settings: {
                // Set to `auto` and provide item width to adjust to viewport
                slidesToShow: 3,
                slidesToScroll: 1,
                itemWidth: 320,
                duration: 0.25
              }
            },
            {
              // screens greater than >= 775px
              breakpoint: 1200,
              settings: {
                // Set to `auto` and provide item width to adjust to viewport
                slidesToShow: 4,
                slidesToScroll: 1,
                itemWidth: 320,
                duration: 0.25
              }
            },
            {
              // screens greater than >= 775px
              breakpoint: 1600,
              settings: {
                // Set to `auto` and provide item width to adjust to viewport
                slidesToShow: 5,
                slidesToScroll: 1,
                itemWidth: 320,
                duration: 0.25
              }
            },
          ]
    })
})

