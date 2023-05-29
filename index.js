const go = document.querySelector(".st2");
      go.addEventListener("mouseenter", entrar);
      go.addEventListener("mouseout", sair);
      
      function entrar() {
        go.innerHTML = "Obrigada a toda a equipa Step by Tech pela oportunidade!"
      };
      function sair() {
        go.innerHTML = "Student"
       };
      
const body = document.querySelector ("body");
const ico = document.getElementById("icon");
      
      ico.style.color = "gb(57, 60, 63)";
      ico.style.fontSize = "30px";
      ico.style.paddingRight = "60px";
                                                                                             
    
      ico.addEventListener("click", clicar);
      function clicar() {
        document.body.style.background= "url(noite.jpg)"
        document.body.style.backgroundSize = "cover" 
       };
    
const pointer = document.querySelector(".cursor");
       document.addEventListener(`mousemove`, function(e){
        let xPos = e.pageX;
        let yPos = e.pageY;
        pointer.style.left = xPos + `px`;
        pointer.style.top = yPos + `px`;
       });
           
    
    
    
