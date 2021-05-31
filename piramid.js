// j value is reset and when loop break and than entere j = 5 value is  alaways



function piramid(){


    for(i=5; i>=0; i--){
   
   
            for(j=5; j>=i; j--){
   
                document.write('*');
            }
            document.write('<br>');
    }
   
   }
   
   piramid();
   
   