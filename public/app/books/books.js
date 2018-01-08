Machine.cog({
    display: `
        <div class="screen">
            <div name="book_chain"></div>
        </div>
    `,

    chains: {
        book_chain: { url: 'book_summary.js', source: 'books' }
    }
})