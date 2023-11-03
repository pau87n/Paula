
let mainImg = document.getElementById("mainImg");
let boxImgFixed = document.getElementById("boxImgFixed");
let botonCerrar = document.getElementById("botonCerrar")
let iconLeft = document.getElementById("iconLeft");
let iconRight = document.getElementById("iconRight");
let mainImgFixed1 = document.getElementById("mainImgFixed1");
let mainImgFixed2 = document.getElementById("mainImgFixed2");
let mainImgFixed3 = document.getElementById("mainImgFixed3");
let mainImgFixed4 = document.getElementById("mainImgFixed4");
let thumb1 = document.getElementById("thumb1");
let thumb2 = document.getElementById("thumb2");
let thumb3 = document.getElementById("thumb3");
let thumb4 = document.getElementById("thumb4");
let boxMinus = document.getElementById("boxMinus");
let boxCant = document.getElementById("boxCant");
let boxPlus = document.getElementById("boxPlus");
let precioUnitario = document.getElementById("precioUnitario");
let valorUnitario = 100000;
let valorTotal = document.getElementById("valorTotal");


mainImg.addEventListener("click", function() {
    boxImgFixed.classList.remove("box-img-fixed-hidden");
    boxImgFixed.classList.add("box-img-fixed");
})

iconRight.addEventListener("click", function(){
    if (!mainImgFixed1.classList.contains("img-hidden")) {
        mainImgFixed1.classList.add("img-hidden");
        mainImgFixed2.classList.remove("img-hidden");
        mainImg.setAttribute("src","img/image-product-2.jpeg");
    }
    else if(!mainImgFixed2.classList.contains("img-hidden")) {
        mainImgFixed2.classList.add("img-hidden");
        mainImgFixed3.classList.remove("img-hidden");
        mainImg.setAttribute("src","img/image-product-3.jpeg");
    }
    else if(!mainImgFixed3.classList.contains("img-hidden")) {
        mainImgFixed3.classList.add("img-hidden");
        mainImgFixed4.classList.remove("img-hidden");
        mainImg.setAttribute("src","img/image-product-4.jpeg");
    }
    else if(!mainImgFixed4.classList.contains("img-hidden")) {
        mainImgFixed4.classList.add("img-hidden");
        mainImgFixed1.classList.remove("img-hidden");
        mainImg.setAttribute("src","img/image-product-1.jpeg");
    }
})

iconLeft.addEventListener("click", function(){
    if (!mainImgFixed4.classList.contains("img-hidden")) {
        mainImgFixed4.classList.add("img-hidden");
        mainImgFixed3.classList.remove("img-hidden");
        mainImg.setAttribute("src","img/image-product-3.jpeg");
    }
    else if(!mainImgFixed3.classList.contains("img-hidden")) {
        mainImgFixed3.classList.add("img-hidden");
        mainImgFixed2.classList.remove("img-hidden");
        mainImg.setAttribute("src","img/image-product-2.jpeg");
    }
    else if(!mainImgFixed2.classList.contains("img-hidden")) {
        mainImgFixed2.classList.add("img-hidden");
        mainImgFixed1.classList.remove("img-hidden");
        mainImg.setAttribute("src","img/image-product-1.jpeg");
    }
    else if(!mainImgFixed1.classList.contains("img-hidden")) {
        mainImgFixed1.classList.add("img-hidden");
        mainImgFixed4.classList.remove("img-hidden");
        mainImg.setAttribute("src","img/image-product-4.jpeg");
    }
});

botonCerrar.addEventListener("click", function(){
    boxImgFixed.classList.add("box-img-fixed-hidden");
    boxImgFixed.classList.remove("box-img-fixed");

})

thumb1.addEventListener("click", function(){
    mainImg.setAttribute("src","img/image-product-1.jpeg")
    mainImgFixed1.classList.remove("img-hidden")
    mainImgFixed2.classList.add("img-hidden")
    mainImgFixed3.classList.add("img-hidden")
    mainImgFixed4.classList.add("img-hidden")
});
thumb2.addEventListener("click", function(){
    mainImg.setAttribute("src","img/image-product-2.jpeg")
    mainImgFixed1.classList.add("img-hidden")
    mainImgFixed2.classList.remove("img-hidden")
    mainImgFixed3.classList.add("img-hidden")
    mainImgFixed4.classList.add("img-hidden")
});
thumb3.addEventListener("click", function(){
    mainImg.setAttribute("src","img/image-product-3.jpeg")
    mainImgFixed1.classList.add("img-hidden")
    mainImgFixed2.classList.add("img-hidden")
    mainImgFixed3.classList.remove("img-hidden")
    mainImgFixed4.classList.add("img-hidden")
});
thumb4.addEventListener("click", function(){
    mainImg.setAttribute("src","img/image-product-4.jpeg")
    mainImgFixed1.classList.add("img-hidden")
    mainImgFixed2.classList.add("img-hidden")
    mainImgFixed3.classList.add("img-hidden")
    mainImgFixed4.classList.remove("img-hidden")
});

let valorUnitarioAux = Intl.NumberFormat("DE-de").format(valorUnitario)
document.getElementById("precioUnitario").innerHTML = "$" + valorUnitarioAux

boxPlus.addEventListener("click", function(){
    let cantidad = boxCant.innerHTML;
    if (cantidad < 10) {
        cantidad++;
        document.getElementById("boxCant").innerHTML = cantidad;
        let valorTotalInt = cantidad * valorUnitario;
        let valorTotalAux = Intl.NumberFormat("DE-de").format(valorTotalInt)
        document.getElementById("valorTotal").innerHTML = "$" + valorTotalAux
    
  }
});

boxMinus.addEventListener("click", function(){
    let cantidad = boxCant.innerHTML;
    if (cantidad >0) {
        cantidad--;
    document.getElementById("boxCant").innerHTML = cantidad;
    let valorTotalInt = cantidad * valorUnitario;
    let valorTotalAux = Intl.NumberFormat("DE-de").format(valorTotalInt)
    document.getElementById("valorTotal").innerHTML = "$" + valorTotalAux
  }
});


  

