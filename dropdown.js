
xtag.register('x-dropdown', {
    onCreate: function(){
//            alert("waz up?");
    },
    onInsert: function(){
        // fired each time a component 
        // is inserted into the DOM
    },
    events: {
        'click:delegate(x-toggler)': function(){
            alert("xtog");
            // activate a clicked toggler
        }
    },
    getters: {
        'togglers': function(){
            // return all toggler children
        }
    },
    setters: {
        // Add DOM object setters
    },
    methods: {
        openMenu: function(){
            var submenus = this.parentNode.parentNode.getElementsByTagName('x-dropdown');
            for (var i = 0; i < submenus.length; i++) {
                var x = submenus[i].getElementsByTagName('ul')[0].setAttribute("class", "");
                var header = submenus[i].getElementsByTagName('a')[0];
                header.setAttribute("data-action-type", "openMenu");
            }
            var menu = this.getElementsByTagName('ul')[0];
            menu.setAttribute("class", "x-dropdown-open");

            var header = this.getElementsByTagName('a')[0];
            header.setAttribute("data-action-type", "closeMenu");
            // activate next toggler
        },
        closeMenu: function(){
            var menu = this.getElementsByTagName('ul')[0];
            menu.setAttribute("class", "");

            var header = this.getElementsByTagName('a')[0];
            header.setAttribute("data-action-type", "openMenu");
            // activate the previous toggler
        }
    }
});
