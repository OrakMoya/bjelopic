import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { our_works, our_worksId } from './our_works';
import type { work_employees_participated, work_employees_participatedId } from './work_employees_participated';

export interface work_videosAttributes {
  id: number;
  work_id: number;
  reference_title?: string;
  video_thumbnail_filename: string;
  video_preview_filename?: string;
  url: string;
}

export type work_videosPk = "id";
export type work_videosId = work_videos[work_videosPk];
export type work_videosOptionalAttributes = "id" | "reference_title" | "video_preview_filename";
export type work_videosCreationAttributes = Optional<work_videosAttributes, work_videosOptionalAttributes>;

export class work_videos extends Model<work_videosAttributes, work_videosCreationAttributes> implements work_videosAttributes {
  id!: number;
  work_id!: number;
  reference_title?: string;
  video_thumbnail_filename!: string;
  video_preview_filename?: string;
  url!: string;

  // work_videos belongsTo our_works via work_id
  work!: our_works;
  getWork!: Sequelize.BelongsToGetAssociationMixin<our_works>;
  setWork!: Sequelize.BelongsToSetAssociationMixin<our_works, our_worksId>;
  createWork!: Sequelize.BelongsToCreateAssociationMixin<our_works>;
  // work_videos hasMany work_employees_participated via work_id
  work_employees_participateds!: work_employees_participated[];
  getWork_employees_participateds!: Sequelize.HasManyGetAssociationsMixin<work_employees_participated>;
  setWork_employees_participateds!: Sequelize.HasManySetAssociationsMixin<work_employees_participated, work_employees_participatedId>;
  addWork_employees_participated!: Sequelize.HasManyAddAssociationMixin<work_employees_participated, work_employees_participatedId>;
  addWork_employees_participateds!: Sequelize.HasManyAddAssociationsMixin<work_employees_participated, work_employees_participatedId>;
  createWork_employees_participated!: Sequelize.HasManyCreateAssociationMixin<work_employees_participated>;
  removeWork_employees_participated!: Sequelize.HasManyRemoveAssociationMixin<work_employees_participated, work_employees_participatedId>;
  removeWork_employees_participateds!: Sequelize.HasManyRemoveAssociationsMixin<work_employees_participated, work_employees_participatedId>;
  hasWork_employees_participated!: Sequelize.HasManyHasAssociationMixin<work_employees_participated, work_employees_participatedId>;
  hasWork_employees_participateds!: Sequelize.HasManyHasAssociationsMixin<work_employees_participated, work_employees_participatedId>;
  countWork_employees_participateds!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof work_videos {
    return work_videos.init({
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
    reference_title: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    video_thumbnail_filename: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    video_preview_filename: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    url: {
      type: DataTypes.STRING(200),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'work_videos',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "id_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "work_videos_previews_unique",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "video_thumbnail_filename" },
          { name: "video_preview_filename" },
        ]
      },
      {
        name: "work_videos_FK",
        using: "BTREE",
        fields: [
          { name: "work_id" },
        ]
      },
    ]
  });
  }
}
