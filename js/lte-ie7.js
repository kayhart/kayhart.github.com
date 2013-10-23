/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-untitled' : '&#x21;',
			'icon-facebook' : '&#x22;',
			'icon-twitter' : '&#x23;',
			'icon-instagram' : '&#x24;',
			'icon-evernote' : '&#x25;',
			'icon-rdio' : '&#x26;',
			'icon-linkedin' : '&#x27;',
			'icon-googleplus' : '&#x28;',
			'icon-heart' : '&#x29;',
			'icon-mobile' : '&#x2a;',
			'icon-phone' : '&#x2b;',
			'icon-mail' : '&#x2c;',
			'icon-reply' : '&#x2d;',
			'icon-user' : '&#x2e;',
			'icon-forward' : '&#x2f;',
			'icon-location' : '&#x30;',
			'icon-compass' : '&#x31;',
			'icon-search' : '&#x32;',
			'icon-heart-2' : '&#x33;',
			'icon-calendar' : '&#x34;',
			'icon-eye' : '&#x35;',
			'icon-info' : '&#x36;',
			'icon-checkmark' : '&#x37;',
			'icon-cross' : '&#x38;',
			'icon-github' : '&#x39;',
			'icon-house' : '&#x3a;',
			'icon-apple' : '&#x3b;',
			'icon-lab' : '&#x3c;',
			'icon-pacman' : '&#x3d;',
			'icon-books' : '&#x3e;',
			'icon-thumbs-up' : '&#x3f;',
			'icon-palette' : '&#x40;',
			'icon-rocket' : '&#x41;',
			'icon-image' : '&#x42;',
			'icon-camera' : '&#x43;',
			'icon-pencil' : '&#x44;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};