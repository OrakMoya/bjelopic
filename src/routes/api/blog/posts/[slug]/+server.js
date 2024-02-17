import { json } from '@sveltejs/kit'
import directoryTree from 'directory-tree';
import Fuse from 'fuse.js';
import parseMD from 'parse-md';
import {readFileSync} from 'node:fs';
import { dirname } from 'node:path';


/** @type {import('./$types').RequestHandler} */
export function GET({params}){
	let dirTreeChildren = directoryTree("data/").children;
	dirTreeChildren ??= [];
	const fuse = new Fuse(dirTreeChildren, {
		keys: ['children', 'path']
	})
	const name = params.slug;
	const searchResult = fuse.search(name).at(0);
	let blogpostPath = searchResult.item?.path;
	blogpostPath ??= "data/";

	const filecontents = readFileSync(blogpostPath, 'utf8');
	const {metadata, content} = parseMD(filecontents);

	/** @type BlogPost */
	const blogpost = {title: metadata.title, filename: searchResult?.item?.name, filepath: dirname(searchResult?.item?.path), contents: content} 

	return json(blogpost);
}
