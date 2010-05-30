/*
 * Menu: MillerMedeiros > HTML > Decode HTML 4.0 entities
 * Kudos: Miller Medeiros (www.millermedeiros.com)
 * License: MIT
 * DOM: http://download.eclipse.org/technology/dash/update/org.eclipse.eclipsemonkey.lang.javascript
 */
 
function main() {
 
	if(editors.activeEditor !== undefined){
	
			var activeEditor = editors.activeEditor,
				selectionRange = activeEditor.selectionRange,
				startingOffset = selectionRange.startingOffset,
				endingOffset = selectionRange.endingOffset,
				deleteLength = endingOffset - startingOffset,
				source = activeEditor.source,
				selected = source.substring(startingOffset, endingOffset),
				output ='';
				
			//apply transformations
			//entities copied from Wikipedia ( http://en.wikipedia.org/wiki/List_of_XML_and_HTML_character_entity_references#Character_entity_references_in_HTML )
			output = selected.replace(/&quot;/g, "\x22")
							.replace(/&amp;/g, "\x26")
							.replace(/&lt;/g, "\x3C")
							.replace(/&gt;/g, "\x3E")
							.replace(/&euro;/g, "\x80")
							.replace(/&sbquo;/g, "\x82")
							.replace(/&fnof;/g, "\x83")
							.replace(/&bdquo;/g, "\x84")
							.replace(/&hellip;/g, "\x85")
							.replace(/&dagger;/g, "\x86")
							.replace(/&Dagger;/g, "\x87")
							.replace(/&circ;/g, "\x88")
							.replace(/&permil;/g, "\x89")
							.replace(/&Scaron;/g, "\x8A")
							.replace(/&lsaquo;/g, "\x8B")
							.replace(/&OElig;/g, "\x8C")
							.replace(/&lsquo;/g, "\x91")
							.replace(/&rsquo;/g, "\x92")
							.replace(/&ldquo;/g, "\x93")
							.replace(/&rdquo;/g, "\x94")
							.replace(/&bull;/g, "\x95")
							.replace(/&ndash;/g, "\x96")
							.replace(/&mdash;/g, "\x97")
							.replace(/&tilde;/g, "\x98")
							.replace(/&trade;/g, "\x99")
							.replace(/&scaron;/g, "\x9A")
							.replace(/&rsaquo;/g, "\x9B")
							.replace(/&oelig;/g, "\x9C")
							.replace(/&Yuml;/g, "\x9F")
							.replace(/&nbsp;/g, "\xA0")
							.replace(/&iexcl;/g, "\xA1")
							.replace(/&cent;/g, "\xA2")
							.replace(/&pound;/g, "\xA3")
							.replace(/&curren;/g, "\xA4")
							.replace(/&yen;/g, "\xA5")
							.replace(/&brvbar;/g, "\xA6")
							.replace(/&sect;/g, "\xA7")
							.replace(/&uml;/g, "\xA8")
							.replace(/&copy;/g, "\xA9")
							.replace(/&ordf;/g, "\xAA")
							.replace(/&laquo;/g, "\xAB")
							.replace(/&not;/g, "\xAC")
							.replace(/&shy;/g, "\xAD")
							.replace(/&reg;/g, "\xAE")
							.replace(/&macr;/g, "\xAF")
							.replace(/&deg;/g, "\xB0")
							.replace(/&plusmn;/g, "\xB1")
							.replace(/&sup2;/g, "\xB2")
							.replace(/&sup3;/g, "\xB3")
							.replace(/&acute;/g, "\xB4")
							.replace(/&micro;/g, "\xB5")
							.replace(/&para;/g, "\xB6")
							.replace(/&middot;/g, "\xB7")
							.replace(/&cedil;/g, "\xB8")
							.replace(/&sup1;/g, "\xB9")
							.replace(/&ordm;/g, "\xBA")
							.replace(/&raquo;/g, "\xBB")
							.replace(/&frac14;/g, "\xBC")
							.replace(/&frac12;/g, "\xBD")
							.replace(/&frac34;/g, "\xBE")
							.replace(/&iquest;/g, "\xBF")
							.replace(/&Agrave;/g, "\xC0")
							.replace(/&Aacute;/g, "\xC1")
							.replace(/&Acirc;/g, "\xC2")
							.replace(/&Atilde;/g, "\xC3")
							.replace(/&Auml;/g, "\xC4")
							.replace(/&Aring;/g, "\xC5")
							.replace(/&AElig;/g, "\xC6")
							.replace(/&Ccedil;/g, "\xC7")
							.replace(/&Egrave;/g, "\xC8")
							.replace(/&Eacute;/g, "\xC9")
							.replace(/&Ecirc;/g, "\xCA")
							.replace(/&Euml;/g, "\xCB")
							.replace(/&Igrave;/g, "\xCC")
							.replace(/&Iacute;/g, "\xCD")
							.replace(/&Icirc;/g, "\xCE")
							.replace(/&Iuml;/g, "\xCF")
							.replace(/&ETH;/g, "\xD0")
							.replace(/&Ntilde;/g, "\xD1")
							.replace(/&Ograve;/g, "\xD2")
							.replace(/&Oacute;/g, "\xD3")
							.replace(/&Ocirc;/g, "\xD4")
							.replace(/&Otilde;/g, "\xD5")
							.replace(/&Ouml;/g, "\xD6")
							.replace(/&times;/g, "\xD7")
							.replace(/&Oslash;/g, "\xD8")
							.replace(/&Ugrave;/g, "\xD9")
							.replace(/&Uacute;/g, "\xDA")
							.replace(/&Ucirc;/g, "\xDB")
							.replace(/&Uuml;/g, "\xDC")
							.replace(/&Yacute;/g, "\xDD")
							.replace(/&THORN;/g, "\xDE")
							.replace(/&szlig;/g, "\xDF")
							.replace(/&agrave;/g, "\xE0")
							.replace(/&aacute;/g, "\xE1")
							.replace(/&acirc;/g, "\xE2")
							.replace(/&atilde;/g, "\xE3")
							.replace(/&auml;/g, "\xE4")
							.replace(/&aring;/g, "\xE5")
							.replace(/&aelig;/g, "\xE6")
							.replace(/&ccedil;/g, "\xE7")
							.replace(/&egrave;/g, "\xE8")
							.replace(/&eacute;/g, "\xE9")
							.replace(/&ecirc;/g, "\xEA")
							.replace(/&euml;/g, "\xEB")
							.replace(/&igrave;/g, "\xEC")
							.replace(/&iacute;/g, "\xED")
							.replace(/&icirc;/g, "\xEE")
							.replace(/&iuml;/g, "\xEF")
							.replace(/&eth;/g, "\xF0")
							.replace(/&ntilde;/g, "\xF1")
							.replace(/&ograve;/g, "\xF2")
							.replace(/&oacute;/g, "\xF3")
							.replace(/&ocirc;/g, "\xF4")
							.replace(/&otilde;/g, "\xF5")
							.replace(/&ouml;/g, "\xF6")
							.replace(/&divide;/g, "\xF7")
							.replace(/&oslash;/g, "\xF8")
							.replace(/&ugrave;/g, "\xF9")
							.replace(/&uacute;/g, "\xFA")
							.replace(/&ucirc;/g, "\xFB")
							.replace(/&uuml;/g, "\xFC")
							.replace(/&yacute;/g, "\xFD")
							.replace(/&thorn;/g, "\xFE")
							.replace(/&yuml;/g, "\xFF");
			
			// apply edit and reveal in editor
			activeEditor.applyEdit(startingOffset, deleteLength, output);
			activeEditor.selectAndReveal(startingOffset, output.length);
	
	} else{	
		showError("No active editor");
	}
	
}