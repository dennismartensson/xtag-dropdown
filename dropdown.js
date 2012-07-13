xtag.register('x-dropdown', {
    onCreate: function() {
        
    },

    onInsert: function() {

        var width = this.getAttribute('data-width');

        if (typeof window.innerWidth != 'undefined') {
            var viewportwidth = window.innerWidth;

            if(width >= viewportwidth){
                width = viewportwidth * 0.8;
            }
        }

        this.getElementsByTagName('ul')[0].style.maxWidth = width + 'px';

        xtag.query(document, 'ul').forEach(function(element){
            var orgen = element.getAttribute('orgentation');
            var distance = element.getAttribute('distance');

            if(orgen == 'right'){
                element.style.paddingLeft= distance + 'px';
            }else if(orgen == 'left'){
                element.style.paddingRight= distance + 'px';
            }else if(orgen == 'top'){
                element.style.paddingBottom= distance + 'px';
            }
        });

    },

    events: {
        'tap:delegate(a)': function(e) {
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
        },
        'tap:delegate(body)': function() {
            alert("body");
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

        closeMenuBody: function() {
            var submenus = this.parentNode.parentNode.getElementsByTagName('x-dropdown');
            for (var i = 0; i < submenus.length; i++) {

                var x = submenus[i].getElementsByTagName('ul')[0]
                x.setAttribute('selected', false);

                var header = submenus[i].getElementsByTagName('a')[0];
                header.setAttribute("data-action-type", "openMenu");
            }
        }
    }
});