var i = 0;
var ima = [];
var time = 3000;

//image list
ima[0] = "https://m.media-amazon.com/images/I/71cp9PVuTfL._SX3000_.jpg";
ima[1] = "https://m.media-amazon.com/images/I/71qlKqpJnlL._SX3000_.jpg";
ima[2] = "https://m.media-amazon.com/images/I/71cQMXCLSvL._SX3000_.jpg";
ima[3] = "https://m.media-amazon.com/images/I/61aURrton0L._SX3000_.jpg";
ima[4] = "https://media.istockphoto.com/id/1305033092/photo/floating-womens-sunglasses-on-a-yellow-background.jpg?s=1024x1024&w=is&k=20&c=GbQsx9zb4nhOQTuabfR9fc3DRKk7SgiF_ihJXkd5Tp0=";
ima[5] = "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
ima[6] = "https://m.media-amazon.com/images/I/61O72XhcEkL._SX3000_.jpg";
ima[7] = "https://images.pexels.com/photos/1639729/pexels-photo-1639729.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

//function

function change_img(){
    document.slide.src = ima[i];

    if(i < ima.length - 1){
        i++;
    }else{
        i = 0;
    }
    setTimeout("change_img()",time);
}
window.onload = change_img()

/***** sidebar navigation  */
const sidebarNavigationEl = document.getElementById("sidebar-id");
const sidebarOpenNavigationEl = document.getElementById("open-nav-sidebar");
const sidebarCloseNavigationEl = document.getElementById("sidebar-close");

//  console.log(sidebarNavigationEl)

sidebarOpenNavigationEl.addEventListener("click", () => {
  sidebarNavigationEl.classList.toggle("slidebar-show");
});
sidebarCloseNavigationEl.addEventListener("click", () => {
  sidebarNavigationEl.classList.toggle("slidebar-show");
});
