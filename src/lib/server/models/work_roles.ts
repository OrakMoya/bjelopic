import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { our_works, our_worksId } from './our_works';
import type { production_roles, production_rolesId } from './production_roles';

export interface work_rolesAttributes {
	id: number;
	work_id: number;
	role_id: number;
}

export type work_rolesPk = 'id';
export type work_rolesId = work_roles[work_rolesPk];
export type work_rolesOptionalAttributes = 'id';
export type work_rolesCreationAttributes = Optional<
	work_rolesAttributes,
	work_rolesOptionalAttributes
>;

export class work_roles
	extends Model<work_rolesAttributes, work_rolesCreationAttributes>
	implements work_rolesAttributes
{
	id!: number;
	work_id!: number;
	role_id!: number;

	// work_roles belongsTo our_works via work_id
	work!: our_works;
	getWork!: Sequelize.BelongsToGetAssociationMixin<our_works>;
	setWork!: Sequelize.BelongsToSetAssociationMixin<our_works, our_worksId>;
	createWork!: Sequelize.BelongsToCreateAssociationMixin<our_works>;
	// work_roles belongsTo production_roles via role_id
	role!: production_roles;
	getRole!: Sequelize.BelongsToGetAssociationMixin<production_roles>;
	setRole!: Sequelize.BelongsToSetAssociationMixin<production_roles, production_rolesId>;
	createRole!: Sequelize.BelongsToCreateAssociationMixin<production_roles>;

	static initModel(sequelize: Sequelize.Sequelize): typeof work_roles {
		return work_roles.init(
			{
				id: {
					autoIncrement: true,
					type: DataTypes.INTEGER,
					allowNull: false,
					primaryKey: true
				},
				work_id: {
					type: DataTypes.INTEGER,
					allowNull: false,
					references: {
						model: 'our_works',
						key: 'id'
					}
				},
				role_id: {
					type: DataTypes.INTEGER,
					allowNull: false,
					references: {
						model: 'production_roles',
						key: 'id'
					}
				}
			},
			{
				sequelize,
				tableName: 'work_roles',
				timestamps: false,
				indexes: [
					{
						name: 'PRIMARY',
						unique: true,
						using: 'BTREE',
						fields: [{ name: 'id' }]
					},
					{
						name: 'id_UNIQUE',
						unique: true,
						using: 'BTREE',
						fields: [{ name: 'id' }]
					},
					{
						name: 'combo_UNIQUE',
						unique: true,
						using: 'BTREE',
						fields: [{ name: 'work_id' }, { name: 'role_id' }]
					},
					{
						name: 'fk_role_id_idx',
						using: 'BTREE',
						fields: [{ name: 'role_id' }]
					}
				]
			}
		);
	}
}
