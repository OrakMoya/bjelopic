import db from '$lib/server/db/mongo'

export const test = db.collection('test');
