$(document).ready(function(){

  if(window.location.href.indexOf('index')> -1){

    $('.galeria').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 1200
      });
  }
  if(window.location.href.indexOf('index')> -1){
      let posts = [
          {
              title:'Prueba de titulo 1',
              date: 'Publicado el dia ' + moment().date()+ " de "+moment().format("MMMM") + " del " + moment().format("YYYY"),
              content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac tellus fringilla dolor tincidunt tincidunt. Duis ullamcorper porta libero, at iaculis arcu imperdiet id. Ut nisl nibh, vehicula ut egestas sed, suscipit in velit. Aenean a tempus turpis. Suspendisse in eros est. Suspendisse potenti. Fusce consequat pretium eros, vel volutpat mi ultrices et. Phasellus ultrices ullamcorper sodales. Mauris feugiat malesuada lacus a aliquet. Morbi porta placerat dapibus. Donec fringilla fermentum feugiat. Ut libero metus, convallis eget mauris at, tempor convallis nibh. Ut maximus augue ut venenatis imperdiet. Nunc non velit dui.Donec nec ligula eu ex molestie lacinia. Nunc commodo quam vitae tortor pellentesque, a vulputate eros lobortis. Vestibulum feugiat maximus iaculis. Aliquam condimentum nunc mauris. Nam nec scelerisque mauris. Integer euismod purus nec ligula commodo, quis ornare massa ultricies. Vivamus euismod sapien vitae nibh rutrum semper. Donec sed gravida magna. Ut eu eros nec dolor sollicitudin tincidunt eu sit amet ex. Integer gravida lacinia auctor. Cras ac magna elit. Morbi dignissim elit in purus convallis suscipit. Fusce eget diam tortor. Fusce et tristique eros.'
          },
          {
            title:'Prueba de titulo 2',
            date: 'Publicado el dia ' + moment().date()+ " de "+moment().format("MMMM") + " del " + moment().format("YYYY"),
            content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac tellus fringilla dolor tincidunt tincidunt. Duis ullamcorper porta libero, at iaculis arcu imperdiet id. Ut nisl nibh, vehicula ut egestas sed, suscipit in velit. Aenean a tempus turpis. Suspendisse in eros est. Suspendisse potenti. Fusce consequat pretium eros, vel volutpat mi ultrices et. Phasellus ultrices ullamcorper sodales. Mauris feugiat malesuada lacus a aliquet. Morbi porta placerat dapibus. Donec fringilla fermentum feugiat. Ut libero metus, convallis eget mauris at, tempor convallis nibh. Ut maximus augue ut venenatis imperdiet. Nunc non velit dui.Donec nec ligula eu ex molestie lacinia. Nunc commodo quam vitae tortor pellentesque, a vulputate eros lobortis. Vestibulum feugiat maximus iaculis. Aliquam condimentum nunc mauris. Nam nec scelerisque mauris. Integer euismod purus nec ligula commodo, quis ornare massa ultricies. Vivamus euismod sapien vitae nibh rutrum semper. Donec sed gravida magna. Ut eu eros nec dolor sollicitudin tincidunt eu sit amet ex. Integer gravida lacinia auctor. Cras ac magna elit. Morbi dignissim elit in purus convallis suscipit. Fusce eget diam tortor. Fusce et tristique eros.'
        },
        // {
        //     title:'Prueba de titulo 3',
        //     date: 'Publicado el dia ' + moment().date()+ " de "+moment().format("MMMM") + " del " + moment().format("YYYY"),
        //     content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac tellus fringilla dolor tincidunt tincidunt. Duis ullamcorper porta libero, at iaculis arcu imperdiet id. Ut nisl nibh, vehicula ut egestas sed, suscipit in velit. Aenean a tempus turpis. Suspendisse in eros est. Suspendisse potenti. Fusce consequat pretium eros, vel volutpat mi ultrices et. Phasellus ultrices ullamcorper sodales. Mauris feugiat malesuada lacus a aliquet. Morbi porta placerat dapibus. Donec fringilla fermentum feugiat. Ut libero metus, convallis eget mauris at, tempor convallis nibh. Ut maximus augue ut venenatis imperdiet. Nunc non velit dui.Donec nec ligula eu ex molestie lacinia. Nunc commodo quam vitae tortor pellentesque, a vulputate eros lobortis. Vestibulum feugiat maximus iaculis. Aliquam condimentum nunc mauris. Nam nec scelerisque mauris. Integer euismod purus nec ligula commodo, quis ornare massa ultricies. Vivamus euismod sapien vitae nibh rutrum semper. Donec sed gravida magna. Ut eu eros nec dolor sollicitudin tincidunt eu sit amet ex. Integer gravida lacinia auctor. Cras ac magna elit. Morbi dignissim elit in purus convallis suscipit. Fusce eget diam tortor. Fusce et tristique eros.'
        // },
        // {
        //     title:'Prueba de titulo 4',
        //     date: 'Publicado el dia ' + moment().date()+ " de "+moment().format("MMMM") + " del " + moment().format("YYYY"),
        //     content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac tellus fringilla dolor tincidunt tincidunt. Duis ullamcorper porta libero, at iaculis arcu imperdiet id. Ut nisl nibh, vehicula ut egestas sed, suscipit in velit. Aenean a tempus turpis. Suspendisse in eros est. Suspendisse potenti. Fusce consequat pretium eros, vel volutpat mi ultrices et. Phasellus ultrices ullamcorper sodales. Mauris feugiat malesuada lacus a aliquet. Morbi porta placerat dapibus. Donec fringilla fermentum feugiat. Ut libero metus, convallis eget mauris at, tempor convallis nibh. Ut maximus augue ut venenatis imperdiet. Nunc non velit dui.Donec nec ligula eu ex molestie lacinia. Nunc commodo quam vitae tortor pellentesque, a vulputate eros lobortis. Vestibulum feugiat maximus iaculis. Aliquam condimentum nunc mauris. Nam nec scelerisque mauris. Integer euismod purus nec ligula commodo, quis ornare massa ultricies. Vivamus euismod sapien vitae nibh rutrum semper. Donec sed gravida magna. Ut eu eros nec dolor sollicitudin tincidunt eu sit amet ex. Integer gravida lacinia auctor. Cras ac magna elit. Morbi dignissim elit in purus convallis suscipit. Fusce eget diam tortor. Fusce et tristique eros.'
        // },
        // {
        //     title:'Prueba de titulo 5',
        //     date: 'Publicado el dia ' + moment().date()+ " de "+moment().format("MMMM") + " del " + moment().format("YYYY"),
        //     content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac tellus fringilla dolor tincidunt tincidunt. Duis ullamcorper porta libero, at iaculis arcu imperdiet id. Ut nisl nibh, vehicula ut egestas sed, suscipit in velit. Aenean a tempus turpis. Suspendisse in eros est. Suspendisse potenti. Fusce consequat pretium eros, vel volutpat mi ultrices et. Phasellus ultrices ullamcorper sodales. Mauris feugiat malesuada lacus a aliquet. Morbi porta placerat dapibus. Donec fringilla fermentum feugiat. Ut libero metus, convallis eget mauris at, tempor convallis nibh. Ut maximus augue ut venenatis imperdiet. Nunc non velit dui.Donec nec ligula eu ex molestie lacinia. Nunc commodo quam vitae tortor pellentesque, a vulputate eros lobortis. Vestibulum feugiat maximus iaculis. Aliquam condimentum nunc mauris. Nam nec scelerisque mauris. Integer euismod purus nec ligula commodo, quis ornare massa ultricies. Vivamus euismod sapien vitae nibh rutrum semper. Donec sed gravida magna. Ut eu eros nec dolor sollicitudin tincidunt eu sit amet ex. Integer gravida lacinia auctor. Cras ac magna elit. Morbi dignissim elit in purus convallis suscipit. Fusce eget diam tortor. Fusce et tristique eros.'
        // },
      ];
      posts.forEach((item, index)=>{
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


      var theme = $("#theme");
      $("#to-green").click(function(){
        theme.attr("href","css/green.css")
      });

      $("#to-red").click(function(){
        theme.attr("href","css/red.css")
      });

      $("#to-blue").click(function(){
        theme.attr("href","css/blue.css")
      });


      ~$('.subir').click(function(e){
          e.preventDefault();

          $('html, body').animate({
              scrollTop: 0
          }, 500);
          return false;
      });

      $("#login form").submit(function(){
        var form_name = $("#form_name").val();
    
        localStorage.setItem("form_name", form_name);
    
      });
    
      var form_name = localStorage.getItem("form_name");
    
      if(form_name != null && form_name != "undefined"){
        var about_parrafo = $("#about p");
    
        about_parrafo.html("<br><strong>Bienvenido, "+form_name+"</strong> ");
        about_parrafo.append("<a href='#' id='logout'>Cerrar sesión</a>");
    
        $("#login").hide();
    
        $("#logout").click(function(){
          localStorage.clear();
          location.reload();
        });
    
      }

      if(window.location.href.indexOf('about')> -1){
        $('#acordeon').accordion();
      }
});