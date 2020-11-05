var carts = document.querySelectorAll('.T-shirts');

                                //  JS for Buckethats

for (let i=0; i< carts.length; i++){
    carts[i].addEventListener('click',function(){
        // var bucketIMG = document.querySelectorAll('.bucket-hats')[i].getAttribute("src"); 
      
        
    var bucketIMG = document.querySelectorAll('.T-shirts')[i].getAttribute("src"); 
    var price= document.querySelectorAll('.T-shirts')[i].getAttribute("alt");
    var decription= document.querySelectorAll('.T-shirts')[i].getAttribute("id");
     
    localStorage.setItem('bucketIMGsrc',bucketIMG);
    localStorage.setItem('pPrice',price);
    localStorage.setItem('Id',decription);
    
    open("Tees-oder.html");
      productImg()
});
    
    
    
}
// var bucketIMG = document.querySelectorAll('.bucket-hats')[i].getAttribute("src");


function productImg(){
   
   
  var src = localStorage.getItem('bucketIMGsrc');
  var gretPrice = localStorage.getItem('pPrice');
  var IDdes = localStorage.getItem('Id');
  

  document.querySelector(".checkout-image").setAttribute("src",src);
  document.querySelector(".hat-price").innerHTML= "" + IDdes ;
  document.querySelector(".img-description").innerHTML= "" +gretPrice;

//   let h1 = document.querySelector('hat-price');
// h1.innerHTML = gretPrice ;

}
productImg()
