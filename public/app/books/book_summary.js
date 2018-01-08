Machine.cog({
    display: `
        <div class="book-summary">
            <h2 name="name"></h2>
            <p>Authors</p>
            <ul>
                <div name="authors"></div>
            </ul>
            <p name="released"></p>
        </div>
    `,

    nodes: {
        name: '.name #TEXT',
        released: `.released *toReleased #TEXT`
    },

    calcs: {
        authors: '.authors *toAuthors'
    },

    chains: {
        authors: { url: 'author.js', source: 'authors'}
    },

    toReleased(released) {
        return `Released: ${released}`
    },

    toAuthors(authors) {
        const list = authors.map(d => { return {name: d } });

        return list;
    }
})