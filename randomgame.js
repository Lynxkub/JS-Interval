function random(){
    count=0;
    setInterval(function(){
        let randNum=Math.random();
        if(randNum<=.75){
            count++;
        }else{
            clearInterval(1);
            console.log(count);
        }
    }, 1000);
}

random();