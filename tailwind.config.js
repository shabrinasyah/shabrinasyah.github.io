module.exports = {
    mode: 'jit',
    // These paths are just examples, customize them to match your project structure
    purge: [
        '.**/*.{html,js}',
    ],
    theme: {
        extend: {},
    },
    variants: {
        backgroundColor: ['responsive', 'hover', 'focus', 'active', 'visited '],
        opacity: ['responsive', 'hover', 'focus', 'disabled'],
        textColor: ['responsive', 'hover', 'focus', 'visited', 'group-hover'],

    },
    plugins: [],
}