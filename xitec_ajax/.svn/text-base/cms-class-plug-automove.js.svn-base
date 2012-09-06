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
/*
Objekte automatisch auf dem Bildschirm verschieben
Bedingung: Classname muss automove beinhalten und das Objekt muss eine ID haben, zB irgendwas_automove oder nur automove dann ist das Objekt bewegbar

time = new Date ();
secs = time.getSeconds();
*/


var automove_mousedown=0;//1=down,0=up
var automove_lastclick=0;
var automove_lastnode;

function automove_init()
{
	var c=new class_compat();
 var nodes =  c.getelements_tagname("*");
   	dout("automove init");
   	  for (tc=0;tc<nodes.length;tc++) 
   	  {
   	  node=nodes[tc];
   	  
   	    if (node.className.indexOf("automove") != -1 || node.id.indexOf("automove") != -1 ) 
   	     {
   	     	dout("automove captureevent "+node.id);
   	     	//netscape wäre das gewesen
   	     //node.captureEvents(Event.MOUSEDOWN | Event.MOUSEUP | Event.MOUSEMOVE);   
   	     node.onmousemove=do_automove;
   	     node.onmousedown=do_automove;
   	     node.onmouseup=do_automove;    
   	     }
   	  }
}

function do_automove(e)
{
time = new Date ();
  node = (window.event) ? window.event.srcElement : e.target;
  
  	if(node==null){return;}	
 if (document.all) {
    tX = window.event.clientX + document.body.scrollLeft;
    tY = window.event.clientY + document.body.scrollTop;
  } else {
    tX = e.pageX;
    tY = e.pageY;
  }


//dout("automove event "+e.type);

//if (e.relatedTarget) node_related = e.relatedTarget;
//Else if (e.fromElement) node_related = e.fromElement;


if(e){ty=e.type;}

else{ty=window.event.type;}


if(ty=="mousedown")
 {
 	z=time.getTime();
 	if(automove_lastclick<1){automove_lastclick=z-1600;}
 	dout("zdiff: "+(z-automove_lastclick));
 	if(z-automove_lastclick<1500)
 	 {
 	 automove_mousedown=1;automove_lastnode=node;
 	 }
 	 automove_lastclick=z; 	
 	}
 	 
if(ty=="mouseup")
 {
 	automove_mousedown=0;
 	if(automove_lastnode) 	automove_lastnode.style.cursor="";
 }

if(automove_mousedown==0){return "";}
if(node!=automove_lastnode){return "";}

var weiter=0;


 

 if (node.className.indexOf("automove") != -1 || node.id.indexOf("automove") != -1 ){weiter=1;}
 if(weiter !=1){return "";} 
   	

//dout("automove Mousebutton "+e.which);//1,2,3,links,mitte,rechts
node.style.cursor="move";

//dout("offsetx "+e.offsetX);
//dout("layery "+e.layerY);
//dout("pagey "+e.pageY);	

//dout("CurrentPos x/y "+node.style.left +"/"+node.style.top);
node.style.top=tY-13+'px'; node.style.left=tX-10+'px';

//  node.style.top=e.layerY+"px";  node.style.left=e.layerX+"px";
  
  
  node.style.position="absolute";
//dout("Setze Node "+node.id+ "an Pos "+tX+"/"+tY); 


}

var ceventm   = new class_event();
ceventm.addevent("load",automove_init);
