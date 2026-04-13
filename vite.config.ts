import fs from 'node:fs';
import { defineConfig, type Plugin } from 'vite';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';
import monkey from 'vite-plugin-monkey';
import PACKAGE from './package.json';

/** Same embedded icon as before (Tampermonkey @icon data URI). */
const ICON_DATA =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAB6UlEQVQ4jdWSTUhUcRTFf/c/b8ZyMUW5qhZF1MaNZF8qge2siGxR29o48wZ1EW1bqGCt2hTWvCGKaNenEFgEIwXiWKK7FhEtMoQKtbSEGN/8T4sUxI82rbqrC+eewzmHC//92NJSn4lqkk7dDk56eD6SDzMAxzqvVX2Lqy46dE5il8Fnj574RKXnTV/HdADQlM3v96anQFow64w0QO2Z+6nvCzMvQJtkPAK9kiw27EKiEpSOdN5uChoz0W5vKoJNWmLh8HBf+0RzV3cCIL11OgO23bBbeI2Wolzxj18NNoaF/jguX3FyugykMcsN93V8BNPLrq54MWGrsHsmzZWisLgsubzZdROnHNACaMfU5qE1Oqp28BPTw1VIRT8E1cFikTZRM1UHjAEcbCvstSDegGdIpuOlfO7qqvadb0U2ZA1h/jFwGmPexLDENoxamZ1PBsmBeKE8DtZf9lwaK2Rn6zNRMmkKzeiVt2ZnKAQ9Q2wUqsPxzokTIzezdxX/ihED4PelnL40hPkPKacZM9pwrmWkkB23ldaW+UV1KqFBRF3sKnsC77xgp2RfX0fh+6W7YG26LOWiO4hDGD2jN9o/LQKTKy/dWvTGMH8U44BhY3NTW3rXc7mugHBNJhUrsWt9++Bs+W8C/zy/AT3Myy3qczVrAAAAAElFTkSuQmCC';

function svgInlineLoader(): Plugin {
    return {
        name: 'svg-inline-loader',
        enforce: 'pre',
        load(id) {
            const [filePath, query] = id.split('?', 2);
            if (query) {
                return null;
            }
            if (!filePath.endsWith('.svg')) {
                return null;
            }
            const svg = fs.readFileSync(filePath, 'utf8');
            return `export default ${JSON.stringify(svg)};`;
        },
    };
}

export default defineConfig({
    plugins: [
        svgInlineLoader(),
        cssInjectedByJsPlugin(),
        monkey({
            entry: 'src/colnect.ts',
            userscript: {
                name: 'collector :: colnect.com',
                namespace: 'https://colnect.com/',
                version: PACKAGE.version,
                author: 'danikas2k2',
                icon: ICON_DATA,
                downloadURL:
                    'https://raw.githubusercontent.com/danikas2k2/tampermonkey-colnect/master/dist/colnect.user.js',
                updateURL:
                    'https://raw.githubusercontent.com/danikas2k2/tampermonkey-colnect/master/dist/colnect.user.js',
                match: [
                    'https://*.colnect.com/*/coins/*',
                    'https://*.colnect.com/*/banknotes/*',
                    'https://*.colnect.com/*/stamps/*',
                    'https://*.colnect.com/*/medals/*',
                    'https://*.colnect.com/*/tokens/*',
                ],
                'run-at': 'document-end',
            },
            build: {
                fileName: 'colnect.user.js',
                metaFileName: false,
            },
        }),
    ],
    build: {
        outDir: 'dist',
        emptyOutDir: true,
        sourcemap: true,
        minify: false,
    },
});
