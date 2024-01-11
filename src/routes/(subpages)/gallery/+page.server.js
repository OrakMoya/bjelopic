import { models } from '$lib/server/db/sequelize';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	/**
	 * @type {{ title: string | undefined; subject: string | undefined; category: string | undefined; production_roles: string[]; video_ids: string[]; }[]}
	 */
	let returnData = [];

	// Retrieves needed data and organises it into property
	await models.our_works
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
					]
				}
			]
		})
		.then(function (our_works) {
			our_works.forEach((our_work) => {
				/**
				 * @type {Array<String>}
				 */
				const production_roles_array = [];
				/**
				 * @type {Array<String>}
				 */
				const video_ids_array = [];
				returnData.push({
					title: our_work.title,
					subject: our_work.subject,
					category: our_work.category,
					production_roles: our_work.work_roles.reduce(function (pV, cV, cI) {
						pV.push(cV.role.production_role);
						return pV;
					}, production_roles_array),
					video_ids: our_work.work_videos.reduce(function (pV, cV, cI) {
						pV.push(cV.video_id);
						return pV;
					}, video_ids_array)
				});
			});
			return our_works;
		});

	return {
		streamed: {
			maria_gallery_items: returnData
		}
	};
}
