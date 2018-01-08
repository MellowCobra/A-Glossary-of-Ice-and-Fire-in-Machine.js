Machine.cog({
    display: `
        <div class="house-summary">
            <h3 name="name"></h3>
            <p name="region"></p>
            <p name="coatOfArms"></p>
        </div>
    `,

    nodes: {
        name: '.name #TEXT',
        region: '.region #TEXT',
        coatOfArms: '.coatOfArms #TEXT'
    }
})