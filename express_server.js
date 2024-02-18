import { handler } from './build/handler.js';
import express from 'express';
import desm from 'desm';

// Get absolute path to assets folder, "./data/assets" might work fine and you can remove this line/dep


const app = express();

// Serve your "data/assets" folder
app.use('/data', express.static('data'))

// let SvelteKit handle everything else, including serving prerendered pages and static assets
app.use(handler);

app.listen(3000, () => {
    console.log('listening on port 3000');
});
