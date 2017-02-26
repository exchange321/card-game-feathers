/**
 * Created by Wayuki on 06-Jan-17 0006.
 */

/* eslint-disable */

import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';
import colors from 'colors';

console.log(colors.green('Starting app in virtual server...'));

const port = 80;
const app = express();

app.use(compression());
app.use(express.static('dist'));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(port, (err) => {
    if (err) {
        console.log(err);
    } else {
        open(`http://localhost:${port}`);
    }
});
