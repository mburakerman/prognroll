/* PrognRoll | https://mburakerman.github.io/prognroll/ | @mburakerman | License: MIT */
(function($) {
    $.fn.prognroll = function(options) {

        var settings = $.extend({
            height: 5, //Progress bar height
            color: "#50bcb6", //Progress bar background color
            custom: false, //If you make it true, you can add your custom div and see it's scroll progress on the page.
            direction: "vertical"
        }, options);

        var $container;
        var containerScrollTop, containerHeight, contaierScrollHeight, containerScrollLeft, containerWidth, contaierScrollWidth;

        return this.each(function() {
            if ($(this).data('prognroll')) {
                return false;
            }
            $(this).data('prognroll', true);

            var $span = $("<span>", {
                class: "bar"
            });
            $("body").prepend($span);

            $span.css({
                position: "fixed",
                top: 0,
                left: 0,
                width: 0,
                height: settings.height,
                backgroundColor: settings.color,
                zIndex: 9999999
            });



            if (settings.custom === false) {
                $container = $(window);
            }
            else
            {
                $container = $(this);
            }

            console.log("direction "+settings.direction);

            $container.scroll(function(e) {
                $container = $(this);
                e.preventDefault();

                if(settings.direction === "horizontal")
                {
                        console.log("H "+$container.scrollLeft())
                        containerScrollLeft =     $container.scrollLeft();
                        containerWidth = $container.outerWidth();
                        if(settings.custom === false)
                            contaierScrollWidth = $(document).width();
                        else
                            contaierScrollWidth = $container.prop("scrollWidth");

                        var total = (containerScrollLeft / (contaierScrollWidth - containerWidth)) * 100;
                        $(".bar").css("width", total + "%");
                    }
                    else
                    {
                        containerScrollTop =     $container.scrollTop();
                        containerHeight = $container.outerHeight();

                        if(settings.custom === false)
                            contaierScrollWidth = $(document).height();
                        else
                            contaierScrollHeight = $container.prop("scrollHeight");

                        var total = (containerScrollTop / (contaierScrollHeight - containerHeight)) * 100;
                        $(".bar").css("width", total + "%");
                    }
            });

            /*if (settings.custom === false) {

                $(window).scroll(function(e) {
                    e.preventDefault();
                    var windowScrollTop = $(window).scrollTop();
                    var windowHeight = $(window).outerHeight();
                    var bodyHeight = $(document).height();

                    var total = (windowScrollTop / (bodyHeight - windowHeight)) * 100;

                    $(".bar").css("width", total + "%");
                });

            } else {

                $(this).scroll(function(e) {
                    e.preventDefault();
                    var customScrollTop = $(this).scrollTop();
                    var customHeight = $(this).outerHeight();
                    var customScrollHeight = $(this).prop("scrollHeight");

                    var total = (customScrollTop / (customScrollHeight - customHeight)) * 100;

                    $(".bar").css("width", total + "%");
                });

            }*/

            /* Get scroll position on on page load */
            $(window).on('hashchange', function(e) {
                e.preventDefault();
                console.log($(window).scrollTop());
            });
            $(window).trigger('hashchange');

            var windowScrollTop = $(window).scrollTop();
            var windowHeight = $(window).outerHeight();
            var bodyHeight = $("body").outerHeight();

            var total = (windowScrollTop / (bodyHeight - windowHeight)) * 100;

            $(".bar").css("width", total + "%");
            /* Get scroll position on on page load */

        });
    };
})(jQuery);
