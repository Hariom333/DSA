function power(base,exp){

    if(exp==0){
    
        return 1;
    }
    
    var cal = base;
            cal =cal * power(base,exp-1);
    
    
    return cal;
    
    }
    
    power(2,3);
    
    
    document.write(power(2,3));
    
    
    