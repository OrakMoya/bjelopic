import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { pages, pagesId } from './pages';
import type {
	work_employees_participated,
	work_employees_participatedId
} from './work_employees_participated';

export interface employeesAttributes {
	id: number;
	first_name: string;
	middle_name?: string;
	last_name: string;
	email?: string;
	phone_number?: string;
	join_date?: string;
	profile_picture_path?: string;
	page?: string;
}

export type employeesPk = 'id';
export type employeesId = employees[employeesPk];
export type employeesOptionalAttributes =
	| 'id'
	| 'middle_name'
	| 'email'
	| 'phone_number'
	| 'join_date'
	| 'profile_picture_path'
	| 'page';
export type employeesCreationAttributes = Optional<
	employeesAttributes,
	employeesOptionalAttributes
>;

export class employees
	extends Model<employeesAttributes, employeesCreationAttributes>
	implements employeesAttributes
{
	id!: number;
	first_name!: string;
	middle_name?: string;
	last_name!: string;
	email?: string;
	phone_number?: string;
	join_date?: string;
	profile_picture_path?: string;
	page?: string;

	// employees hasMany pages via target_page_name
	pages!: pages[];
	getPages!: Sequelize.HasManyGetAssociationsMixin<pages>;
	setPages!: Sequelize.HasManySetAssociationsMixin<pages, pagesId>;
	addPage!: Sequelize.HasManyAddAssociationMixin<pages, pagesId>;
	addPages!: Sequelize.HasManyAddAssociationsMixin<pages, pagesId>;
	createPage!: Sequelize.HasManyCreateAssociationMixin<pages>;
	removePage!: Sequelize.HasManyRemoveAssociationMixin<pages, pagesId>;
	removePages!: Sequelize.HasManyRemoveAssociationsMixin<pages, pagesId>;
	hasPage!: Sequelize.HasManyHasAssociationMixin<pages, pagesId>;
	hasPages!: Sequelize.HasManyHasAssociationsMixin<pages, pagesId>;
	countPages!: Sequelize.HasManyCountAssociationsMixin;
	// employees hasMany work_employees_participated via employee_id
	work_employees_participateds!: work_employees_participated[];
	getWork_employees_participateds!: Sequelize.HasManyGetAssociationsMixin<work_employees_participated>;
	setWork_employees_participateds!: Sequelize.HasManySetAssociationsMixin<
		work_employees_participated,
		work_employees_participatedId
	>;
	addWork_employees_participated!: Sequelize.HasManyAddAssociationMixin<
		work_employees_participated,
		work_employees_participatedId
	>;
	addWork_employees_participateds!: Sequelize.HasManyAddAssociationsMixin<
		work_employees_participated,
		work_employees_participatedId
	>;
	createWork_employees_participated!: Sequelize.HasManyCreateAssociationMixin<work_employees_participated>;
	removeWork_employees_participated!: Sequelize.HasManyRemoveAssociationMixin<
		work_employees_participated,
		work_employees_participatedId
	>;
	removeWork_employees_participateds!: Sequelize.HasManyRemoveAssociationsMixin<
		work_employees_participated,
		work_employees_participatedId
	>;
	hasWork_employees_participated!: Sequelize.HasManyHasAssociationMixin<
		work_employees_participated,
		work_employees_participatedId
	>;
	hasWork_employees_participateds!: Sequelize.HasManyHasAssociationsMixin<
		work_employees_participated,
		work_employees_participatedId
	>;
	countWork_employees_participateds!: Sequelize.HasManyCountAssociationsMixin;

	static initModel(sequelize: Sequelize.Sequelize): typeof employees {
		return employees.init(
			{
				id: {
					autoIncrement: true,
					type: DataTypes.INTEGER,
					allowNull: false,
					primaryKey: true
				},
				first_name: {
					type: DataTypes.STRING(45),
					allowNull: false
				},
				middle_name: {
					type: DataTypes.STRING(45),
					allowNull: true
				},
				last_name: {
					type: DataTypes.STRING(45),
					allowNull: false
				},
				email: {
					type: DataTypes.STRING(45),
					allowNull: true
				},
				phone_number: {
					type: DataTypes.STRING(45),
					allowNull: true
				},
				join_date: {
					type: DataTypes.DATEONLY,
					allowNull: true
				},
				profile_picture_path: {
					type: DataTypes.STRING(100),
					allowNull: true
				},
				page: {
					type: DataTypes.STRING(100),
					allowNull: true,
					unique: 'employees_page_UN'
				}
			},
			{
				sequelize,
				tableName: 'employees',
				timestamps: false,
				indexes: [
					{
						name: 'PRIMARY',
						unique: true,
						using: 'BTREE',
						fields: [{ name: 'id' }]
					},
					{
						name: 'employees_page_UN',
						unique: true,
						using: 'BTREE',
						fields: [{ name: 'page' }]
					}
				]
			}
		);
	}
}
