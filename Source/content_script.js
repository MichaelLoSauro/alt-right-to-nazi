walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			if (node.parentElement.tagName.toLowerCase() != 'script' || node.parentElement.tagName.toLowerCase() != 'input' || node.parentElement.tagName.toLowerCase() != 'textarea') {
				handleText(node);
			}
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	v = v.replace(/\b(A|a)lt(ernative|)(-| )(R|r)ight/g, "Nazis");
	// for Twitter
	v = v.replace(/#(A|a)lt(ernative|)(R|r)ight/g, "#Nazis");

	
	textNode.nodeValue = v;
}


