import { gallery } from '$lib/server/db/collections';
import { models } from '$lib/server/db/sequelize';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	const data = await gallery.find().toArray();
	let mariaData = await models.our_works
		.findAll({
			include: [
				{ model: models.work_videos, as: 'work_videos', attributes: ['video_id'], separate: true },
				{
					model: models.work_roles,
					as: 'work_roles',
					include: [
						{
							model: models.production_roles,
							as: 'role',
							attributes: ['production_role']
						}
					],
					separate: true
				}
			]
		})
		.then((our_works) => {
			our_works.forEach((work) => (work.work_roles = []));
			return our_works;
		});
	console.log(JSON.stringify(mariaData));
	return {
		streamed: {
			gallery_items: data.map((data) => JSON.parse(JSON.stringify(data))),
			maria_gallery_items: mariaData.map((data) => JSON.parse(JSON.stringify(data)))
		}
	};
}
