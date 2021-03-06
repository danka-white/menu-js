// config options
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
                    "disabled": false,
                    "subitems": [
                        {
                            "title": "item 1.1.1",
                            "handler": "",
                            "disabled": false
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

//options to transition
var SETTINGS = {
    navBarMoving: false,
    navBarDirection: "",
    navBarMoveDistance: 50
};
//building DOM-elements
createMenu();

//click another place except menu make it close
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn') && !event.target.matches('.btn-scroll .fas')) {

        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
};

// menu appear near the cursor when left button clicked
function showMenu() {
    document.getElementById("dropdownMenu").classList.toggle("show");
    //custom scroll
    var containerScroll = document.getElementById('navigation-container');
    var content = document.getElementById("menu");

    setOverflowingAttributes(content, containerScroll);
    createScrollButtons(containerScroll);
    makeClickableScrollButtons(content, containerScroll);
    changeScroll(content, containerScroll);
}

function setOverflowingAttributes(content, containerScroll) {
    containerScroll.setAttribute("data-overflowing", determineOverflow(content, containerScroll));
}

function changeScroll(content, containerScroll) {
    containerScroll.onwheel = function(){ return false; }
    var last_known_scroll_position = 0;
    var ticking = false;

    containerScroll.addEventListener("scroll", function () {
        last_known_scroll_position = window.scrollY;
        if (!ticking) {
            window.requestAnimationFrame(function () {
                setOverflowingAttributes(content, containerScroll);
                ticking = false;
            });
        }
        ticking = true;
    });

}

function makeClickableScrollButtons(content, containerScroll){
    var iconScrollUp = document.getElementById("iconScrollUp");
    var iconScrollDown = document.getElementById("iconScrollDown");

    iconScrollUp.addEventListener("click", function () {
        if(SETTINGS.navBarMoving === true){
            return;
        }
        if(determineOverflow(content, containerScroll) === "top" ||
            determineOverflow(content, containerScroll) === "both"){

            var availableScrollTop = containerScroll.scrollTop;

            if (availableScrollTop < SETTINGS.navBarMoveDistance * 2) {
                content.style.transform = "translateY(" + availableScrollTop + "px)";
            } else {
                content.style.transform = "translateY(" + SETTINGS.navBarMoveDistance + "px)";
            }
            content.classList.remove("menu-no-transition");

            SETTINGS.navBarMoveDirection = "top";
            SETTINGS.navBarMoving = true;
        }
        containerScroll.setAttribute("data-overflowing", determineOverflow(content, containerScroll));
    });

    iconScrollDown.addEventListener("click", function() {

        if (SETTINGS.navBarMoving === true) {
            return;
        }
        if (determineOverflow(content, containerScroll) === "bottom" ||
            determineOverflow(content, containerScroll) === "both") {

            var navBarBottomEdge = content.getBoundingClientRect().bottom;
            var navBarScrollerBottomEdge = containerScroll.getBoundingClientRect().bottom;

            var availableScrollBottom = Math.floor(navBarBottomEdge - navBarScrollerBottomEdge);

            if (availableScrollBottom < SETTINGS.navBarMoveDistance * 2) {
                content.style.transform = "translateY(-" + availableScrollBottom + "px)";
            } else {
                content.style.transform = "translateY(-" + SETTINGS.navBarMoveDistance + "px)";
            }

            content.classList.remove("menu-no-transition");
            SETTINGS.navBarMoveDirection = "bottom";
            SETTINGS.navBarMoving = true;
        }
        containerScroll.setAttribute("data-overflowing", determineOverflow(content, containerScroll));
    });


    content.addEventListener("transitionend", function() {

            var styleOfTransform = window.getComputedStyle(content, null);
            var tr = styleOfTransform.getPropertyValue("-webkit-transform") || styleOfTransform.getPropertyValue("transform");

            var amount = Math.abs(parseInt(tr.split(",")[5]) || 0);
            content.style.transform = "none";
            content.classList.add("menu-no-transition");

            if (SETTINGS.navBarMoveDirection === "top") {
                containerScroll.scrollTop = containerScroll.scrollTop - amount;
            } else {
                containerScroll.scrollTop = containerScroll.scrollTop + amount;
            }
            SETTINGS.navBarMoving = false;
        }, false);


}

function createScrollButtons(containerScroll) {
    if (document.getElementsByClassName('btn-scroll').length === 0) {
        var btnUp = document.createElement('btn');
        btnUp.classList.add("btn-scroll", "btn-scroll-up");
        var btnDown = document.createElement('btn');
        btnDown.classList.add("btn-scroll", "btn-scroll-down");

        var iconUp = document.createElement('i');
        iconUp.className = "fas fa-caret-up";
        iconUp.id = "iconScrollUp";
        var iconDown = document.createElement('i');
        iconDown.className = "fas fa-caret-down";
        iconDown.id = "iconScrollDown";

        containerScroll.appendChild(btnUp).appendChild(iconUp);
        containerScroll.appendChild(btnDown).appendChild(iconDown);
    }
}

function determineOverflow(content, container) {
    var containerMetrics = container.getBoundingClientRect();
    var containerMetricsBottom = Math.floor(containerMetrics.bottom);
    var containerMetricsTop = Math.floor(containerMetrics.top);

    var contentMetrics = content.getBoundingClientRect();
    var contentMetricsBottom = Math.floor(contentMetrics.bottom);
    var contentMetricsTop = Math.floor(contentMetrics.top);

    if (containerMetricsTop > contentMetricsTop && containerMetricsBottom < contentMetricsBottom) {
        return "both";
    } else if (contentMetricsTop < containerMetricsTop) {
        return "top";
    } else if (contentMetricsBottom > containerMetricsBottom) {
        return "bottom";
    } else {
        return "none";
    }
}

function createMenu() {
    var nav = document.createElement('nav');
    nav.className = "nav-menu";
    nav.id = "navigation-container";
    var ul = document.createElement('ul');
    ul.id = "menu";
    ul.className = "menu";
    document.getElementById(data.elementId).appendChild(nav).appendChild(ul);
    goArrays(ul, data.menu);

}

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
