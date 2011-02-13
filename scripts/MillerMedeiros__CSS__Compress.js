/*
 * Menu: MillerMedeiros > CSS > Compress
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
			output = selected.replace(/\/\*[\s\S]+?(?:\*\/)/g, "") //everything between "/* */"
							.replace(/\t+/g, "") //tabs
							.replace(/\s{2,}/g, " ") //multiple spaces
							.replace(/\s?([,\{\};\:])\s?/g, "$1") //spaces around ",;{}:" (should come after multiple spaces regexp)
							.replace(/\r?\n/g, ""); //new lines
			
			// apply edit and reveal in editor
			activeEditor.applyEdit(startingOffset, deleteLength, output);
			activeEditor.selectAndReveal(startingOffset, output.length);
	
	} else{	
		showError("No active editor");
	}
	
}