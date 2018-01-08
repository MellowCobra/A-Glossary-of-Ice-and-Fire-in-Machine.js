Machine.cog({
    
    display: `
        <div name="navButton" class="navBar-icon">
            <i name="icon" class="fa fa-2x fa-fw"></i>
        </div>
    `,

    nodes: {
        navButton: '@click | .page > page$',
        icon: '.icon #LOG *toClasses #CLASSES'
    },

    toClasses(icon) {
        let classes = {}
        classes[`fa-${icon}`] = true
        return classes
    }
})