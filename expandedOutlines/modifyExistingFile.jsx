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
		}
}

var doc = app.activeDocument;
var elements = doc.layers[0];
$.writeln (elements);
buildOutlineStack(elements);
