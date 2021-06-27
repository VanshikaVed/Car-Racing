var canvas1 = document.getElementById('c1');
var race_track = canvas1.getContext("2d");

var car1_width = 100;
var car1_height = 65;
var car1_image = "car1.png";
var car1_x= 10;
var car1_y = 10;

var car2_width = 100;
var car2_height = 65;
var car2_image = "car2.png";
var car2_x = 10;
var car2_y = 90;

var bg_img = "race track.jpeg";

function add_imgs() {
    
    bg_pic = new Image();
    bg_pic.onload = bg_upload;
    bg_pic.src = bg_img;
    
    car1_pic = new Image();
    car1_pic.onload = car1_upload; 
    car1_pic.src = car1_image; 

    car2_pic = new Image();
    car2_pic.onload =car2_upload; 
    car2_pic.src = car2_image;

}
    
function bg_upload() {
    race_track.drawImage( bg_pic , 0 , 0 , canvas1.width , canvas1.height);
    }

function car1_upload() {
    race_track.drawImage(car1_pic, car1_x, car1_y, car1_width, car1_height);
    }

    function car2_upload() {
        race_track.drawImage(car2_pic, car2_x, car2_y, car2_width, car2_height);
        }
    
        window.addEventListener("keydown" , kd);

        function kd(x)
        {
        var key = x.keyCode;
        console.log(key);
        if(key == '38')
        {
        
        console.log("up1");
        }
        if(key =='40')
        {
        
        console.log("down1");
        }
        if(key == '37')
        {
        
        console.log("left1");
        }
        if(key == '39')
        {
      
        console.log("right1");
        }

        if(key == '87')
        {
        
        console.log("up2");
        }
        if(key =='83')
        {
        
        console.log("down2");
        }
        if(key == '65')
        {
       
        console.log("left2");
        }
        if(key == '68')
        {
        
        console.log("right2");
        }
        
    }