const header = document.querySelector("header");
window.addEventListener ("scroll",function(){
    header.classList.toggle("sticky", this.window.scrollY >0);
});
let menu =document.querySelector('#menu-icon');
let navmenu =document.querySelector('.navmenu');


menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    navmenu.classList.toggle('open');
}


//Gán login vs trang chủ
    function gotoLogin() {
      window.location.assign("login.html");
    }


//Thêm vào danh sách yêu thích 

function YeuThich(love) {
    if (love.classList.contains('heart-red')) {
        love.classList.remove('heart-red');
        alert("Đã xoá khỏi yêu thích");
    } else {
        love.classList.add('heart-red');
        alert("Đã thêm vào yêu thích");
    }
}

//Thông tin sản phẩm
function Sanphamvf9(){
    window.location.assign("chitietspvf9.html");
}

function Sanphamvf8(){
    window.location.assign("chitietspvf8.html");
}
function Sanphamvf9plus(){
    window.location.assign("chitietspvf9plus.html");
}
function Sanphamvf8plus(){
    window.location.assign("chitietspvf8plus.html");
}

//Slide show

//anh1
var index = 1;
function thayDoiAnh() {
    var imgs = ["./2vf9.webp", "./3vf9.webp", "./4vf9.webp", "./5vf9.webp"];
    document.getElementById("anh").src = imgs[index];
    index++;
    if (index === imgs.length) {
        index = 0;
    }
}
setInterval(thayDoiAnh, 2000);

//anh2
var index1 = 1;
function thayDoiAnh1() {
    var imgs1 = ["./1vf9.webp", "./4vf9.webp", "./6vf9.webp", "./5vf9.webp"];
    document.getElementById("anh1").src = imgs1[index1];
    index1++;
    if (index1 === imgs1.length) {
        index1= 0;
    }
}
setInterval(thayDoiAnh1, 2000);



var index2 = 1;
function thayDoiAnh2() {
    var imgs2 = ["./1vf8.webp", "./3vf8.webp", "./4vf8.webp", "./5vf8.webp"];
    document.getElementById("anh2").src = imgs2[index2];
    index2++;
    if (index2 === imgs2.length) {
        index2 = 0;
    }
}
setInterval(thayDoiAnh2, 2000);


var index3 = 1;
function thayDoiAnh3() {
    var imgs3 = ["./3vf8.webp", "./4vf8.webp", "./5vf8.webp", "./2vf8.webp"];
    document.getElementById("anh3").src = imgs3[index3];
    index3++;
    if (index3 === imgs3.length) {
        index3 = 0;
    }
}
setInterval(thayDoiAnh3, 2000);


//Chuyeenr anh chinh
var index5 = 1;
var imgs5 = ["./backgroupchuyenanh1.jpeg", "./backgroupchuyenanh2.webp", "./backgroupchuyenanh3.jpeg"];
var imgElement = document.getElementById("anh10");

function thayDoiAnh5() {
    imgElement.style.opacity ="0.87";
    setTimeout(function() {
        imgElement.src = imgs5[index5];
        index5++;
        if (index5 == imgs5.length)
            index5 = 0;
        imgElement.style.opacity = "1";
    }, 180);
}

setInterval(thayDoiAnh5, 4000);



//Chuyển đến

function muangay() {
    var muangay = document.getElementById("sp");
    muangay.scrollIntoView();
}

function lienhe() {
    var lienhe = document.getElementById("info");
    lienhe.scrollIntoView();
}

function sanpham() {
    var sanpham = document.getElementById("sp");
    sanpham.scrollIntoView();
}
function news() {
    var tintuc = document.querySelector(".Update-news");
    if (tintuc) {
        tintuc.scrollIntoView();
    }
}
function giohang() {
    var giohang = document.querySelector(".giohang1");
    if (giohang) {
        giohang.scrollIntoView();
    }
}




//Them vao gio hang 
var dsgiohang1 = [];

// Hàm được gọi khi nhấp vào nút "Thêm vào giỏ hàng"
function themVaoGioHang(tenSanPham, giaSanPham) {
    var sanPham = {
        ten: tenSanPham,
        gia: giaSanPham
    };
    dsgiohang1.push(sanPham);
    var giohangtong = document.getElementById("dsgiohang");
    giohangtong.appendChild(phantugiohang(sanPham));
    alert("Đã thêm vào giỏ hàng");
    tinhTongTien();
}

    // Hàm tính toán tổng giá trị giỏ hàng
function tinhTongTien() {
    var tongTien = 0;
    for (var i = 0; i < dsgiohang1.length; i++) {
        tongTien += dsgiohang1[i].gia;
    }

    var tongTien2 = document.getElementById("tong-tien");
    tongTien2.textContent = "Tổng số tiền phải thanh toán: " + tongTien + " đ";
}
// Hàm tạo một phần tử trong giỏ hàng
function phantugiohang(sanPham) {
    var news = document.createElement("li");
    news.textContent = sanPham.ten + ' - ' + sanPham.gia;
    return news;
}


//Dat hang

function datHang() {
    var ten = document.getElementById("ten").value;
    var sdt = document.getElementById("dienthoai").value;
    var diachi = document.getElementById("diachi").value;

    if (ten === "" || sdt === "" || diachi === "") {
        alert("Vui lòng nhập đầy đủ thông tin khách hàng.");
    } else {
        // Xử lý đặt hàng thành công
        alert("Đặt hàng thành công");

    }
}






