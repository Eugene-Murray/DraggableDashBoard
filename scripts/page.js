/// <reference path="jquery-1.6.2.js" />
/// <reference path="jquery-ui-1.8.16.custom.js" />


(function(app, $, ko) {
	
	
	ko.bindingHandlers.dragbinding = {
	    init: function(element, valueAccessor) {
			
			console.log(element);
			
			console.log($(element));
			
	        $(document).ready(function() {
				$(element).children().draggable({
					containment: "parent",
					handle: "header"
				}).resizable({ aspectRatio: true });
			});
			
			 var value = valueAccessor();
			
			value.subscribe(function(newValue) {
    			$(element).children().draggable({
					containment: "parent",
					handle: "header"
				}).resizable({ aspectRatio: true });
			});
			
	    },
		update: function(element, valueAccessor, allBindings) {
        
		console.log('GGGGGGGGGGGGGGGGGGGGGGGGGGGGG');
		
		// First get the latest data that we're bound to
        var value = valueAccessor();
		
		console.log(value());
 		
			$(document).ready(function() {
				$(element).children().draggable({
					containment: "parent",
					handle: "header"
				}).resizable({ aspectRatio: true });
			});
        
    	}
	};
	

ko.bindingHandlers.myBinding = {
    update: function(element, valueAccessor, allBindings) {
        // First get the latest data that we're bound to
        var value = valueAccessor();
 
        // Next, whether or not the supplied model property is observable, get its current value
        var valueUnwrapped = ko.unwrap(value);
 
        // Grab some more data from another binding property
        var duration = allBindings.get('slideDuration') || 400; // 400ms is default duration unless otherwise specified
 
        // Now manipulate the DOM element
        if (valueUnwrapped == true)
            $(element).slideDown(duration); // Make the element visible
        else
            $(element).slideUp(duration);   // Make the element invisible
    }
};




	var BindingSample = function() {
		var self = this;
		self.giftWrap = ko.observable(true)
		self.isAdmin = ko.observable(false);
		self.toggleAdmin = function() {
			self.isAdmin(!self.isAdmin());
		};
		
		
		self.add = function() {
			self.navigationItems.push('goo3');
		};

		self.navigationItems = ko.observableArray(['People', 'Locations' , 'Users', 'goo', 'goo2']);
	};
	
	$(document).ready(function() {
		
		ko.applyBindings(new BindingSample());
		
		//$("#draggables").children().draggable({
//        	//revert: "invalid"
//			containment: "parent",
//			handle: "header"
//    	}).resizable({ aspectRatio: true });
//		
		
	});

})(window.app = window.app || {}, jQuery, ko);



//$(function () {
//	
//	
//	
//    //$("#d1").draggable({
////        //revert: "invalid"
////		containment: "parent"
////    });
////
////    $("#d2").draggable({
////		containment: "parent",
////        snap: "#d1, #d3",
////    });
////
////    $("#d3").draggable({
////		containment: "parent",
////        handle: "header"
////    });
////
////    $("#d1, #d2, #d3").draggable(
////        "option", "stack", ".ui-draggable");
//
//    //$("#trash").droppable({
////        activeClass: "opaque",
////        accept: "#d3",
////        drop: function (event, ui) {
////            ui.draggable.fadeOut(function () {
////                ui.draggable.remove();
////            });
////        }
////    });
//
//    //$("#sortable").sortable({ axis: "y", placeholder: "placeholder" });
//
//    $("#d3").resizable({ aspectRatio: true });
//
//});




