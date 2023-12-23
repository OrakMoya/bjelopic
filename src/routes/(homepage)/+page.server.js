/** @type {import('./$types').PageServerLoad} */

import { models } from '$lib/server/db/sequelize';

export async function load() {
	let results = await models.our_works.findAll({
		include: [
			{
				model: models.work_videos,
				as: 'work_videos',
				attributes: ['video_id']
			}
		]
	});
	return {
		results: JSON.stringify(results, null, 2)
	};
}
