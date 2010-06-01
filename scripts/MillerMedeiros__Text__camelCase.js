/*
 * Menu: MillerMedeiros > Text > camelCase
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
				output = '';
				
			function upperFn(str){
				return str.toUpperCase();
			}
			
			function lowerFn(str){ 
				return str.toLowerCase(); 
			}
			
			/**
			 * Replaces all chars with accents to regular ones
			 * - ported from Miller Medeiros AS3 stringUtils
			 * @param {String} str
			 * @retunr {String}	formated string
			 */
			function replaceAccents(str) {
				// verifies if the String has accents and replace accents
				if (str.search(/[\xC0-\xFF]/g) > -1) {
					str = str.replace(/[\xC0-\xC5]/g, "A");
					str = str.replace(/[\xC6]/g, "AE");
					str = str.replace(/[\xC7]/g, "C");
					str = str.replace(/[\xC8-\xCB]/g, "E");
					str = str.replace(/[\xCC-\xCF]/g, "I");
					str = str.replace(/[\xD0]/g, "D");
					str = str.replace(/[\xD1]/g, "N");
					str = str.replace(/[\xD2-\xD6\xD8]/g, "O");
					str = str.replace(/[\xD9-\xDC]/g, "U");
					str = str.replace(/[\xDD]/g, "Y");
					str = str.replace(/[\xE0-\xE5]/g, "a");
					str = str.replace(/[\xE6]/g, "ae");
					str = str.replace(/[\xE7]/g, "c");
					str = str.replace(/[\xE8-\xEB]/g, "e");
					str = str.replace(/[\xEC-\xEF]/g, "i");
					str = str.replace(/[\xF1]/g, "n");
					str = str.replace(/[\xF2-\xF6\xF8]/g, "o");
					str = str.replace(/[\xF9-\xFC]/g, "u");
					str = str.replace(/[\xFD\xFF]/g, "y");
				}
				return str;
			}
			
			//apply transformations
			output = selected.replace(/[^a-zA-Z\xC0-\xFF \-]/g, ''); //remove non-word chars
			output = output.replace('-', ' ', 'g'); //replace hyphens
			output = output.toLowerCase().replace(/^[a-z\xE0-\xFF]|\s[a-z\xE0-\xFF]/g, upperFn); //convert first char of each word to UPPERCASE
			output = output.replace(/\s+/g, ''); //remove spaces
			output = output.replace(/^[A-Z\xC0-\xDF]/g, lowerFn); // lowercase first letter
			output = replaceAccents(output);
			
			// apply edit and reveal in editor
			activeEditor.applyEdit(startingOffset, deleteLength, output);
			activeEditor.selectAndReveal(startingOffset, output.length);
	
	} else{	
		showError("No active editor");
	}
	
}