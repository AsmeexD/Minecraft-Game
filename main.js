var canvas = new fabric.Canvas('myCanvas');

block_image_width =30;
block_image_height =30;

player_x = 10;
player_y = 10;

var player_object="";
var block_object="";
function update_player(){
    fabric.Image.fromURL("player.png", function(Img){
        player_object= Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);
    });
    }
    function update_blocks(get_image){
        fabric.Image.fromURL(get_image, function(Img){
            block_object= Img;
            block_object.scaleToWidth(block_image_width);
            block_object.scaleToHeight(block_image_height);
            block_object.set({
                top:player_y,
                left:player_x
            });
            canvas.add(block_object);
        });
        }
window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    keypressed= e.keyCode;
    console.log(keypressed);
    if(keypressed=='87'){
       update_blocks("wall.jpg");
    }
    if(keypressed=='71'){
        update_blocks("ground.png");
     }
     if(keypressed=='76'){
        update_blocks("light_green.png");
     }
     if(keypressed=='84'){
        update_blocks("trunk.jpg");
     }
     if(keypressed=='82'){
        update_blocks("roof.jpg");
     }
     if(keypressed=='89'){
        update_blocks("yellow_wall.png");
     }
     if(keypressed=='68'){
        update_blocks("dark_green.png");
     }
     if(keypressed=='85'){
        update_blocks("unique.png");
     }
     if(keypressed=='67'){
        update_blocks("cloud.jpg");
     }
     if(e.shiftKey== true && keypressed== '80'){
         block_image_height = block_image_height +10;
         block_image_width = block_image_width +10;
         document.getElementById("current_height").innerHTML= block_image_height;
         document.getElementById("current_width").innerHTML= block_image_width;
     }
     if(e.shiftKey== true && keypressed== '77'){
        block_image_height = block_image_height -10;
        block_image_width = block_image_width -10;
        document.getElementById("current_height").innerHTML= block_image_height;
        document.getElementById("current_width").innerHTML= block_image_width;
    }
    if(keypressed== '38'){
        up();
    }
    if(keypressed== '40'){
        down();
    }
    if(keypressed== '37'){
        left();
    }
    if(keypressed== '39'){
        right();
    }
}
