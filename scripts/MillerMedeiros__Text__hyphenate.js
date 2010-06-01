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
				
			output = selected.replace(/[^a-zA-Z\xC0-\xFF \-]/g, ''); //remove special chars
			output = output.replace(/([a-z\xE0-\xFF])([A-Z\xC0\xDF])/g, '$1 $2'); //add space between camelCase text
			output = output.replace(/ +/g, '-'); //replace spaces with hyphen
			output = output.toLowerCase(); //lowercase
			
			// apply edit and reveal in editor
			activeEditor.applyEdit(startingOffset, deleteLength, output);
			activeEditor.selectAndReveal(startingOffset, output.length);
	
	} else{	
		showError("No active editor");
	}
	
}