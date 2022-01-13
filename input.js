

function valNombre(){
    let nom=document.querySelector(".nombre").value;
    nom=nom.toLowerCase()
    let per="qwertyuiopasdfghjklñzxcvbnm";
    let contador=0;
    for(let i=0;i<nom.length;i++){
        for(let x=0;x<per.length;x++){
            if(nom[i]==per[x]){
                contador++;
            }
        }
    }
    if(nom.length==contador){
        document.querySelector(".s_texto").style.display="none";
        document.querySelector(".s_texto").style.color="green";
    }else{
        document.querySelector(".s_texto").style.display="block";
        document.querySelector(".s_texto").style.color="red";
    }
}
function valApellido(){
    let apell=document.querySelector(".apellido").value;
    apell=apell.toLowerCase()
    let per="qwertyuiopasdfghjklñzxcvbnm";
    let contador=0;
    for(let i=0;i<apell.length;i++){
        for(let x=0;x<per.length;x++){
            if(apell[i]==per[x]){
                contador++;
            }
        }
    }
    if(apell.length==contador){
        document.querySelector(".s_textoA").style.display="none";
        document.querySelector(".s_textoA").style.color="green";
    }else{
        document.querySelector(".s_textoA").style.display="block";
        document.querySelector(".s_textoA").style.color="red";
    }
}
function valCorreo(){
    let apell=document.querySelector(".correo").value;
    apell=apell.toLowerCase()
    let per="qwertyuiopasdfghjklñzxcvbnm_@.1234567890";
    let contador=0;
    for(let i=0;i<apell.length;i++){
        for(let x=0;x<per.length;x++){
            if(apell[i]==per[x]){
                contador++;
            }
        }
    }
    if(apell.length==contador){
        document.querySelector(".s_caracter").style.display="none";
        document.querySelector(".s_caracter").style.color="green";
    }else{
        document.querySelector(".s_caracter").style.display="block";
        document.querySelector(".s_caracter").style.color="red";
    }
}

function veri(){
   let f1= document.querySelector(".s_texto").style.display!="block"
   let f2= document.querySelector(".s_textoA").style.display!="block"
   let f3=  document.querySelector(".s_caracter").style.display!="block"
    let nom=document.querySelector(".nombre").value;
    let apell=document.querySelector(".apellido").value;
    let corr=document.querySelector(".correo").value;
    
    if(nom!=""&&apell!=""&&corr!=""&&f1&&f2&&f3){
       
        document.querySelector(".mensaje").classList.add("verForm");
        document.querySelector(".sub_mensaje").innerHTML="Acción exitosa";
        document.querySelector(".sub_mensaje").style.background="rgb(160, 255, 126)";
        setTimeout(function(){
        document.querySelector(".mensaje").classList.remove("verForm");
        document.querySelectorAll(".inputs input").forEach(f=>{
            f.value=""
        })

        },4000)

    }else{
        document.querySelector(".mensaje").classList.add("verForm");
        document.querySelector(".sub_mensaje").innerHTML="Error, por favor completar todos los campos.";
        document.querySelector(".sub_mensaje").style.background="rgb(255, 145, 126)";
        setTimeout(function(){
        document.querySelector(".mensaje").classList.remove("verForm");

        },4000)
    }
}

document.addEventListener("keyup",function(){
    valNombre()
    valApellido()
    valCorreo()
})
document.querySelector(".formulario").addEventListener("submit",function(f){
  f.preventDefault()
veri()
})

