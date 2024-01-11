import type { Sequelize } from 'sequelize';
import { employees as _employees } from './employees';
import type { employeesAttributes, employeesCreationAttributes } from './employees';
import { our_works as _our_works } from './our_works';
import type { our_worksAttributes, our_worksCreationAttributes } from './our_works';
import { pages as _pages } from './pages';
import type { pagesAttributes, pagesCreationAttributes } from './pages';
import { production_roles as _production_roles } from './production_roles';
import type {
	production_rolesAttributes,
	production_rolesCreationAttributes
} from './production_roles';
import { roles as _roles } from './roles';
import type { rolesAttributes, rolesCreationAttributes } from './roles';
import { work_employees_participated as _work_employees_participated } from './work_employees_participated';
import type {
	work_employees_participatedAttributes,
	work_employees_participatedCreationAttributes
} from './work_employees_participated';
import { work_roles as _work_roles } from './work_roles';
import type { work_rolesAttributes, work_rolesCreationAttributes } from './work_roles';
import { work_videos as _work_videos } from './work_videos';
import type { work_videosAttributes, work_videosCreationAttributes } from './work_videos';

export {
	_employees as employees,
	_our_works as our_works,
	_pages as pages,
	_production_roles as production_roles,
	_roles as roles,
	_work_employees_participated as work_employees_participated,
	_work_roles as work_roles,
	_work_videos as work_videos
};

export type {
	employeesAttributes,
	employeesCreationAttributes,
	our_worksAttributes,
	our_worksCreationAttributes,
	pagesAttributes,
	pagesCreationAttributes,
	production_rolesAttributes,
	production_rolesCreationAttributes,
	rolesAttributes,
	rolesCreationAttributes,
	work_employees_participatedAttributes,
	work_employees_participatedCreationAttributes,
	work_rolesAttributes,
	work_rolesCreationAttributes,
	work_videosAttributes,
	work_videosCreationAttributes
};

export function initModels(sequelize: Sequelize) {
	const employees = _employees.initModel(sequelize);
	const our_works = _our_works.initModel(sequelize);
	const pages = _pages.initModel(sequelize);
	const production_roles = _production_roles.initModel(sequelize);
	const roles = _roles.initModel(sequelize);
	const work_employees_participated = _work_employees_participated.initModel(sequelize);
	const work_roles = _work_roles.initModel(sequelize);
	const work_videos = _work_videos.initModel(sequelize);

	pages.belongsTo(employees, { as: 'target_page_name_employee', foreignKey: 'target_page_name' });
	employees.hasMany(pages, { as: 'pages', foreignKey: 'target_page_name' });
	work_employees_participated.belongsTo(employees, { as: 'employee', foreignKey: 'employee_id' });
	employees.hasMany(work_employees_participated, {
		as: 'work_employees_participateds',
		foreignKey: 'employee_id'
	});
	work_roles.belongsTo(our_works, { as: 'work', foreignKey: 'work_id' });
	our_works.hasMany(work_roles, { as: 'work_roles', foreignKey: 'work_id' });
	work_videos.belongsTo(our_works, { as: 'work', foreignKey: 'work_id' });
	our_works.hasMany(work_videos, { as: 'work_videos', foreignKey: 'work_id' });
	work_employees_participated.belongsTo(production_roles, {
		as: 'production_role',
		foreignKey: 'production_role_id'
	});
	production_roles.hasMany(work_employees_participated, {
		as: 'work_employees_participateds',
		foreignKey: 'production_role_id'
	});
	work_roles.belongsTo(production_roles, { as: 'role', foreignKey: 'role_id' });
	production_roles.hasMany(work_roles, { as: 'work_roles', foreignKey: 'role_id' });
	work_employees_participated.belongsTo(work_videos, { as: 'work', foreignKey: 'work_id' });
	work_videos.hasMany(work_employees_participated, {
		as: 'work_employees_participateds',
		foreignKey: 'work_id'
	});

	return {
		employees: employees,
		our_works: our_works,
		pages: pages,
		production_roles: production_roles,
		roles: roles,
		work_employees_participated: work_employees_participated,
		work_roles: work_roles,
		work_videos: work_videos
	};
}
