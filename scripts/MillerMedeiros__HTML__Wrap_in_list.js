/*
 * Menu: MillerMedeiros > HTML > Wrap in List
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
			var tag = prompt('List type [ul, ol, dl]:', 'ul');
			if(tag != 'ul' && tag != 'ol' && tag != 'dl'){
				showError('Invalid list type. Allowed values are: ul, ol, dl.');
			}
			var replace = (tag != 'dl')? '\t<li>$1</li>$2' :  '\t<dt>$1</dt>$2';
			output = '<'+ tag +'>\n';
			output += selected.replace(/([^\n\r\t]+)([\n\r]|$)/g, replace);
			output += '\n</'+ tag +'>';
			
			// apply edit and reveal in editor
			activeEditor.applyEdit(startingOffset, deleteLength, output);
			activeEditor.selectAndReveal(startingOffset, output.length);
	
	} else{	
		showError("No active editor");
	}

}