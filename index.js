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
    changeScroll();
}

function changeScroll() {

    var last_known_scroll_position = 0;
    var ticking = false;

    var containerScroll = document.getElementById('navigation-container');
    var content = document.getElementById("menu");

    createScrollButtons(containerScroll);

    function doSomething(scroll_pos) {
        containerScroll.setAttribute("data-overflowing", determineOverflow(content, containerScroll));
    }

    containerScroll.addEventListener("scroll", function() {
        last_known_scroll_position = window.scrollY;
        if (!ticking) {
            window.requestAnimationFrame(function() {
                doSomething(last_known_scroll_position);
                ticking = false;
            });
        }
        ticking = true;
    });

}

function createScrollButtons(containerScroll) {
    var btnUp = document.createElement('btn');
    btnUp.classList.add("btn-scroll", "btn-scroll-up");
    var btnDown = document.createElement('btn');
    btnDown.classList.add("btn-scroll", "btn-scroll-down");

    var iconUp = document.createElement('i');
    iconUp.className = "fas fa-caret-up";
    var iconDown = document.createElement('i');
    iconDown.className = "fas fa-caret-down";

    containerScroll.appendChild(btnUp).appendChild(iconUp);
    containerScroll.appendChild(btnDown).appendChild(iconDown);
}

function determineOverflow(content, container) {
    var containerMetrics = container.getBoundingClientRect();
    var containerMetricsBottom = Math.floor(containerMetrics.bottom);
    var containerMetricsTop = Math.floor(containerMetrics.top);

    var contentMetrics = content.getBoundingClientRect();
    var contentMetricsBottom = Math.floor(contentMetrics.bottom);
    var contentMetricsTop = Math.floor(contentMetrics.top);

    console.log("container metrics " + containerMetrics);
    console.log("containerMetricsBottom " + containerMetricsBottom);
    console.log("containerMetricsTop " + containerMetricsTop);
    console.log("*******contentMetrics " + contentMetrics);
    console.log("contentMetricsBottom " + contentMetricsBottom);
    console.log("contentMetricsTop " + contentMetricsTop);


    if (containerMetricsTop > contentMetricsTop && containerMetricsBottom < contentMetricsBottom) {
        return "both";
    } else if (contentMetricsTop< containerMetricsTop) {
        return "top";
    } else if (contentMetricsBottom > containerMetricsBottom) {
        return "bottom";
    } else {
        return "none";
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
    nav.className = "nav-menu";
    nav.id = "navigation-container";
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

