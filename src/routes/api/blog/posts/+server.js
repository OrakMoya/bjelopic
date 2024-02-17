import { json } from "@sveltejs/kit";
import directoryTree from "directory-tree";
import { readFileSync } from "node:fs"
import { basename, extname } from "node:path"
import parseMD from "parse-md";

export async function GET() {
	/**
	* @type {BlogPost[]}
	*/
	let posts = [];
	const dirtree = directoryTree("data/", { extensions: /\.md/ });
	dirtree.children?.forEach(childTree => {
		if (extname(childTree.name) === ".md") {
			posts.push(processBlogPost(childTree));
		}
	})
	return json(posts);
}

/**
 * @param {import("directory-tree").DirectoryTree} childTree 
	* @returns {BlogPost}
*/
function processBlogPost(childTree) {
	const data = parseMD(readFileSync(childTree.path, 'utf8'));
	let title = basename(childTree.name);
	// @ts-ignore
	if (data.metadata.title) {
		// @ts-ignore
		title = data.metadata.title;
	}
	const post = { title, filename: encodeURIComponent( childTree.name ), contents: '', filepath: encodeURIComponent(childTree.path) };
	return post;
}
