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
		processBlogPost(childTree, posts);
	})
	return json(posts);
}

/**
 * @param {import("directory-tree").DirectoryTree} childTree
 * @param {BlogPost[]} list
 * @returns {BlogPost[]}
 */
function processBlogPost(childTree, list) {
	if (childTree.children) {
		childTree.children.forEach(childTree => processBlogPost(childTree, list));
	}
	if (extname(childTree.name) !== ".md")
		return list;
	const data = parseMD(readFileSync(childTree.path, 'utf8'));
	let title = basename(childTree.name, extname(childTree.name));
	let metadata;
	if (data.metadata) {
		metadata = data.metadata;
		// @ts-ignore
		if (metadata.title) {
			// @ts-ignore
			title = metadata.title;
		}
	}
	const post = { title, filename: encodeURIComponent(childTree.name), contents: '', filepath: encodeURIComponent(childTree.path), metadata };
	list.push(post);

	return list;
}
