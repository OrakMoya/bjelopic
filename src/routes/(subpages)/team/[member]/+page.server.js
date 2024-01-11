import { models, sequelizeClient } from '$lib/server/db/sequelize';
import { pages } from '$lib/server/models/pages';
import { Op, Sequelize, where } from 'sequelize';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
	let page_html = 'aa';
	console.log(params.member);
	let results = await models.pages.findAll({
		where: {
			[Op.and]: [{ target_page_name: params.member }, { parent_component_id: 0 }]
		}
	});
	for (const page of results) {
		page_html = await createComponent(page);
	}

	console.log(page_html);
	return {
		streamed: {
			page_data: page_html
		}
	};
}
/**
 * @param {import("$lib/server/models/pages").pages} page
 */
async function createComponent(page) {
	let htmlToReturn = '';
	let children = await models.pages.findAll({
		where: {
			[Op.and]: [{ target_page_name: page.target_page_name }, { parent_component_id: page.id }]
		}
	});
	switch (page.component) {
		case 'div':
			htmlToReturn = '<div data-id="' + page.id + '" class="' + page.classes + '">\n';
			console.log(JSON.stringify(children, null, 2));
			for (const subpage of children) {
				htmlToReturn += (await createComponent(subpage)) + '\n';
			}
			htmlToReturn += '</div>\n';
			break;
		default:
			htmlToReturn = '<span class="' + page.classes + '">';
			htmlToReturn += page.component;
			htmlToReturn += '</span>';
			break;
	}
	console.log(htmlToReturn);
	return htmlToReturn;
}
