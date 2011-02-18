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
			
			var keepLines = !!parseInt( prompt('Keep line breaks? (1|0):', '0') );
			
			//apply transformations
			output = selected.replace(/\/\*[\s\S]+?(?:\*\/)/g, "") //everything between "/* */" (comments)
							.replace(/\t+/g, "") //tabs
							.replace(/ {2,}/g, " ") //multiple spaces
							.replace(/ *([,\{\};\:]) */g, "$1") //spaces around ",;{}:" (should come after multiple spaces regexp)
							.replace(/^\s*\r?\n/gm, "") //empty lines
							.replace(/;\}/g, "}") //";" just before "}"
							.replace(/(\:|\,| |\(|\-)0\./g, "$1."); //remove leading zero on fractional number smaller than 1
			
			if(!keepLines){
				output = output.replace(/[\r\n]+/gm, '');
			}
			
			// apply edit and reveal in editor
			activeEditor.applyEdit(startingOffset, deleteLength, output);
			activeEditor.selectAndReveal(startingOffset, output.length);
	
	} else{	
		showError("No active editor");
	}
	
}