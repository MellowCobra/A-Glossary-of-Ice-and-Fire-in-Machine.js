Machine.cog({
    display: `
        <div class="screen">
            <div name="characters"></div>
        </div>
    `,

    chains: {
        characters: { url: 'character_summary.js', source: 'characters' }
    }
})