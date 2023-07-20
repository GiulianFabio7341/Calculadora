const div=document.getElementById('p');
    const valor=div.innerHTML; 
             console.log(valor);
        div.style.height=('100px');

function resultado(){
     const isso = document.getElementById('texto')
     const valida=isso.value
     const loucura=resultado1(valida)
     alert('Resultado:'+loucura);  
}
function resultado1(valida) {
     return Function('"use strict"; return (' + valida+')')();

   }
function adciona(){
     const isso = document.getElementById('texto')
     isso.value +="+";
}
function subtrai(){
     const isso = document.getElementById('texto')
     isso.value +="-";
}
function multiplica(){
     const isso = document.getElementById('texto')
     isso.value +="*";
}
function divide(){
     const isso = document.getElementById('texto')
     isso.value +="/";
}

function capturarTeclado(event) {
     // Verificar se a tecla pressionada é a tecla "Enter"
     if (event.key === "Enter") {
       // Executar a operação quando a tecla "Enter" for pressionada
       resultado(); 
     }
   }

   // Adicionar um ouvinte de evento para capturar o evento de teclado no campo de entrada
   document.getElementById("texto").addEventListener("keydown", capturarTeclado);
   document.getElementById("formulario").addEventListener("submit", function(event) {
     event.preventDefault(); // Impede o comportamento padrão de enviar o formulário
   });

   const est=document.getElementById('potencia2');
   est.addEventListener("click",pt2);

   function pt2(){
     const isso = document.getElementById('texto')
     console.log(isso.value**2);
   }

   const est1=document.getElementById('potencia3');
   est1.addEventListener("click",pt3);

   function pt3(){
     const isso = document.getElementById('texto')
     console.log(isso.value**3);
   }

   const raiz2=document.getElementById('raiz2');
   raiz2.addEventListener("click",raizquadrada);

   function raizquadrada(){
     const raizq=document.getElementById('texto');
    console.log(Math.sqrt(raizq.value))
   }

   const raiz3=document.getElementById('raiz3');
   raiz3.addEventListener("click",raizcubica);

   function raizcubica(){
     const raizq=document.getElementById('texto');
     console.log(Math.cbrt(raizq.value));
   }

   const numero=document.getElementById('numero9');
   numero.addEventListener("click",numeronove);
     function numeronove(){
    const numero9=document.getElementById('texto');
    numero9.value+=('9');
   }
   const numero8=document.getElementById('numero8');
   numero8.addEventListener("click",numerooito);
     function numerooito(){
    const numero8=document.getElementById('texto');
    numero8.value+=('8');
   }
   const numero7=document.getElementById('numero7');
   numero7.addEventListener("click",numerosete);
     function numerosete(){
    const numero7=document.getElementById('texto');
    numero7.value+=('7');
   }
   const numero6=document.getElementById('numero6');
   numero6.addEventListener("click",numeroseis);
     function numeroseis(){
    const numero6=document.getElementById('texto');
    numero6.value+=('6');
   }

   const numero5=document.getElementById('numero5');
   numero5.addEventListener("click",numerocinco);
     function numerocinco(){
    const numero5=document.getElementById('texto');
    numero5.value+=('5');
   }

   const numero4=document.getElementById('numero4');
   numero4.addEventListener("click",numeroquatro);
     function numeroquatro(){
    const numero4=document.getElementById('texto');
    numero4.value+=('4');
   }

   const numero3=document.getElementById('numero3');
   numero3.addEventListener("click",numerotres);
     function numerotres(){
    const numero3=document.getElementById('texto');
    numero3.value+=('3');
   }

   const numero2=document.getElementById('numero2');
   numero2.addEventListener("click",numerodois);
     function numerodois(){
    const numero2=document.getElementById('texto');
    numero2.value+=('2');
   }

   const numero1=document.getElementById('numero1');
   numero1.addEventListener("click",numeroum);
     function numeroum(){
    const numero1=document.getElementById('texto');
    numero1.value+=('1');
   }
   const numero0=document.getElementById('numero0');
   numero0.addEventListener("click",numerozero);
     function numerozero(){
    const numero0=document.getElementById('texto');
    numero0.value+=('0');
   }

   const virgula1=document.getElementById('virgula');
   virgula1.addEventListener("click",virgula);
     function virgula(){
    const numero0=document.getElementById('texto');
    numero0.value+=('.');
   }

   const teste=document.getElementById('p');
   
         
    

   
