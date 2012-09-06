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
//Handler für HTML Funktionen wie IDs/Tags usw.
function class_compat()
{
	
	this.getelement_id = (function (f_element) 
   {  
   	  dout("getelementid "+f_element);
   	  if (document.getElementById) {return document.getElementById(f_element);}
         else if (document.all) {return document.all[f_element];}
         else if (document.layers)	{return  document.layers[f_element];}
	 
     return null;
   } );



//Mehrere Elemente zurückliefern
 this.getelements_tagname = (function (f_tag) 
   {
   	 
        if (document.getElementsByTagName) {return document.getElementsByTagName(f_tag);}
        else if (document.all && document.all.tags) {return document.all.tags(f_tag);}
    
    return null;
   
   } );
   	
//innertext-Wrapper, mehrere Wege gesucht, geht scheinbar erstmal nur so   	
this.innerText = (function (f_element) 
   {  
   if (f_element.innerText) return f_element.innerText;
   	var str = "";	var nodes = f_element.childNodes;	var l = nodes.length;
   	for (var x=0;x<l;x++) 
   	{
		switch (nodes[x].nodeType) 
		 {
			case 1: //el
				str = this.innerText(nodes[x]);
				break;
			case 3:	//txt
				str = nodes[x].nodeValue;
				break;
		 }
	  }
	  return str;
   } );		
/*
1 	Elementknoten
2 	Attributknoten
3 	Textknoten
4 	Knoten für CDATA-Bereich
5 	Knoten für Entity-Referenz
6 	Knoten für Entity
7 	Knoten für Verarbeitungsanweisung
8 	Knoten für Kommentar
9 	Dokument-Knoten
10 	Dokumenttyp-Knoten
11 	Dokumentfragment-Knoten
12 	Knoten für Notation
*/


			
			
//Rückwärts-Traversierung und ein bestimmtes Element suchen, weil wir deren Attribute brauchen

 this.find_parentnode = (function (f_node,f_tagname) 
   {  
   	if(f_node == null) return null;//Rekursionsschutz
   	if(f_node.nodeType ==1 && f_node.tagName.toLowerCase() == f_tagname.toLowerCase()) { return f_node;}
   	var c = new class_compat();return c.find_parentnode(f_node.parentNode,f_tagname);
   	   
   } );
			
			

//löscht ein beliebiges Objekt, zB eine Table oder was man will, den kompletten Node
 this.deleteobject = (function (f_node) 
   {  
   var tx=f_node.parentNode;
   return tx.removeChild(f_node);
   } );
  
  
  
//Holt das Objekt via ElementID und setzt das gewünschte Attribut
 this.setattrib_id = (function (f_element,f_attrib,f_value) 
   {  
   	var c=new class_compat();
   	var node=c.getelement_id(f_element);
   	node.setAttribute(f_attrib,f_value);
  
   } );  
  

//holt ein Attribut
 this.getattrib_id = (function (f_element,f_attrib) 
   {  
   		var c=new class_compat();
   	  var node=c.getelement_id(f_element);
   	  return node.getAttribute(f_attrib);
   
   } );
  
  

//setzt das Attribut eines Nodes
 this.setattrib = (function (f_node,f_attrib,f_value) 
   {  
    	f_node.setAttribute(f_attrib,f_value);   
  
   } );  
  
 this.getattrib = (function (f_node,f_attrib) 
   {     	
   	  var res=f_node.getAttribute(f_attrib);   	
   	  return res;
   
   } );
  

//Original-Koordinaten eines ElementIDs  "hart" setzen 
//ElementID unsichtbar
 this.setxy = (function (f_elementid,posx,posy)
 {
 	var c=new class_compat();
 	var node=c.getelement_id(f_element);
 	    node.style.top=posy;
 	    node.style.left=posx; 	
   
   } );
  
//Original-Koordinaten ermitteln

 this.getx = (function (f_elementid)
 {
 	var c=new class_compat();
 	var node=c.getelement_id(f_elementid);
 	var pos=0;
  if (node.offsetParent){while (node.offsetParent){pos += node.offsetLeft;node = node.offsetParent;}}
return pos;   
   } );


 this.gety = (function (f_elementid)
 {
 	var c=new class_compat();
 	var node=c.getelement_id(f_elementid);
 	var pos=0;
  if (node.offsetParent){while (node.offsetParent){pos += node.offsetTop;node = node.offsetParent;}}
return pos;   
   } );
   
      
//Ein Element f_srcid an die Position eines anderen Nodes setzen plus Offset

 this.node2node = (function (f_srcid,f_targetid,xoffset,yoffset)
 {
 	dout("node2node src: "+f_srcid+" target: "+f_targetid);
 	
 	var c=new class_compat();
 	var nodex=c.getx(f_targetid);
 	var nodey=c.gety(f_targetid);
 	
 	var srcx=c.getx(f_srcid);
 	var srcy=c.gety(f_srcid);
 
 	
 	
 	var node=c.getelement_id(f_srcid);
 	dout("node2node target x "+nodex+" target y "+nodey);
 	dout("Setze "+f_targetid+" an Position y="+(nodey+yoffset));
 	dout("Setze "+f_targetid+" an Position x="+(nodex+xoffset)); 	
 	
 	var t1=parseInt(nodey)+parseInt(yoffset)+parseInt(node.style.paddingTop)+parseInt(node.style.borderTop);
 	
 	//node.style.offsetHeight beinhaltet die Höhe des Objekts, wenn ich diese abziehe, positioniert sie die Box mit der Unterseite bei Firefix
 	
 	ty=(nodey+yoffset);
 	tx=(nodex+xoffset);
 	if(isIE) //IE-Fix
 	{ 	
 		
 	//tx=tx+=document.body.scrollLeft;ty=ty+=document.body.scrollTop;
  tx=tx+10;ty=ty+16;
  }
 	
 	node.style.top=ty+"px";
 	node.style.left=tx+"px";
 	 node.style.position="absolute";
 	
 	var sx2=c.getx(f_targetid);
 	var sy2=c.gety(f_targetid);
 	
 	dout("xalt"+srcx+" xneu "+sx2);
 	dout("yalt"+srcy+" yneu "+sy2);
 	if(sx2 != nodex || sy2 != nodey)
 	 {
 	 	c.node2node(f_srcid,f_targetid,xoffset,yoffset); 	 	
 	 }
 	 c.show(f_srcid);
 	
   } ); 	
 	

//Ein Element f_srcid unter die Position eines anderen Nodes setzen plus Offset

 this.node2nodeb = (function (f_srcid,f_targetid,xoffset,yoffset)
 {
 	dout("node2node src: "+f_srcid+" target: "+f_targetid);
 	
 	var c=new class_compat();
 	var nodex=c.getx(f_targetid);
 	var nodey=c.gety(f_targetid);
 	
 	var srcx=c.getx(f_srcid);
 	var srcy=c.gety(f_srcid);
 
 	
 	
 	var node=c.getelement_id(f_srcid);
 	dout("node2node target x "+nodex+" target y "+nodey);
 	dout("Setze "+f_targetid+" an Position y="+(nodey+yoffset));
 	dout("Setze "+f_targetid+" an Position x="+(nodex+xoffset)); 	
 	
 	var t1=parseInt(nodey)+parseInt(yoffset)+parseInt(node.style.paddingTop)+parseInt(node.style.borderTop);
 	
 	//node.style.offsetHeight beinhaltet die Höhe des Objekts, wenn ich diese abziehe, positioniert sie die Box mit der Unterseite bei Firefix
 	
 	ty=(nodey+yoffset);
 	tx=(nodex+xoffset);
 	if(isIE) //IE-Fix
 	{ 	
 		
 	//tx=tx+=document.body.scrollLeft;ty=ty+=document.body.scrollTop;
  tx=tx+10;ty=ty+16;
  }
  
  ty=ty+parseInt(c.getelement_id(f_targetid).offsetHeight);
 	
 	node.style.top=ty+"px";
 	node.style.left=tx+"px";
 	 node.style.position="absolute";
 	
 	var sx2=c.getx(f_targetid);
 	var sy2=c.gety(f_targetid);
 	
 	dout("xalt"+srcx+" xneu "+sx2);
 	dout("yalt"+srcy+" yneu "+sy2);
 	if(sx2 != nodex || sy2 != nodey)
 	 {
 	 	c.node2nodeb(f_srcid,f_targetid,xoffset,yoffset);
 	 }
 	 c.show(f_srcid);
 	
   } ); 	
   




//Ein Element f_srcid über die Position eines anderen Nodes setzen plus Offset

 this.node2nodet = (function (f_srcid,f_targetid,xoffset,yoffset)
 {
 	dout("node2node src: "+f_srcid+" target: "+f_targetid);
 	
 	var c=new class_compat();
 	var nodex=c.getx(f_targetid);
 	var nodey=c.gety(f_targetid);
 	
 	var srcx=c.getx(f_srcid);
 	var srcy=c.gety(f_srcid);
 
 	
 	
 	var node=c.getelement_id(f_srcid);
 	dout("node2node target x "+nodex+" target y "+nodey);
 	dout("Setze "+f_targetid+" an Position y="+(nodey+yoffset));
 	dout("Setze "+f_targetid+" an Position x="+(nodex+xoffset)); 	
 	
 	var t1=parseInt(nodey)+parseInt(yoffset)+parseInt(node.style.paddingTop)+parseInt(node.style.borderTop);
 	
 	//node.style.offsetHeight beinhaltet die Höhe des Objekts, wenn ich diese abziehe, positioniert sie die Box mit der Unterseite bei Firefix
 	
 	ty=(nodey+yoffset);
 	tx=(nodex+xoffset);
 	if(isIE) //IE-Fix
 	{ 	
 		
 	//tx=tx+=document.body.scrollLeft;ty=ty+=document.body.scrollTop;
  tx=tx+10;ty=ty+16;
  }
  
  ty=ty-parseInt(c.getelement_id(f_srcid).offsetHeight);
 	
 	node.style.top=ty+"px";
 	node.style.left=tx+"px";
 	 node.style.position="absolute";
 	
 	var sx2=c.getx(f_targetid);
 	var sy2=c.gety(f_targetid);
 	
 	dout("xalt"+srcx+" xneu "+sx2);
 	dout("yalt"+srcy+" yneu "+sy2);
 	if(sx2 != nodex || sy2 != nodey)
 	 {
 	 	c.node2nodeb(f_srcid,f_targetid,xoffset,yoffset);
 	 }
 	c.show(f_srcid);
   } ); 	
   



  
//ElementID unsichtbar
 this.hide = (function (f_element,opt_hideblock)
 {
 	var c=new class_compat();
 	var node=c.getelement_id(f_element);
 	node.style.visibility="hidden";
 	if(opt_hideblock==true){ 	node.style.display="none";}
 
 }); 
 //ElementID sichtbar
 this.show = (function (f_element)
 {
 	var c=new class_compat();
 	var node=c.getelement_id(f_element);
 	
 	node.style.visibility="visible";
 	node.style.display="block";
 
 }); 
 
 //Eine Gruppe von Layern der Gruppe f_group ausblenden und Suffix f_showelement einblenden. Auto-Separator: _
 this.showgroupelement=(function (f_group,f_showelement)
 {
 	var layerliste= new Array();
	layerliste=document.getElementsByTagName('*');
	//layerliste=document.childNodes;

	re= new RegExp(f_group+"\_","gi");
	ii=layerliste.length;	

	for (i=0; i<ii; i++)
	 {		
		if (layerliste[i])
		{
		a=layerliste[i].id.match(re);				
			if (a != null) 
			 {
			 	node=document.getElementById(layerliste[i].id);
			 	node.style.visibility = "hidden";node.style.display = "none";   			 	
			 }		
	  } 
	 }
	 //alert("Suche: "+f_group+"_"+f_showelement);
	 if(document.getElementById(f_group+"_"+f_showelement))
	  {
	  	node=document.getElementById(f_group+"_"+f_showelement);
	    node.style.visibility = "visible";  
      node.style.display = "block"; 
    }	
 	 	 	
});
 
 
 //Maus-Selektion zurückgeben
 
 this.getselected=(function()
 {
 	var res="";
  if (window.getSelection) {res=window.getSelection;}
  if (document.getSelection) {res=document.getSelection;}
  if (document.selection) {res=document.selection.createRange().text;}  
  return res; 	
});
 
  
// Ein Element transparent werden lassen, von 0-100% visibility

 this.transparency=(function (f_elementid,f_transparency)
 {
 	 	var c=new class_compat();
 	  var node=c.getelement_id(f_elementid);
 	  node.style.filter="alpha(opacity="+f_transparency+")";
 	 	  
 	  node.style.opacity=parseFloat(f_transparency)/100;
 	  node.style.KhtmlOpacity=parseFloat(f_transparency)/100;  
 	     
 	 
/*
filter:alpha(opacity=50);
	opacity: 0.5;
	-moz-opacity:0.5;
	*/
});
 	  
  
 

//Formularelement
 this.enable = (function (f_element)
 {
 	var c=new class_compat();
 	var node=c.getelement_id(f_element);
 	node.disabled=false;
 	
});

 this.disable = (function (f_element) 
 {
 	var c=new class_compat();
 	var node=c.getelement_id(f_element);
 	node.disabled=true;
 	
});
        
 //Toggle       
 this.enadisa = (function (f_element)
 {
 	var c=new class_compat();
 	var node=c.getelement_id(f_element);
 	node.disabled=(node.disabled==true)?false:true; 	
});



 
 //Tabellen
 

 this.tbl_append = (function (t,f_htmltext) 
 {
 	//var t=document.getElementById(f_tabelleID);
 	var r=t.insertRow(t.rows.length);//letzte Row
 	var c=r.insertCell(0);
 	c.innerHTML=f_htmltext; 	
}); 	


 this.tbl_insert = (function (t,f_pos,f_htmltext) 
 {
 	//var t=document.getElementById(f_tabelleID);
 	var r=t.insertRow(f_pos);
 	var c=r.insertCell(0);
 	c.innerHTML=f_htmltext; 	 
   		
}); 


 this.tbl_deleterow = (function (t,f_pos) 
 {
 	//var t=document.getElementById(f_tabelleID);
  t.deleteRow(f_pos);
 
   		
});


this.tbl_deleterows = (function (t,f_startpos,f_numrows) 
 {
 	//var t=document.getElementById(f_tabelleID);
 	var l=t.rows.length;if(f_numrows==0){f_numrows=l-f_startpos-1;}
 	
 	for (i=f_startpos; i<=(f_startpos+f_numrows); i++)
	 {
	 	//alert("l");
	 		t.deleteRow(f_startpos);
	 }
 	
}); 	 

};


