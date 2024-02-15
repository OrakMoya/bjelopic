import { models } from '$lib/server/db/sequelize';
import { json } from '@sveltejs/kit';


/**
 * @param {{ priority: number; }} a
 * @param {{ priority: number; }} b
 */
function compare(a, b){
	return b.priority - a.priority;
}

async function getWorks(){
	/**
     * @type {{ title: string | undefined; subject: string | undefined; category: string | undefined; publication_date: Date | undefined; priority: number; production_roles: string[]; video_thumbnails: { thumbnail_filename: string; preview_filename: string | undefined; }[]; }[]}
     */
	let returnData = [];

	// Retrieves needed data and organises it into property
	await models.our_works
		.findAll({
			include: [
				{ model: models.work_videos, as: 'work_videos', attributes: ['video_thumbnail_filename', 'video_preview_filename', 'url'], separate: true },
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
                 * @type {{thumbnail_filename: string; preview_filename: string | undefined; url: string | undefined;}[]}
                 */
				const video_thumbnails_array = [];
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
					production_roles: our_work.work_roles.reduce(function(previous_value, current_value, _current_index) {
						previous_value.push(current_value.role.production_role);
						return previous_value;
					}, production_roles_array),
					video_thumbnails: our_work.work_videos.reduce(function(pV, cV, _cI) {
						pV.push({
						thumbnail_filename: cV.video_thumbnail_filename,
						preview_filename: cV.video_preview_filename,
						url: cV.url
					});
						return pV;
					}, video_thumbnails_array)
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

export async function GET(){
	return json(await getWorks());
}
