/*
 * Menu: MillerMedeiros > HTML > Minify HTML
 * Kudos: Miller Medeiros (www.millermedeiros.com)
 * License: MIT
 * DOM: http://download.eclipse.org/technology/dash/update/org.eclipse.eclipsemonkey.lang.javascript
 */

function main() {
 
	if(editors.activeEditor !== undefined){
	
			var activeEditor = editors.activeEditor,
				source = activeEditor.source,
				output = '';
				
			//apply transformations
			output = source.replace(/<!--[\s\S]*-->/g, '') //strip comments
							.replace(/\t+/g, '') //remove tabs
							.replace(/\r|\n/g, '') //remove line breaks
							.replace(/<!DOCTYPE[^>]*>/gi, '$&\n'); //add line break after doctype
			
			// apply edit and reveal in editor
			activeEditor.applyEdit(0, source.length, output);
			activeEditor.selectAndReveal(0, output.length);
	
	} else{	
		showError("No active editor");
	}
	
}