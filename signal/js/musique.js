 var socket2 = io.connect();
      
      socket2.on('temp', function(data){
        console.log(data.temp);
 document.getElementById('date').innerHTML = data.temp;  //update the temp
		var y = document.getElementById("date");
		
 		 if(data.temp == 'a'){ 
	y.style.color = "black";
    	function pageRedirect(){
 setTimeout(function(){
  window.location = "question1.html";
 },20000); 
}
pageRedirect();

 	
		} if(data.temp == 'b'){ 
	y.style.color = "black";
function pageRedirect(){
 setTimeout(function(){
  window.location = "question2.html";
 },20000); 
}
pageRedirect();
                } if(data.temp == 'c'){ 
	y.style.color = "black";
function pageRedirect(){
 setTimeout(function(){
  window.location = "question3.html";
 },20000); 
}
pageRedirect();
	
 		} if(data.temp == 'd'){ 
	y.style.color = "black";
function pageRedirect(){
 setTimeout(function(){
  window.location = "question4.html";
 },20000); 
}
pageRedirect();
		} if(data.temp == 'e'){ 
	y.style.color = "black";
function pageRedirect(){
 setTimeout(function(){
  window.location = "question5.html";
 },30000); 
}
pageRedirect();
	} if(data.temp == 'f'){ 
	y.style.color = "black";
function pageRedirect(){
 setTimeout(function(){
  window.location = "question6.html";
 },20000); 
}
pageRedirect();		
 		}else { 	
	y.style.color = "black";
    		    
               }
		});
		

