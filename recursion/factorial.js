function power(number){


    if(number==0){
    
        return 1;
    }
    
    var cal = number;
            cal =cal * power(number-1);
    
    
    return cal;
    
    }
    
    
    
    
    document.write(power(4));
    
    
    //2 *2 *1