import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { our_works, our_worksId } from './our_works';
import type {
	work_employees_participated,
	work_employees_participatedId
} from './work_employees_participated';

export interface work_videosAttributes {
	id: number;
	video_id: string;
	video_service: string;
	work_id: number;
	reference_title?: string;
}

export type work_videosPk = 'id';
export type work_videosId = work_videos[work_videosPk];
export type work_videosOptionalAttributes = 'id' | 'video_service' | 'reference_title';
export type work_videosCreationAttributes = Optional<
	work_videosAttributes,
	work_videosOptionalAttributes
>;

export class work_videos
	extends Model<work_videosAttributes, work_videosCreationAttributes>
	implements work_videosAttributes
{
	id!: number;
	video_id!: string;
	video_service!: string;
	work_id!: number;
	reference_title?: string;

	// work_videos belongsTo our_works via work_id
	work!: our_works;
	getWork!: Sequelize.BelongsToGetAssociationMixin<our_works>;
	setWork!: Sequelize.BelongsToSetAssociationMixin<our_works, our_worksId>;
	createWork!: Sequelize.BelongsToCreateAssociationMixin<our_works>;
	// work_videos hasMany work_employees_participated via work_id
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

	static initModel(sequelize: Sequelize.Sequelize): typeof work_videos {
		return work_videos.init(
			{
				id: {
					autoIncrement: true,
					type: DataTypes.INTEGER,
					allowNull: false,
					primaryKey: true
				},
				video_id: {
					type: DataTypes.STRING(45),
					allowNull: false,
					unique: 'video_id_UNIQUE'
				},
				video_service: {
					type: DataTypes.STRING(45),
					allowNull: false,
					defaultValue: 'youtube'
				},
				work_id: {
					type: DataTypes.INTEGER,
					allowNull: false,
					references: {
						model: 'our_works',
						key: 'id'
					}
				},
				reference_title: {
					type: DataTypes.STRING(100),
					allowNull: true
				}
			},
			{
				sequelize,
				tableName: 'work_videos',
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
						name: 'video_id_UNIQUE',
						unique: true,
						using: 'BTREE',
						fields: [{ name: 'video_id' }]
					},
					{
						name: 'work_videos_FK',
						using: 'BTREE',
						fields: [{ name: 'work_id' }]
					}
				]
			}
		);
	}
}
