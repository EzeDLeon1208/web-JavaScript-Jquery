$(document).ready(function(){

    // Slider
    if(window.location.href.indexOf('index') > -1){
      $('.galeria').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 1200,
        resposive: true,
      });
    //}

    // Posts
    //if(window.location.href.indexOf('index') > -1){
        var Posts = [
            {
                title: 'Prueba de titulo 1',
                date: 'Fecha de publicación: ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id tellus nibh. Nam placerat nec tortor in facilisis. Nam interdum ullamcorper ante, in posuerenisl venenatis in. Duis nisi orci, consectetur eget vulputate nec, consectetur a urna. Praesent malesuada tortor sed tellus mollis, eu tincidunt turpis vulputate. Suspendisse dignissim sit amet augue eu malesuada. Ut eget dolor a elit hendrerit dapibus non eu mauris. In congue odio quis tortor auctor molestie. Donec faucibus venenatis egestas. Vivamus quis massa in elit venenatis tristique et ut nisi. Integer quis mi sapien. Quisque dapibus, purus cursus ultrices pulvinar, risus metus finibus tortor, in condimentum mauris ligula et lorem. Proin volutpat sagittis cursus. Nullam mauris lacus, tempor ac libero quis, tincidunt pellentesque magna. Curabitur quis est nibh.'
            },
            {
                title: 'Prueba de titulo 2',
                date: 'Fecha de publicación: ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id tellus nibh. Nam placerat nec tortor in facilisis. Nam interdum ullamcorper ante, in posuerenisl venenatis in. Duis nisi orci, consectetur eget vulputate nec, consectetur a urna. Praesent malesuada tortor sed tellus mollis, eu tincidunt turpis vulputate. Suspendisse dignissim sit amet augue eu malesuada. Ut eget dolor a elit hendrerit dapibus non eu mauris. In congue odio quis tortor auctor molestie. Donec faucibus venenatis egestas. Vivamus quis massa in elit venenatis tristique et ut nisi. Integer quis mi sapien. Quisque dapibus, purus cursus ultrices pulvinar, risus metus finibus tortor, in condimentum mauris ligula et lorem. Proin volutpat sagittis cursus. Nullam mauris lacus, tempor ac libero quis, tincidunt pellentesque magna. Curabitur quis est nibh.'
            },
            {
                title: 'Prueba de titulo 3',
                date: 'Fecha de publicación: ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id tellus nibh. Nam placerat nec tortor in facilisis. Nam interdum ullamcorper ante, in posuerenisl venenatis in. Duis nisi orci, consectetur eget vulputate nec, consectetur a urna. Praesent malesuada tortor sed tellus mollis, eu tincidunt turpis vulputate. Suspendisse dignissim sit amet augue eu malesuada. Ut eget dolor a elit hendrerit dapibus non eu mauris. In congue odio quis tortor auctor molestie. Donec faucibus venenatis egestas. Vivamus quis massa in elit venenatis tristique et ut nisi. Integer quis mi sapien. Quisque dapibus, purus cursus ultrices pulvinar, risus metus finibus tortor, in condimentum mauris ligula et lorem. Proin volutpat sagittis cursus. Nullam mauris lacus, tempor ac libero quis, tincidunt pellentesque magna. Curabitur quis est nibh.'
            },
            {
                title: 'Prueba de titulo 4',
                date: 'Fecha de publicación: ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id tellus nibh. Nam placerat nec tortor in facilisis. Nam interdum ullamcorper ante, in posuerenisl venenatis in. Duis nisi orci, consectetur eget vulputate nec, consectetur a urna. Praesent malesuada tortor sed tellus mollis, eu tincidunt turpis vulputate. Suspendisse dignissim sit amet augue eu malesuada. Ut eget dolor a elit hendrerit dapibus non eu mauris. In congue odio quis tortor auctor molestie. Donec faucibus venenatis egestas. Vivamus quis massa in elit venenatis tristique et ut nisi. Integer quis mi sapien. Quisque dapibus, purus cursus ultrices pulvinar, risus metus finibus tortor, in condimentum mauris ligula et lorem. Proin volutpat sagittis cursus. Nullam mauris lacus, tempor ac libero quis, tincidunt pellentesque magna. Curabitur quis est nibh.'
            },
            {
                title: 'Prueba de titulo 5',
                date: 'Fecha de publicación: ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id tellus nibh. Nam placerat nec tortor in facilisis. Nam interdum ullamcorper ante, in posuerenisl venenatis in. Duis nisi orci, consectetur eget vulputate nec, consectetur a urna. Praesent malesuada tortor sed tellus mollis, eu tincidunt turpis vulputate. Suspendisse dignissim sit amet augue eu malesuada. Ut eget dolor a elit hendrerit dapibus non eu mauris. In congue odio quis tortor auctor molestie. Donec faucibus venenatis egestas. Vivamus quis massa in elit venenatis tristique et ut nisi. Integer quis mi sapien. Quisque dapibus, purus cursus ultrices pulvinar, risus metus finibus tortor, in condimentum mauris ligula et lorem. Proin volutpat sagittis cursus. Nullam mauris lacus, tempor ac libero quis, tincidunt pellentesque magna. Curabitur quis est nibh.'
            },
        ];

        Posts.forEach((item, index) => {
            var post = `
                    <article class="post">
                        <h2>${item.title}</h2>
                        <span class="date">${item.date}</span>
                        <p>
                            ${item.content}
                        </p>
                        <a href="#" class="button-more">Leer más</a>
                    </article>
                `;

            $("#posts").append(post);
        });
  }    

    // Selector de tema
    var theme = $("#theme");

    $("#to-green").click(function(){
        theme.attr("href", "css/green.css");
    });

    $("#to-red").click(function(){
        theme.attr("href", "css/red.css");
    });

    $("#to-blue").click(function(){
        theme.attr("href", "css/blue.css");
    });

    //Scroll ir arriba
    $('.subir').click(function(e){
        e.preventDefault();

        $('html, body').animate({
            scrollTop: 0
        }, 500);

        return false;
    });

    // Login falso

    $("#login form").submit(function(){
        var form_name = $("#form_name").val();

        localStorage.setItem("form_name", form_name);

    });

    var form_name = localStorage.getItem("form_name");

    if(form_name != null && form_name != "undefined"){
        var about_parrafo = $("#about p");

        about_parrafo.html("<br><strong>Bienvenido, " + form_name + "</strong>");
        about_parrafo.append("<a href='#' id='logout'>Cerrar sesión</a>");

        $("#login").hide();

        $("#logout").click(function(){
            localStorage.clear();
            location.reload();
        });
    }

    // Acordeon

    if(window.location.href.indexOf('about') > -1){
        $("#acordeon").accordion();
    }

    // Reloj

    if(window.location.href.indexOf('reloj') > -1){

        setInterval(function(){
          var reloj = moment().format("hh:mm:ss");
          $('#reloj').html(reloj);
        }, 1000);
        
    }

    // Validación de campos

    if(window.location.href.indexOf('contact') > -1){

        $("form input[name='date']").datepicker({
            dateFormat: 'dd-mm-yy' 
        });

        $.validate({
            lang: 'es',
            errorMessagePosition: 'top',
            scrollToTopOnError: true
        });
    }

});