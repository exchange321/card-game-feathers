/**
 * Created by Wayuki on 06-Jan-17 0006.
 */
/* eslint-disable */

import fs from 'fs';
import cheerio from 'cheerio';
import colors from 'colors';

fs.readFile('src/index.html', 'utf8', (err, markup) => {
    if (err) {
        return console.log(err);
    }

    const $ = cheerio.load(markup);

    $('head').prepend('<link rel="stylesheet" href="index.css" />');

    fs.writeFile('dist/index.html', $.html(), 'utf8', (err) => {
        if (err) {
            return console.log(err);
        }
        console.log('index.html written to /dist'.green);
    });
});
