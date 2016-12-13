//Speechpad javascript
document.getElementById("chkinteg").checked = true;
document.getElementById("recbtn").click();
//document.getElementsByName("toglevid")[0].click()
//togleper translation
//document.getElementById("pagelang").value="en-GB";

//microphone on
document.onkeyup=function(e)
{
  //var e = e || window.event; // for IE to cover IEs window event-object
  //if(e.which == 49) 
 // {
    
//document.getElementById("pagelang").value="en-GB"; 

//  }
//if(e.which == 50) 
//  {
    
//    document.getElementById("pagelang").value="fr-FR"; 
//
//  }
//if(e.which == 51) 
//  {
    
//    document.getElementById("pagelang").value="de-DE"; 

//  }
if(e.altKey && e.shiftKey && e.which == 77) 
  {    
document.getElementById("recbtn").click();
  }
if(e.altKey && e.shiftKey && e.which == 67) 
  {    
document.getElementsByName("toglevid")[0].click(); //compact
  }
if(e.altKey && e.shiftKey && e.which == 84) 
  {	  
document.getElementsByName("togleper")[0].click(); //compact
  }
if(e.which == 67) 
  {	  
document.getElementById("chkbufer").checked = true;
document.getElementById("chkinteg").checked = false;
  }  
if(e.which == 79) 
  {	  
document.getElementById("chkinteg").checked = true;
document.getElementById("chkbufer").checked = false;
  }


  }

  