// (C) X-ITEC; Boris Köster 2006. Alle Rechte reserviert.
// Lizensiert für X-ITEC CMS

/*----------------------------------------------------------------------------\
|                          X-ITEC Javascript Engine XJE                       |
|-----------------------------------------------------------------------------|
|                         Created by Boris Köster                             |
|                         (http://www.x-itec.net)                             |
|                                                                             |
|-----------------------------------------------------------------------------|
|                  Copyright (c) 2006 Boris Köster; X-ITEC                    |
| Boris Köster                                                                |
| Westfälische Straße 44                                                      |
| 57368 Lennestadt Kirchveischede                                             |
| 02721 989400 www.x-itec.net                                                 |
|-----------------------------------------------------------------------------|
| This software is provided "as is", without warranty of any kind, express or |
| implied, including  but not limited  to the warranties of  merchantability, |
| fitness for a particular purpose and noninfringement. In no event shall the |
| authors or  copyright  holders be  liable for any claim,  damages or  other |
| liability, whether  in an  action of  contract, tort  or otherwise, arising |
| from,  out of  or in  connection with  the software or  the  use  or  other |
| dealings in the software.                                                   |
| - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - |
| This  software is  available under the  three different licenses  mentioned |
| below.  To use this software you must chose, and qualify, for one of those. |
| - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - |
| The XJE Non-Commercial License                                              |
| Permits  anyone the right to use the  software in a  non-commercial context |
| free of charge.                                                             |
| - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - |
| The XJE Commercial license                                                  |
| Permits the  license holder the right to use  the software in a  commercial |
| context. Such license must be specifically obtained, however it's valid for |
| any number of  implementations of the licensed software.                    |
| - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - |
| GPL - The GNU General Public License                                        |
| Permits anyone the right to use and modify the software without limitations |
| as long as proper  credits are given  and the original  and modified source |
| code are included. Requires  that the final product, software derivate from |
| the original  source or any  software  utilizing a GPL  component, such  as |
| this, is also licensed under the GPL license.                               |
|-----------------------------------------------------------------------------|
| 2006-05-09 | Start Engineering XJE                                          |
|-----------------------------------------------------------------------------|
| Dependencies: *.js           Other modules for XJE                          |
\----------------------------------------------------------------------------*/
/* ----------------------------------------
        Ajax Technologie
   ------------------------------------------- */

  var request = null;
   
   
function class_form()
{
	//erstellt ein Formular-Parameterkonstrukt Formularfeldname=Inhaltswert&
	this.getvalue_enc = (function(f_elementid)
	 {
	 	//todo: class compat benutzen
	 	var val = document.getElementById(f_elementid).value;
	 	var nam = document.getElementById(f_elementid).name;
	 	
	 	val=nam+"="+ encodeURIComponent(val)+"&";
	 	return val;
	 	
	 } );
	 	 
}   
 
function class_ajax()
{
	//IE
	this.defaultresponse = (function (resu) 
	{
		
		if(request.responseText)
		 {
		  dout("Defaultresponse\nreadyState: "+request.readyState+"\nHTTP-Status: "+request.status+"\nEvent-Handler: "+request.responseText);
		  return request.responseText;
		 }
	return "";  

  } );
		   
	
	
	 this.getdata = (function (url,asynch,querystring,func_handleResponse) 
   {    
    var reqType ="POST";
    
    //Mozilla-based browsers
    if(window.XMLHttpRequest)
     {
     	  request = new XMLHttpRequest();} else if (window.ActiveXObject){request=new ActiveXObject("Msxml2.XMLHTTP");
        if (! request){request=new ActiveXObject("Microsoft.XMLHTTP");}
     }

    if(request)
     {
     	   if(func_handleResponse && func_handleResponse != "NULL"){  request.onreadystatechange=func_handleResponse; }
     	   else
     	   	{
     	   		//Default-Response Funktion einsetzen zu Testzwecken
     	   		var dres=new class_ajax();
     	   		request.onreadystatechange=dres.defaultresponse;
     	   	}
     	   	dout("Request-URL "+url+" query: "+querystring);
         request.open(reqType,url,asynch);
         request.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8");
         dout("SEND: "+querystring);
         request.send(querystring);
         var resu= request.responseText;
         dout("REC: "+resu);
         return resu;
                 

     }
     else {
        // alert("XMLHTTP-Fehler");
    }
    
    
   } );
  
  
   this.replacedata = (function (f_id,content) 
   {    
   		var c=new class_compat();
   		
   	  var node=c.getelement_id(f_id);
   	 //alert(node.innerHTML);
   	 //while (node.firstChild) {node.removeChild(node.firstChild);}
   	 node.innerHTML=content;  	
   } );
  
	
}

/*
Anwendungsbeispiel:

var ajax= new class_ajax();
var form = new class_form();

//Eingabefelddaten holen
var uebergabestring=form.getvalue_enc("ID_Kennung_des_Eingabefeldes");
// fertig w㱥 zB name=irgendwas& an dieser Stelle

ajax.getdata('www.lokal.x-itec.net/ajax-server.php',false,'x=y');

*/
