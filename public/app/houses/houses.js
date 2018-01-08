Machine.cog({
    display: `
        <div class="screen">
            <div name="houses"></div>
        </div>
    `,

    chains: {
        houses: { url: 'house_summary.js', source: 'houses' }
    }
})