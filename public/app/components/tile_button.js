Machine.cog({
    display: `
        <div name="tile" class="tile" style="margin: 8px;">
            <h3 name="label"></h3>
            <i name="icon" class="fa fa-4x"></i>
        </div>
    `,

    nodes: {
        tile: '@click | .page > page$',
        label: '.label # TEXT',
        icon: '.icon *toClasses #CLASSES'
    },

    toClasses(icon) {
        let classes = {}
        classes[`fa-${icon}`] = true
        return classes
    }
})
