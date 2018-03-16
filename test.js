
const test = {
    "elementId": "dropdownMenu",
    "menu": [
        {
            "title": "item 1",
            "handler": "",
            "disabled": false,
            "subitems": [
                {
                    "title": "item 1.1",
                    "handler": "",
                    "disabled": false,
                    "subitems": [
                        {
                            "title": "item 1.1.1",
                            "handler": "",
                            "disabled": false
                        },
                        {
                            "title": "item 1.1.2",
                            "handler": "",
                            "disabled": false,
                            "subitems": [
                                {
                                    "title": "item 1.1.1.1",
                                    "handler": "",
                                    "disabled": false
                                },
                                {
                                    "title": "item 1.1.1.2",
                                    "handler": "",
                                    "disabled": false
                                }
                            ]
                        }
                    ]
                },
                {
                    "title": "item 1.2",
                    "handler": "",
                    "disabled": false
                }
            ]
        },
        {
            "title": "item 2",
            "handler": "",
            "disabled": false,
            "subitems": [
                {
                    "title": "item 2.1",
                    "handler": "",
                    "disabled": false
                },
                {
                    "title": "item 2.2",
                    "handler": "",
                    "disabled": false,
                    "subitems": [
                        {
                            "title": "item 2.2.1",
                            "handler": "",
                            "disabled": false
                        },
                        {
                            "title": "item 2.2.2",
                            "handler": "",
                            "disabled": false
                        }
                    ]
                }
            ]
        },
        {
            "title": "item 3",
            "handler": "",
            "disabled": false,
            "subitems": [
                {
                    "title": "item 3.1",
                    "handler": "",
                    "disabled": false
                },
                {
                    "title": "item 3.2",
                    "handler": "",
                    "disabled": false
                }
            ]
        },
        {
            "title": "item 4",
            "handler": "",
            "disabled": false
        },
        {
            "title": "item 5",
            "handler": "",
            "disabled": false
        },
        {
            "title": "item 6",
            "handler": "",
            "disabled": false
        },
        {
            "title": "item 7",
            "handler": "",
            "disabled": false
        },
        {
            "title": "item 8",
            "handler": "",
            "disabled": false
        },
        {
            "title": "item 9",
            "handler": "",
            "disabled": false
        },
        {
            "title": "item 10",
            "handler": "",
            "disabled": false
        },
        {
            "title": "item 11",
            "handler": "",
            "disabled": false
        },
        {
            "title": "item 12",
            "handler": "",
            "disabled": false
        },
        {
            "title": "item 13",
            "handler": "",
            "disabled": false
        },
        {
            "title": "item 14",
            "handler": "",
            "disabled": false
        }
    ]
};


var nav = document.createElement('nav');
nav.className = "nav-menu";
nav.id = "navigation-container";
var ul = document.createElement('ul');
ul.id = "menu";
ul.className = "menu";

document.getElementById(test.elementId).appendChild(nav).appendChild(ul);
goArrays(ul, test.menu);

function goArrays(container, items) {
    for (var i = 0; i < items.length; i++) {
        if(items[i].disabled !== true) {

            var li = document.createElement('li');
            var a = document.createElement('a');
            a.setAttribute('href', '#');
            container.appendChild(li).appendChild(a);
            a.innerText = items[i].title;

            if (items[i].hasOwnProperty('subitems')) {

                var iconFontAwesome = document.createElement('i');
                iconFontAwesome.className = "fas fa-angle-right";
                a.appendChild(iconFontAwesome);

                var wrapperSubMenu = document.createElement('div');
                wrapperSubMenu.className = "wrapper-sub-menu";
                var ulSubItems = document.createElement('ul');
                ulSubItems.className = "sub-menu";

                li.appendChild(wrapperSubMenu)
                    .appendChild(ulSubItems);

                goArrays(ulSubItems, items[i].subitems);
            }
        }
    }
}