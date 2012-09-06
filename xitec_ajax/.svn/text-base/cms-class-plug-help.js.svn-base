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
//Hilfesystem

var ceventh   = new class_event();


function showhelp(ev,el)
{
var c=new class_compat();	
	if(ev=="mover")
	{
		hilfetext=el.getAttribute("help_in");
	}
	if(ev=="mout")
	{
		hilfetext=el.getAttribute("help_out");		
	}
	
	var helpnode=(el.getAttribute("help_display")!="NULL")?el.getAttribute("help_display"):"guihelp";
	
	

node=c.getelement_id("guihelp");
node.innerHTML=hilfetext;

}


function helpengine_init()
{

var c=new class_compat();
var ev=new class_event(); 


	var nodes =  c.getelements_tagname("*");
   	
   	  for (tc=0;tc<nodes.length;tc++) 
   	  {
   	  	element=nodes[tc].tagName;
   	  	var help_in=nodes[tc].getAttribute("help_in");
   	  	var help_out=nodes[tc].getAttribute("help_out");
   	  	//var help_enter=nodes[tc].getAttribute("help_enter");
   	  	if(help_in)
   	  	 {
   	  	//geht leider nicht im IE
   	  	// 	nodes[tc].setAttribute('OnMouseOver','javascript:showhelp("'+help_in+'");');
   	    //nodes[tc].attachEvent("mouseover", highlight);
   	    
   	    nodes[tc].onmouseover=function(){showhelp("mover",this);} 
   	          	    
   	    
   	   /* nicht für ie  	    
   	     linkEvent = document.createAttribute('OnMouseOver');
         linkEvent.nodeValue ='javascript:showhelp("'+help_in+'");';
         nodes[tc].setAttributeNode(linkEvent);
       */
        
   	  	 	
   	  	 	
   	  	 }
   	  	 	if(help_out)
   	  	 {
   	  	 	 nodes[tc].onmouseout=function(){showhelp("mout",this);} 
   	  	//	nodes[tc].setAttribute('onmouseout','javascript:showhelp("'+help_out+'");');
   	  	 // nodes[tc].setAttribute('OnEnter','javascript:showhelp("'+help_enter+'");');
   	  	 
   	  	 }
   	  	
   	  }
 		
}

ceventh.addevent("load",helpengine_init);

