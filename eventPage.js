var menuItem = {
    "id": "add_to_my_word",
    "title": "Add to my words",
    "contexts": ["selection"]
};
var apiUrl = 'http://daynight.bahramkhan.com/api/store-word'

chrome.contextMenus.create(menuItem);

chrome.contextMenus.onClicked.addListener(function(clickData){
    var url;
    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, function(tabs) {
        var tab = tabs[0];
        var url = tab.url;
        if (clickData.menuItemId === "add_to_my_word" && clickData.selectionText){

            $.post(apiUrl,
                {
                    word: clickData.selectionText,
                    source: url,
                }
            );

        }
    });
});
