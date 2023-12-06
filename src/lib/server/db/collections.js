import db from '$lib/server/db/mongo'

export const employees = db.collection('employees');
export const gallery = db.collection('gallery');