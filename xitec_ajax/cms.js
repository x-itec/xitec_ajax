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

// Spielerei, Methoden könnten auch ohne diese Checks geprüft werden

var sUserAgent = navigator.userAgent.toLowerCase();

var isNS4=document.layers?true:false;
var isOp=(sUserAgent.indexOf('opera')!=-1)?true:false;
var isIE=document.all&&!isOp?true:false;

var isMac=(sUserAgent.indexOf('mac')!=-1)?true:false;
var isMoz=(sUserAgent.indexOf('mozilla/5')!=-1&&sUserAgent.indexOf('opera')==-1&&sUserAgent.indexOf('msie')==-1)?true:false;
var isNS6=(sUserAgent.indexOf('netscape6')!=-1&&sUserAgent.indexOf('opera')==-1&&sUserAgent.indexOf('msie')==-1)?true:false;
var dom=document.getElementById?true:false;





/*
SKEL

 this.addevent = (function (f_event,f_function) 
   {  
   
   } );
*/


// ---------- Klassen-Lader ---------------

function loadscript(fn)
{
	//alert("Loading "+fn);
	/*
	if( document.createElement && document.childNodes ) {var scriptElem = document.createElement('script');scriptElem.setAttribute('src',fn);scriptElem.setAttribute('type','text/javascript');document.getElementsByTagName('head')[0].appendChild(scriptElem);}
	*/
var script = document.createElement('script');script.type = 'text/javascript';script.src = fn;document.getElementsByTagName('head')[0].appendChild(script);  
}

// ---------- Debug-Console

function dout(msg)
{
	var node=document.getElementById("debugoutput");
//	alert(msg);
	if(node) {node.value=node.value+msg+"\r\n";}
//	window.status=msg;
	
}


// --------- String Core-Klasse -----------------

loadscript("cms-class-string.js");


// ---------- DOM Core-Klasse ------------------

loadscript("cms-class-compat.js");


// ---------- Event Core-Klasse ------------------

loadscript("cms-class-event.js");





// ------------------------------------------------------------------------------------------




// ---------- Commercial ADDOns die verkauft werden sollen


loadscript("cms-class-plug-tablesort.js");

loadscript("cms-class-plug-tabpanel.js");

loadscript("cms-class-plug-ajax.js");

loadscript("cms-class-plug-help.js");
   
loadscript("cms-class-plug-automove.js");   
   
 
