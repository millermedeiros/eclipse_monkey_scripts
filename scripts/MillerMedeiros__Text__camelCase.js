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
					str = str
							.replace(/[\xC0-\xC5]/g, "A")
							.replace(/[\xC6]/g, "AE")
							.replace(/[\xC7]/g, "C")
							.replace(/[\xC8-\xCB]/g, "E")
							.replace(/[\xCC-\xCF]/g, "I")
							.replace(/[\xD0]/g, "D")
							.replace(/[\xD1]/g, "N")
							.replace(/[\xD2-\xD6\xD8]/g, "O")
							.replace(/[\xD9-\xDC]/g, "U")
							.replace(/[\xDD]/g, "Y")
							.replace(/[\xDE]/g, "P")
							.replace(/[\xE0-\xE5]/g, "a")
							.replace(/[\xE6]/g, "ae")
							.replace(/[\xE7]/g, "c")
							.replace(/[\xE8-\xEB]/g, "e")
							.replace(/[\xEC-\xEF]/g, "i")
							.replace(/[\xF1]/g, "n")
							.replace(/[\xF2-\xF6\xF8]/g, "o")
							.replace(/[\xF9-\xFC]/g, "u")
							.replace(/[\xFE]/g, "p")
							.replace(/[\xFD\xFF]/g, "y");
				}
				return str;
			}
			
			//apply transformations
			output = selected.replace(/[^0-9a-zA-Z\xC0-\xFF \-]/g, ''); //remove non-word chars
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