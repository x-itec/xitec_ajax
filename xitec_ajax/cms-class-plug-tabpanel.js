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
Schnipsel
document.getElementsByTagName("td")[4].setAttribute("height", 300);
 
Bedingung für ein Tabpanel: im Klassenbezeichner muss irgendwo tabpanel stehen
 
 
 
*/
 

 
function class_tabpanel()
{


  //Links setzen im Tabellenkopf
 this.headersetup = (function (f_tabelle) 
   {  
 
   var ccompat = new class_compat();
   //var cstring = new class_string();
   
   //alert("headersetup");
   var  tabellenkopf = f_tabelle.rows[0];
    var id=f_tabelle.getAttribute("id");
   for (var x=0;x<tabellenkopf.cells.length;x++) 
    {
        var cell = tabellenkopf.cells[x];var txt = ccompat.innerText(cell);
        //todo: Das Template muss als Vorlage generiert werden mit der Möglichkeit dies zu überschreiben, globale Variable
        v='<a href="#" '+'onclick="do_tabpanel(';
        v=v+"'"+id+"_node','";
        v=v+(x+1)+"');";
        v=v+'return false;">'+txt+'</a>';
      
        
        cell.innerHTML = v;
       // alert(cell.innerHTML);
    }
    
    //Tabellenzeilen zusammenfassen
    //
    hauptzelle= zelle=f_tabelle.rows[1].cells[0].innerHTML;
   // alert("Hauptzelle: "+hauptzelle);
    
      
       	 hauptzelle='<div id="'+id+'_node_1'+'">'+hauptzelle+'</div>';
       
    	for (jj=2;jj<f_tabelle.rows.length;jj++) 
   	   {
   	   	 //zelle=ccompat.innerText(f_tabelle.rows[jj].cells[0]);
   	   	 zelle=f_tabelle.rows[jj].cells[0].innerHTML;
   	   	 //alert("it: "+zelle);
   	   	 //Zelle in Divlayer umwandeln
   	   	 //Schnipsel
   	   	 //newnode=document.createElement("div");
   	   	 //newnode.innerHTML=newitem;
         //div.insertBefore(newnode,button);
         //if (moduleTable.rows(i).cells(10).firstChild.checked) {
         	 
  
   	   	
   	   	 zelle='<div id="'+id+'_node_'+jj+'" style="visibility:hidden;display:none">'+zelle+'</div>';
   	   	 hauptzelle=hauptzelle+zelle;   	   	 
   	   }
   	   //alert("Res "+hauptzelle);
   	   f_tabelle.rows[1].cells[0].innerHTML=hauptzelle;//innerText wäre Text
   	   
   	   ccompat.tbl_deleterows(f_tabelle,2,0);
   	  // f_tabelle.setAttribute("height",0);   
   	   
   	   
      
   } );

	
//Tabellen, die sortable im Klassenbezeichner haben, initialisieren. Beispiel: sortable_1 oder mein_sortable
	this.init = (function (f_event,f_function) 
   {  
   	var ccompat  =  new class_compat();
  	var ts       =  new class_tabpanel();    
   	var tabellen =  ccompat.getelements_tagname("table");
   	
   	  for (tc=0;tc<tabellen.length;tc++) 
   	   {
        tabelle = tabellen[tc];//indexof damit man styletechnisch nicht festsitzt als Alternative zu .className=='sortable')
        if (tabelle.className.indexOf("tabpanel") != -1 && tabelle.id) 
          {      
            
            ts.headersetup(tabelle);
          }
       }    

   
   } );




 this.showpanel = (function (f_tabelle,f_spalte) 
   {  
   	//Passendes Panel visible schalten
   	
   } );
   


   
} 


//Public-Funktion zum Tablesort, f_tabelle ist "this", und zeigt erstmal auf den Link, deswegen Back-Traversal nachher
function do_tabpanel(group,idnode)
{

		var c = new class_compat();
		c.showgroupelement(group,idnode);
		

}



/*
Globales Setup für die obigen Standard-Klassen, zB für Tabellensortierung usw.

--------------

*/

var ctabp = new class_tabpanel()
var ctevent   = new class_event();

ctevent.addevent("load",ctabp.init);
