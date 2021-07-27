 var socket2 = io.connect();
      
      socket2.on('temp', function(data){
        console.log(data.temp);
 document.getElementById('date').innerHTML = data.temp;  //update the temp
		var y = document.getElementById("date");
		
 		 if(data.temp == 'a'){ 
	y.style.color = "black";
    	
$("#q1")[0].click();
 	
		} if(data.temp == 'b'){ 
	y.style.color = "black";
    	
$("#q2")[0].click();

                } if(data.temp == 'c'){ 
	y.style.color = "black";
    	
$("#q3")[0].click();
 	
 		} if(data.temp == 'd'){ 
	y.style.color = "black";
    	
$("#q4")[0].click();

		} if(data.temp == 'e'){ 
	y.style.color = "black";
    	
$("#q5")[0].click();

	} if(data.temp == 'f'){ 
	y.style.color = "black";
    	
$("#q6")[0].click();
		
 		}else { 	
	y.style.color = "black";
    		    
               }
		});
		

