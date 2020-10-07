$(function() {
<<<<<<< HEAD
=======

>>>>>>> 5267820a930512bb9b33050e382c92344a2d8df4
    $(".col-lg-4").fadeTo(1000, 0.5);

    $("main").hide();

    $("form > input").change(function() {
        if ($(this).val() == "mostrar") {
            $("main").show();
        } else {
            $("main").hide();
        }
<<<<<<< HEAD
    });

    $(".col-lg-4").mouseenter(function() {
        $(this).fadeTo(1000, 1);
    });

    $(".col-lg-4").mouseleave(function() {
        $(this).fadeTo(1000, 0.5);
    });
=======
    })

    $(".col-lg-4").mouseenter(function() {
        $(this).fadeTo(1000, 1);
    })

    $(".col-lg-4").mouseleave(function() {
        $(this).fadeTo(1000, 0.5);
    })
>>>>>>> 5267820a930512bb9b33050e382c92344a2d8df4
})