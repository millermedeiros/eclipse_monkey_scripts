/*
 * Menu: MillerMedeiros > Editors > To Camel Case
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
				
			//apply transformations
			function toProperCase(str){
				return str.toLowerCase().replace(/^[a-z\xE0-\xFF]|\s[a-z\xE0-\xFF]/g, function(){
					return arguments[0].toUpperCase(); //replace first char of each word to UPPERCASE
				});
			}
			output = selected.replace('-', ' ');
			output = toProperCase(output).replace(/\s+/g, '');
			output = output.replace(/^[a-zA-Z\xE0-\xFF]/g, function(){
				return arguments[0].toLowerCase(); // lowercase first letter
			});
			
			// apply edit and reveal in editor
			activeEditor.applyEdit(startingOffset, deleteLength, output);
			activeEditor.selectAndReveal(startingOffset, output.length);
	
	} else{	
		showError("No active editor");
	}
	
}