$(function() {
    $('a[role="button"]').click(function () { 
        $(this).parent().parent().children('.expandir-texto').toggle(500)
    });
})