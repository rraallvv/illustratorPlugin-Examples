/* Expand Outlines - Multiple */

function duplicateOutline(obj, strokeW, color) {
}
function extraOutlines(objectGroup, strokeW, color) {
}
function buildOutlineStack(objectGroup) {
		$.writeln (objectGroup);
		var groups  = objectGroup.groupItems;
		for (i = 0; i < groups.length; i++) {
			$.writeln (groups[i]);
			var group = groups[i];
			
			var compounds = group.compoundPathItems;
			for (j = 0; j < compounds.length; j++) {
				$.writeln(compounds[j]);
				var compound = compounds[j];
				
				var paths = compound.pathItems;
				$.writeln (paths.length);
				for (k = 0; k < paths.length; k++) {
					$.writeln(paths[k]);
					var path = paths[k];
					path.strokeColor = path.fillColor;
					path.strokeWidth = 25.0;
				}
			}
		}
}

var doc = app.activeDocument;
var elements = doc.layers[0];
$.writeln (elements);
buildOutlineStack(elements);
