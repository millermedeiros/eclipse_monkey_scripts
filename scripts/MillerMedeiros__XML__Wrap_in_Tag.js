/*
 * Menu: MillerMedeiros > XML > Wrap in Tag
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
			var tagName = prompt('Tag Name:', 'p');
				if(tagName){
				output = '<'+ tagName +'>'+ selected + '</'+ tagName +'>';
				
				// apply edit and reveal in editor
				activeEditor.applyEdit(startingOffset, deleteLength, output);
				activeEditor.selectAndReveal(startingOffset, output.length);
			}
	
	} else{	
		showError("No active editor");
	}
	
}