/*
 * Menu: MillerMedeiros > Text > iNVERT cASE
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
				
			var upperRegex = new RegExp('[A-Z\xC0-\xDF]'); 
			
			//apply transformations
			function capsFn(curChar){
				if(upperRegex.test(curChar)){
					return curChar.toLowerCase();
				} else {
					return curChar.toUpperCase();
				}
			}
			output = selected.replace(/[a-zA-Z\xC0-\xFF]/g, capsFn); //lowercase <-> UPPERCASE
			
			// apply edit and reveal in editor
			activeEditor.applyEdit(startingOffset, deleteLength, output);
			activeEditor.selectAndReveal(startingOffset, output.length);
	
	} else{	
		showError("No active editor");
	}
	
}