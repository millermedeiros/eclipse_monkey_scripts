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
			
			//apply transformations
			output = selected.replace('-', ' ', 'g'); //replace hyphens
			output = output.toLowerCase().replace(/^[a-z\xE0-\xFF]|\s[a-z\xE0-\xFF]/g, upperFn); //convert first char of each word to UPPERCASE
			output = output.replace(/\s+/g, ''); //remove spaces
			output = output.replace(/^[A-Z\xC0-\xDF]/g, lowerFn); // lowercase first letter
			
			// apply edit and reveal in editor
			activeEditor.applyEdit(startingOffset, deleteLength, output);
			activeEditor.selectAndReveal(startingOffset, output.length);
	
	} else{	
		showError("No active editor");
	}
	
}