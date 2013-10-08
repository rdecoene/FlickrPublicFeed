define(['modules/app'], function(app){
    app.filter('tagFilter', function() {
      return function(items, filterText, photo) {
        var searchRegx = new RegExp(filterText, "i");
        if ((filterText == undefined)) {
            return items;
        }
        var result = [];
        for(i = 0; i < items.length; i++) {
            if (items[i].tags.search(searchRegx) != -1) {
                result.push(items[i]);
            }
        }
        return result;
      }
    });
});