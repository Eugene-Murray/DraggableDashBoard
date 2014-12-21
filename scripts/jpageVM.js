(function(app, $, ko) {

    ko.bindingHandlers.dragger = {
        init: function(element, valueAccessor) {
            //$(element)

            var processData = {

                jquery1: { title: "Latest Stories on Learning jQuery", defaultCol: 2, parser: $.getJSON("http://pipes.yahoo.com/danwellman/learningjquery?_render=JSON&_callback=?", function(data) {
                    $.each(data.value.items, function(i, item) {
                        $("<a />").attr({"id": "articleLink", "href": item.link}).text(item.title).appendTo("#jqueryContent");
                        $("<p>").text(item.description.split("<")[0]).appendTo("#jqueryContent");
                        return (i > 3) ? false : null;
                    });
                })},
                jquery2: { title: "Latest Stories on Learning jQuery", defaultCol: 2, parser: $.getJSON("http://pipes.yahoo.com/danwellman/learningjquery?_render=JSON&_callback=?", function(data) {
                    $.each(data.value.items, function(i, item) {
                        $("<a />").attr({"id": "articleLink", "href": item.link}).text(item.title).appendTo("#jqueryContent");
                        $("<p>").text(item.description.split("<")[0]).appendTo("#jqueryContent");
                        return (i > 3) ? false : null;
                    });
                })},
                jquery3: { title: "Latest Stories on Learning jQuery", defaultCol: 2, parser: $.getJSON("http://pipes.yahoo.com/danwellman/learningjquery?_render=JSON&_callback=?", function(data) {
                    $.each(data.value.items, function(i, item) {
                        $("<a />").attr({"id": "articleLink", "href": item.link}).text(item.title).appendTo("#jqueryContent");
                        $("<p>").text(item.description.split("<")[0]).appendTo("#jqueryContent");
                        return (i > 3) ? false : null;
                    });
                })},
                jquery4: { title: "Latest Stories on Learning jQuery", defaultCol: 2, parser: $.getJSON("http://pipes.yahoo.com/danwellman/learningjquery?_render=JSON&_callback=?", function(data) {
                    $.each(data.value.items, function(i, item) {
                        $("<a />").attr({"id": "articleLink", "href": item.link}).text(item.title).appendTo("#jqueryContent");
                        $("<p>").text(item.description.split("<")[0]).appendTo("#jqueryContent");
                        return (i > 3) ? false : null;
                    });
                })},
                jquery5: { title: "Latest Stories on Learning jQuery", defaultCol: 3, parser: $.getJSON("http://pipes.yahoo.com/danwellman/learningjquery?_render=JSON&_callback=?", function(data) {
                    $.each(data.value.items, function(i, item) {
                        $("<a />").attr({"id": "articleLink", "href": item.link}).text(item.title).appendTo("#jqueryContent");
                        $("<p>").text(item.description.split("<")[0]).appendTo("#jqueryContent");
                        return (i > 3) ? false : null;
                    });
                })},
                jquery6: { title: "Latest Stories on Learning jQuery", defaultCol: 3, parser: $.getJSON("http://pipes.yahoo.com/danwellman/learningjquery?_render=JSON&_callback=?", function(data) {
                    $.each(data.value.items, function(i, item) {
                        $("<a />").attr({"id": "articleLink", "href": item.link}).text(item.title).appendTo("#jqueryContent");
                        $("<p>").text(item.description.split("<")[0]).appendTo("#jqueryContent");
                        return (i > 3) ? false : null;
                    });
                })}




            };


            $.each(processData, function(i, item) {
                $("<div>").addClass("box ui-widget ui-corner-all").attr("id", "col" + processData[i].defaultCol + "_" + i).appendTo("#col" + processData[i].defaultCol);
                $("<div>").addClass("title ui-widget-header ui-corner-top").attr("id", i + "Title").text(processData[i].title).appendTo("#col" + processData[i].defaultCol + "_" + i);
                $("<div>").addClass("close ui-icon ui-icon-close").attr("title", "Close").appendTo("#" + i + "Title");
                $("<div>").addClass("ui-widget-content").attr("id", i + "Content").appendTo("#col" + processData[i].defaultCol + "_" + i);
            });


            //define config object
            var sortOpts = {
                handle: ".title",
                containment: "#sortGrid",
                dropOnEmpty: true,
                connectWith: ["#col1", "#col2", "#col3"] //,
                //stop: cookieWriter
            };

            //make columns sortable
            $(element).find("#col1, #col2, #col3").sortable(sortOpts).resizable({ aspectRatio: true });






        },
        update: function(element, valueAccessor) {
            // Give the first x stars the "chosen" class
            // where x <= rating
            var observable = valueAccessor();

        }
    };


    var BindingSample = function() {
        var self = this;
        //    data = init && init instanceof Array ? init : [];
        //
        self.widgets = ko.observableArray([
            {   title: ko.observable('widget 1'),
                content: ko.observable('content 1')},
            {   title: ko.observable('widget 2'),
                content: ko.observable('content 2')},
            {   title: ko.observable('widget 3'),
                content: ko.observable('content 3')}
        ]),

            self.add = function() {
                self.widgets.push({
                    title: ko.observable('widget x'),
                    content: ko.observable('content x')});
            }
    };

    $(document).ready(function() {
        ko.applyBindings(new BindingSample());
    });

})(window.app = window.app || {}, jQuery, ko);
