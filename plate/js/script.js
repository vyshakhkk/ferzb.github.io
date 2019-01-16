$(document).ready(function() {
	var navItem = $('.nav-item'),
		navListToggle = navItem.find('ul');

	navItem.each(function() {
		var this_navItem = $(this);
		var this_navListToggle = this_navItem.find('ul')

		this_navItem.click(function() {
			$(this).toggleClass('active');
			this_navListToggle.slideToggle();
		});
	});
	$("#menu-toggle").click(function(e) {
	    e.preventDefault();
	    $("#wrapper").toggleClass("toggled");
	});

});