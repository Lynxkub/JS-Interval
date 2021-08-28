function countdown(num){
    setInterval(function(){
        console.log(num);
        num--;
        if(num === 0){
            console.log("Done!");
            clearInterval(1);
        }
    }, 1000)
}

countdown(4);
