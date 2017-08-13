// Select the parent of the current selection

if ( app.documents.length > 0 ) {
	var doc = app.activeDocument;

    if ( typeof doc.selection[0] !== 'undefined') {
        var parent = doc.selection[0].parent;

        if ( parent !== doc.selection[0] && typeof parent.layer !== 'undefined') {
            doc.selection = parent;
        }
    }
}
