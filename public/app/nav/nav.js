Machine.cog({
    display: `
        <nav id="nav">
            <div class="navBar-title">
                <h2>A Glossary of Ice and Fire</h2>
            </div>

            <div class="links">
                <div name="nav_links"></div>
            </div>
        </nav>
    `,

    chains: {
        nav_links: { url: 'nav_button.js', source: 'nav_list' }
    }
})