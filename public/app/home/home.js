Machine.cog({
    display: `
        <div class="screen">
            <h2>Select the category you want to know more about</h2>
            <div name="tiles"></div>
        </div>
    `,

    chains: {
        tiles: { url: 'COMPONENTS tile_button.js', source: 'page_list'}
    }
    
})