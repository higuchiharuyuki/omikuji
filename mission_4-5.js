function omikuji_result() {
    var omikuji = new Array("大吉","中吉","小吉","末吉","凶");
    var number1 = Math.random();
    var number2 = number1 * 5;
    var number = Math.floor(number2);
    var message = omikuji[number];
    
    let img = document.getElementById("image_place");
    if(number==0){
        img.src = "omikuji_daikichi.png";
    }else if(number==1){
        img.src = "omikuji_chuukichi.png";
    }else if(number==2){
        img.src = "omikuji_syoukichi.png"
    }else if(number==3){
        img.src = "omikuji_suekichi.png"
    }else{
        img.src = "omikuji_kyou.png"
    }
    var object=document.getElementById("omikuji");
    object.innerText=message;


}

