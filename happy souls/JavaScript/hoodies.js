var carts = document.querySelectorAll('.hoodies');

                                //  JS for Buckethats

for (let i=0; i< carts.length; i++){
    carts[i].addEventListener('click',function(){
        // var bucketIMG = document.querySelectorAll('.bucket-hats')[i].getAttribute("src"); 
      
        
    var bucketIMG = document.querySelectorAll('.hoodies')[i].getAttribute("src"); 
    var price= document.querySelectorAll('.hoodies')[i].getAttribute("alt");
    var decription= document.querySelectorAll('.hoodies')[i].getAttribute("id");
     
    localStorage.setItem('bucketIMGsrc',bucketIMG);
    localStorage.setItem('pPrice',price);
    localStorage.setItem('Id',decription);
    open("hoodie-oder.html");
    
      productImg()
});
    
    
    
}
// var bucketIMG = document.querySelectorAll('.bucket-hats')[i].getAttribute("src");


function productImg(){
   
   
  let src = localStorage.getItem('bucketIMGsrc');
  let gretPrice = localStorage.getItem('pPrice');
  let IDdes = localStorage.getItem('Id');
  

  document.querySelector('.checkout-image').setAttribute("src",src);
  document.querySelector(".hat-price").innerHTML= "" + IDdes ;
  document.querySelector(".img-description").innerHTML= "" +gretPrice;

//   let h1 = document.querySelector('hat-price');
// h1.innerHTML = gretPrice ;

}
productImg()




