Machine.cog({
    display: `
        <div class="character-summary">
            <h2 name="name"></h2>
            <p name="gender"></p>
            <p>Aliases:</p>
            <ul>
                <div name="alias_list"></div>
            </ul>
        </div>
    `,

    nodes: {
        name: '.name *toName #TEXT',
        gender: '.gender #TEXT'
    },

    calcs: {
        aliases: '.aliases *toAliases'
    },

    chains: {
        alias_list: { url: 'alias.js', source: 'aliases' }
    },

    toName(name) {
        return 'Name: ' + (name || 'none given')
    },

    toAliases(aliases) {
        return aliases.map( a => ({ name: a }))
    }
})