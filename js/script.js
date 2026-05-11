$(document).ready(function() {
    function toggleMenu() {
        if ($(window).width() >= 992) {
            $(".main-nav ul").show();
        } else {
            $(".main-nav ul").hide();
        }
    }

    // estado inicial
    toggleMenu();

    // burger
    $("#burger-menu").click(function () {
        $(".main-nav ul").slideToggle(300);
    });

    // resize fix
    $(window).resize(function () {
        toggleMenu();
    });

    // Resaltado con borde azul al pasar por el producto
    $(".producto").hover(
        function() { $(this).css("border", "2px solid #007bff"); }, 
        function() { $(this).css("border", "none"); }
    );

    //  Efecto Zoom en las fotos
    $(".producto img").hover(
        function() { $(this).css("transform", "scale(1.15)"); }, 
        function() { $(this).css("transform", "scale(1)"); }
    );

    // Feedback en botones de Usuario
    // Cambio a color azul para "Mi cuenta"
    $(".usuario a:first-child").hover(
        function() { $(this).css("background-color", "#007bff"); }, 
        function() { $(this).css("background-color", ""); }
    );

    // Cambio a color verde para "Mi cesta"
    $(".usuario a:last-child").hover(
        function() { $(this).css("background-color", "#007bff"); }, 
        function() { $(this).css("background-color", ""); }
    );
    
});