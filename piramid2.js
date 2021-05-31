// j value is reset and when loop break and than entere j = 5 value is  alaways



function piramid(){

    var i,j;
    
    for(i=1;i<5; i++){
    
    
        for(j=5;j>=i; j--){
       document.write('*');
    
        }
        document.write("<br>");
    }
    
    }
    
    piramid();
    
    