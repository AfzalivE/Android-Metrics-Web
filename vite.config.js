/** @type {import('vite').UserConfig} */
export default {
    base: 'Android-Metrics-Web',
    esbuild: {
        supported: {
            'top-level-await': true //browsers can handle top-level-await features
        },
    }
}