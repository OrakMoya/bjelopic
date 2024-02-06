import { models } from '$lib/server/db/sequelize';


function compare(a, b){
	return b.priority - a.priority;
}

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	/**
	 * @type {{ title: string | undefined; subject: string | undefined; category: string | undefined; production_roles: string[]; video_ids: string[]; publication_date: Date | undefined; priority: number;}[]}
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
			],
			order: [
				['publication_date', 'DESC']
			]
		})
		.then(function(our_works) {
			our_works.forEach((our_work) => {
				/**
				 * @type {Array<String>}
				 */
				const production_roles_array = [];
				/**
				 * @type {Array<String>}
				 */
				const video_ids_array = [];
				/**
				* @type {Date | undefined }
				*/
				let this_date;
				let this_priority = our_work.priority;
				if (our_work.publication_date) {
					let date_string = our_work.publication_date;
					this_date = new Date(Date.parse(date_string))
					this_priority = this_priority - (new Date(Date.now()).getFullYear() - this_date.getFullYear())*10
				}

				returnData.push({
					title: our_work.title,
					subject: our_work.subject,
					category: our_work.category,
					publication_date: this_date,
					priority: this_priority,
					production_roles: our_work.work_roles.reduce(function(pV, cV, cI) {
						pV.push(cV.role.production_role);
						return pV;
					}, production_roles_array),
					video_ids: our_work.work_videos.reduce(function(pV, cV, cI) {
						pV.push(cV.video_id);
						return pV;
					}, video_ids_array)
				});
				returnData.sort(compare);
			});
			return our_works;
		});

	return {
		streamed: {
			maria_gallery_items: returnData
		}
	};
}
