$(document).ready(function() {
    //Menu hamburguesa para movil
    // Configuración inicial: Ocultar la lista al cargar
    //$(".main-nav ul").hide();

    // Resaltado con borde azul al pasar por el producto
    $(".producto").hover(
        function() { $(this).css("border", "2px solid #2ecc71"); }, 
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
        function() { $(this).css("background-color", "#27ae60"); }, 
        function() { $(this).css("background-color", ""); }
    );

    // Cambio a color verde para "Mi cesta"
    $(".usuario a:last-child").hover(
        function() { $(this).css("background-color", "#27ae60"); }, 
        function() { $(this).css("background-color", ""); }
    );
    
    // Menú Hamburguesa para movil
    //$("#burger-menu").click(function() {
    //    $(".main-nav ul").slideToggle(400); 
    //});

});