/*
 * Menu: MillerMedeiros > Text > hyphenate
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
			
			output = selected
							.replace(/[^0-9a-zA-Z\xC0-\xFF \-]/g, '') //remove non-word chars
							.replace(/([a-z\xE0-\xFF])([A-Z\xC0\xDF])/g, '$1 $2') //add space between camelCase text
							.replace(/ +/g, '-') //replace spaces with hyphen
							.toLowerCase();
			output = replaceAccents(output);
			
			// apply edit and reveal in editor
			activeEditor.applyEdit(startingOffset, deleteLength, output);
			activeEditor.selectAndReveal(startingOffset, output.length);
	
	} else{	
		showError("No active editor");
	}
	
}