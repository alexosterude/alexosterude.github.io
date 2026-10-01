/*!
=========================================================
* LeadMark Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "" && $(this.hash).length) {

            event.preventDefault();

            var hash = this.hash;
            var navHeight = $(".navbar.fixed-top").outerHeight() || 0;

            $('html, body').animate({
                scrollTop: $(hash).offset().top - navHeight
            }, 700, function(){
                // update the url without jumping past the navbar offset
                history.pushState(null, "", hash);
            });
        }
    });

    // footer year
    $(".js-year").text(new Date().getFullYear());
});

// portfolio filters
$(window).on("load", function() {
    var t = $(".portfolio-container");
    if (!t.length || !$.fn.isotope) return;
    t.isotope({
        filter: ".new",
        animationOptions: {
            duration: 750,
            easing: "linear",
            queue: !1
        }
    }), $(".filters a").on("click", function() {
        $(".filters .active").removeClass("active"), $(this).addClass("active");
        var i = $(this).attr("data-filter");
        return t.isotope({
            filter: i,
            animationOptions: {
                duration: 750,
                easing: "linear",
                queue: !1
            }
        }), !1
    })
})
