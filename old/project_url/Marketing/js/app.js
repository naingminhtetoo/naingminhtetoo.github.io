

    let screenHeight = $(window).height();
    $(window).scroll(function () {
        let currentPosition = $(this).scrollTop();

        if(currentPosition > screenHeight-100){
            $(".site-nav").addClass("site-nav-scroll");
        }else{
            $(".site-nav").removeClass("site-nav-scroll");
            setActive("home");
        }
    });

    $(".navbar-toggler").click(function () {
        let result = $(".navbar-collapse").hasClass("show");

        if(result){
            $(".menu-icon").removeClass("feather-x").addClass("feather-menu");
        }else{
            $(".menu-icon").removeClass("feather-menu").addClass("feather-x");


        }

    });

    function setActive(current) {
        $(".nav-link").removeClass("current-section");
        console.log(`.nav-link[href='#${current}']`);
        $(`.nav-link[href='#${current}']`).addClass('current-section');
    }

    function navScroll() {
        let currentSection = $("section[id]");
        currentSection.waypoint(function (direction) {
            if(direction == "down"){
                let currentSectionId = $(this.element).attr('id');
                console.log(currentSectionId);
                setActive(currentSectionId);
            }

        },{ offset:'0px' });

        currentSection.waypoint(function (direction) {

            if(direction == "up"){
                let currentSectionId = $(this.element).attr('id');
                console.log(currentSectionId);
                setActive(currentSectionId);
            }

        },{ offset:'0px' });

    }

    navScroll();

    $(window).on("load",function () {
        $('.loader-container').fadeOut(500,function () {
            $(this).remove();
        });
    });








