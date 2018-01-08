Machine.cog({
    display: `
        <div id="app" class="appWrap">
            <div name="nav_bar"></div>
            <div class="content">
                <div name="page_holder"></div>
            </div>
        </div>
    `,

    cogs: {
        nav_bar: { url: 'NAV nav.js' }
    },

    gears: {
        page_holder: { url: 'page' }
    },

    actions: {
        page$: '#LOG > page'
    },

    states: {
        page: 'HOME home.js',

        page_list: {
            value: () => { return [
                {label: 'Books', icon: 'book', page: 'BOOKS books.js'},
                {label: 'Houses', icon: 'shield', page: 'HOUSES houses.js'},
                {label: 'Characters', icon: 'user', page: 'CHARACTERS characters.js'}
            ]}
        },

        nav_list: {
            value: () => { return [
                { page: 'HOME home.js', icon: 'home' }
            ]}
        }
    }
})
