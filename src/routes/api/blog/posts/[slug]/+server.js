import { json } from '@sveltejs/kit'
import directoryTree from 'directory-tree';
import Fuse from 'fuse.js';
import parseMD from 'parse-md';
import {readFileSync} from 'node:fs';
import { basename, dirname } from 'node:path';


/** @type {import('./$types').RequestHandler} */
export function GET({params}){
	let dirTreeChildren = directoryTree("data/").children;
	dirTreeChildren ??= [];

	const filecontents = readFileSync(params.slug, 'utf8');
	const {metadata, content} = parseMD(filecontents);

	/** @type BlogPost */
	const blogpost = {title: metadata.title, filename: basename(params.slug), filepath: dirname(params.slug), contents: content} 

	return json(blogpost);
}

