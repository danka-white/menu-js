const data = {
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
                    "disabled": false
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
                    "disabled": false
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
            "disabled": false,
            "subitems": []
        },
        {
            "title": "item 5",
            "handler": "",
            "disabled": false,
            "subitems": []
        },
        {
            "title": "item 6",
            "handler": "",
            "disabled": false,
            "subitems": []
        },
        {
            "title": "item 7",
            "handler": "",
            "disabled": false,
            "subitems": []
        },
        {
            "title": "item 8",
            "handler": "",
            "disabled": false,
            "subitems": []
        },
        {
            "title": "item 9",
            "handler": "",
            "disabled": false,
            "subitems": []
        },
        {
            "title": "item 10",
            "handler": "",
            "disabled": false,
            "subitems": []
        },
        {
            "title": "item 11",
            "handler": "",
            "disabled": false,
            "subitems": []
        },
        {
            "title": "item 12",
            "handler": "",
            "disabled": false,
            "subitems": []
        },
        {
            "title": "item 13",
            "handler": "",
            "disabled": false,
            "subitems": []
        },
        {
            "title": "item 14",
            "handler": "",
            "disabled": false,
            "subitems": []
        }
    ]
};

var container = document.getElementById(data.elementId);
Menu(container, data.menu);

function showMenu() {
    document.getElementById("dropdownMenu").classList.toggle("show");
    scroller();
}
function scroller() {
    var elementWithContent = document.getElementById("menu");
    var scrollHeight = elementWithContent.scrollHeight;
    var clientHeight = elementWithContent.clientHeight;

    if(scrollHeight > clientHeight){

        var divScrollContainer = document.createElement('div');
        divScrollContainer.className = "scroll-container";
        elementWithContent.appendChild(divScrollContainer);

        var iconScroll = document.createElement('i');
        iconScroll.className = "fas fa-caret-down";
        divScrollContainer.appendChild(iconScroll);

    }

}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {

        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
};

function Menu(container,items){

    var nav = document.createElement('nav');
    var ul = document.createElement('ul');
    ul.id = "menu";
    ul.className = "menu";

    container.appendChild(nav).appendChild(ul);

    for(var i = 0; i<items.length; i++){
        if(items[i].disabled !== true ){

            var li = document.createElement('li');
            var a  = document.createElement('a');
            a.setAttribute('href', '#');
            ul.appendChild(li).appendChild(a);
            a.innerText = items[i].title;

            if(items[i].subitems.length !== 0){
                var  iconFontAwesome = document.createElement('i');
                iconFontAwesome.className = "fas fa-angle-right";
                a.appendChild(iconFontAwesome);

                var ulSubItems = document.createElement('ul');
                ulSubItems.className = "sub-menu";

                li.appendChild(ulSubItems);

                for(var j = 0; j<items[i].subitems.length; j++) {
                    if(items[i].subitems[j].disabled !== true ) {
                        var liSubItem = document.createElement('li');
                        var aSub = document.createElement('a');
                        aSub.setAttribute('href', '#');
                        ulSubItems.appendChild(liSubItem).appendChild(aSub);
                        aSub.innerText = items[i].subitems[j].title;
                    }
                }

            }
        }
    }

}

