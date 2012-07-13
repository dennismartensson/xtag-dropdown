xtag.register('x-dropdown', {
    onCreate: function() {
        //Set width of menu
        var width = this.getAttribute('data-width');

        if (typeof window.innerWidth != 'undefined') {
            var viewportwidth = window.innerWidth;

            if (width >= viewportwidth) {
                width = viewportwidth * 0.8;
            }
        }

        this.getElementsByTagName('ul')[0].style.maxWidth = width + 'px';

        //set orgentation and distance
        xtag.query(document, 'ul').forEach(function(element) {
            var orgen = element.getAttribute('orgentation');
            var distance = element.getAttribute('distance');

            if (orgen == 'right') {
                element.style.paddingLeft = distance + 'px';
            } else if (orgen == 'left') {
                element.style.paddingRight = distance + 'px';
            } else if (orgen == 'top') {
                element.style.paddingBottom = distance + 'px';
            }
        });
    },

    onInsert: function() {
        //add click lisener to body for closing menu if you click on any thing else then the menu
        document.body.setAttribute('data-action-type', 'closeMenuAll');

        document.addEventListener('click', function(e) {

            var action = e.target,
                parent = action.parentNode,
                actionType = action.getAttribute('data-action-type');

            if (actionType) {

                switch (actionType) {

                case 'closeMenuAll':
                    document.getElementsByTagName('x-dropdown')[0].xtag.closeMenuAll();
                    break;
                }

            }
        });
    },

    events: {
        //hade problems with a and tap on ios and links? Known problem?
        'click:delegate(a)': function(e) {
            actionType = this.getAttribute('data-action-type');

            if (actionType) {

                var dropdown = this;
                var tag = '';
                while (tag.indexOf("X-DROPDOWN") == -1) {
                    dropdown = dropdown.parentNode;
                    tag = dropdown.tagName;
                }

                switch (actionType) {
                case 'openMenu':
                    dropdown.xtag.openMenu(this);
                    break;
                case 'closeMenu':
                    dropdown.xtag.closeMenu(this);
                    break;
                }
            }
        }
    },

    getters: {

    },
    setters: {

    },
    methods: {
        openMenu: function(link) {

            var menu = link.parentNode.getElementsByTagName('ul')[0];

            if (typeof window.innerWidth != 'undefined') {
                var viewportheight = window.innerHeight * 0.8;
                menu.style.maxHeight = viewportheight + 'px';
            }

            menu.setAttribute('selected', true);

            link.setAttribute("data-action-type", "closeMenu");
        },

        closeMenu: function(link) {

            var menu = link.parentNode.getElementsByTagName('ul')[0];
            menu.setAttribute('selected', false);

            link.setAttribute("data-action-type", "openMenu");
        },

        closeMenuAll: function() {

            xtag.query(document, 'x-dropdown').forEach(function(dropdown) {
                
                var list = dropdown.getElementsByTagName('ul')[0].getElementsByTagName('li')[0];
                var link = list.getElementsByTagName('a')[0];
                var menu = list.getElementsByTagName('ul')[0];

                if (menu.getAttribute('selected') == 'true') {
                    menu.setAttribute('selected', false);
                }

                if (link.getAttribute('data-action-type') == 'closeMenu') {
                    link.setAttribute('data-action-type', 'openMenu');
                }
            });
        }
    }
});