import { models } from '$lib/server/db/sequelize';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	/**
	 * @type {{ first_name: string; middle_name: string | undefined; last_name: string; profile_picture_path: string | undefined; page: string | undefined; }[]}
	 */
	let returnData = [];
	await models.employees.findAll().then((employees) => {
		employees.forEach((employee) => {
			returnData.push({
				first_name: employee.first_name,
				middle_name: employee.middle_name,
				last_name: employee.last_name,
				profile_picture_path: employee.profile_picture_path,
				page: employee.page,
				title: employee.title
			});
		});
	});
	return {
		streamed: {
			employees: returnData
		}
	};
}
