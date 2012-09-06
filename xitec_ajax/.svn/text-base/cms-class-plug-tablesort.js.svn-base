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
 
*/
 
 
/*
Anwendung Tablesort:
*/

 
function class_tablesort()
{


  //Links setzen im Tabellenkopf
 this.headersetup = (function (f_tabelle) 
   {  
 
   var ccompat = new class_compat();
   //var cstring = new class_string();
   
   var  tabellenkopf = f_tabelle.rows[0];
   
   for (var x=0;x<tabellenkopf.cells.length;x++) 
    {
        var cell = tabellenkopf.cells[x];var txt = ccompat.innerText(cell);
        //todo: Das Template muss als Vorlage generiert werden mit der Möglichkeit dies zu überschreiben, globale Variable
        cell.innerHTML = '<a href="#" '+'onclick="do_tablesort(this, '+x+');return false;">'+txt+'</a>';
    }
    
      
   } );

	
//Tabellen, die sortable im Klassenbezeichner haben, initialisieren. Beispiel: sortable_1 oder mein_sortable
	this.init = (function (f_event,f_function) 
   {  
   	var ccompat  =  new class_compat();
  	var ts       =  new class_tablesort();    
   	var tabellen =  ccompat.getelements_tagname("table");
   	
   	  for (tc=0;tc<tabellen.length;tc++) 
   	   {
        tabelle = tabellen[tc];//indexof damit man styletechnisch nicht festsitzt als Alternative zu .className=='sortable')
        if (tabelle.className.indexOf("sortable") != -1 || tabelle.id.indexOf("sortable") != -1) 
          {      
            
            ts.headersetup(tabelle);
          }
       }    

   
   } );


//Sortierfolge ist asc oder desc
 this.bubblesort = (function (f_tabelle,f_spalte) 
   {  
   	
   	//Tabelle in ein Array packen
   
   	 var rows = new Array();for (x=0;x<f_tabelle.rows.length;x++) { rows[x] = f_tabelle.rows[x]; }
   	 var c= new class_compat();
   	 sortorder=c.getattrib(f_tabelle,'sortorder');
   	 if(sortorder==null){sortorder='desc';}
   	 if(sortorder=='asc'){sortorder='desc';}else{sortorder='asc';}
   	 c.setattrib(f_tabelle,'sortorder',sortorder);
   	 // alert(c.getattrib(f_tabelle,'sortorder'));
   	 
   	//Tabelle sortieren
   
   // ----------- Stringsort, desc
   if (sortorder=='desc')
   {
    var sortreload=0;
    do
    {
    	sortreload=0;
   	for (jj=1;jj<f_tabelle.rows.length-1;jj++) 
   	 {
   	   	
   	 	zelle1=c.innerText(rows[jj].cells[f_spalte]);
   	 	zelle2=c.innerText(rows[jj+1].cells[f_spalte]);
   	    		
   		if (zelle1<zelle2)
   		 {   		 	
   		   // alert("z1 < z2"+zelle1+" "+zelle2);
   		 	 var r=rows[jj];rows[jj]=rows[jj+1];rows[jj+1]=r;
   		 	 sortreload=1;  		 	
   		 	 
   		 }//if
   		
   	 }//for
   //	 alert("Reload "+sortreload);
	  }while(sortreload==1)//do
	 }//sortorder = desc
	 
	  
	 // ---------- Ende Stringsort, desc
	 
	 // ---------- Stringsort, asc

  if (sortorder=='asc')
   {
    var sortreload=0;
    do
    {
    	sortreload=0;
   	for (jj=1;jj<f_tabelle.rows.length-1;jj++) 
   	 {
   	   	
   	 	zelle1=c.innerText(rows[jj].cells[f_spalte]);
   	 	zelle2=c.innerText(rows[jj+1].cells[f_spalte]);
   	    		
   		if (zelle1>zelle2)
   		 {   		 	
   		   // alert("z1 < z2"+zelle1+" "+zelle2);
   		 	 var r=rows[jj];rows[jj]=rows[jj+1];rows[jj+1]=r;
   		 	 sortreload=1;  		 	
   		 	 
   		 }//if
   		
   	 }//for
   //	 alert("Reload "+sortreload);
	  }while(sortreload==1)//do
	 }//sortorder = desc
	 
	 
	 
	 
	 // ---------- Ende Stringsort, asc 
	  
	  
	  
   	
   		for (x=1;x<f_tabelle.rows.length;x++) 
   	 {   	
   	 f_tabelle.tBodies[0].appendChild(rows[x]);
   	}
   	
   	
   	
   	return f_tabelle;
   	
   	
   	/*
   	
   	//Tabelle zurückpacken
   	var t2=f_tabelle;
   	alert("Tabellenspalten: "+f_tabelle.rows.length);
   	for (x=1;x<f_tabelle.rows.length;x++) 
   	{   
//   		alert("repack "+c.innerText(f_tabelle.rows[x-1].cells[f_spalte]));		
   		t2.rows[x]= rows[x-1] ; 
   	}
   	*/
   	
   	
   	   	 return t2;
   
   } );
   
} 

//Public-Funktion zum Tablesort, f_tabelle ist "this", und zeigt erstmal auf den Link, deswegen Back-Traversal nachher
function do_tablesort(f_tabelle,f_index)
{
		var c = new class_compat();
		var tabelle =c.find_parentnode(f_tabelle,"table");

	var body = tabelle.parentNode;

/*
	alert("body:"+body);
	alert("Spalte: "+f_index);
	alert("Tabelle: "+tabelle);
*/
	
	//c.deleteobject(tabelle);
  	
			
	var tsort= new class_tablesort();
	
	//Wir werden die Originaltabelle nicht löschen, sondern einfach die Rows austauschen
	tabelle2=tsort.bubblesort(tabelle,f_index);

/*
for (x=1;x<tabelle2.rows.length;x++) 
   	{   
   		// alert("VERIFY CELLS: "+c.innerText(tabelle2.rows[x-1].cells[f_index]));		
   	
   	}
*/
  
  //alert("Parent: "+tabelle.parentNode);
  body.appendChild(tabelle);
  
  tabelle.parentNode.replaceChild (tabelle2,tabelle);
  
  
  
  
  /*
  alert(body);
  body.removeChild(tabelle); 	
  alert("entfernt");
 	body.appendChild(tabelle2);
*/

}



/*
Globales Setup für die obigen Standard-Klassen, zB für Tabellensortierung usw.

--------------

*/

var ctabelle = new class_tablesort()
var cevent   = new class_event();

cevent.addevent("load",ctabelle.init);
