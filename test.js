
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
        }
    ]
};

goArrays(test.menu);

function goArrays(items) {
    for (var i = 0; i < items.length; i++) {
        if(items[i].disabled !== true) {

            console.log(items[i].title);
            if (items[i].hasOwnProperty('subitems')) {
                goArrays(items[i].subitems);
            }
        }
    }
}