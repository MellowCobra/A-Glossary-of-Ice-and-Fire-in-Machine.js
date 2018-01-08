Machine.cog({

    display: `<div name="main"></div>`,

    aliases: {

        APP: './',
        NET: './net',
        FETCH: 'NET fetch.js',
        API: 'https://www.anapioficeandfire.com/api/',
        JS: './js',

        // api list -- swap comments to go between json and not

        BOOKS_API: 'API books',
        CHARACTERS_API: 'API characters',
        HOUSES_API: 'API houses',


        // Page component file locations
        HOME: './home',
        NAV: './nav',
        BOOKS: './books',
        CHARACTERS: './characters',
        HOUSES: './houses',

        COMPONENTS: './components'
    },

    states: {
        houses: {},
        books: {},
        characters: {}
    },

    traits: [
        { url: 'FETCH', api: 'HOUSES_API', response: 'houses', auto: true},
        { url: 'FETCH', api: 'CHARACTERS_API', response: 'characters', auto: true},
        { url: 'FETCH', api: 'BOOKS_API', response: 'books', auto: true}
    ],

    cogs: {
        main: {url: 'main.js'}
    }

});