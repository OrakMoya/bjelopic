import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { work_roles, work_rolesId } from './work_roles';
import type { work_videos, work_videosId } from './work_videos';

export interface our_worksAttributes {
  id: number;
  title?: string;
  subject?: string;
  category?: string;
  publication_date: string;
  priority: number;
}

export type our_worksPk = "id";
export type our_worksId = our_works[our_worksPk];
export type our_worksOptionalAttributes = "id" | "title" | "subject" | "category" | "publication_date" | "priority";
export type our_worksCreationAttributes = Optional<our_worksAttributes, our_worksOptionalAttributes>;

export class our_works extends Model<our_worksAttributes, our_worksCreationAttributes> implements our_worksAttributes {
  id!: number;
  title?: string;
  subject?: string;
  category?: string;
  publication_date!: string;
  priority!: number;

  // our_works hasMany work_roles via work_id
  work_roles!: work_roles[];
  getWork_roles!: Sequelize.HasManyGetAssociationsMixin<work_roles>;
  setWork_roles!: Sequelize.HasManySetAssociationsMixin<work_roles, work_rolesId>;
  addWork_role!: Sequelize.HasManyAddAssociationMixin<work_roles, work_rolesId>;
  addWork_roles!: Sequelize.HasManyAddAssociationsMixin<work_roles, work_rolesId>;
  createWork_role!: Sequelize.HasManyCreateAssociationMixin<work_roles>;
  removeWork_role!: Sequelize.HasManyRemoveAssociationMixin<work_roles, work_rolesId>;
  removeWork_roles!: Sequelize.HasManyRemoveAssociationsMixin<work_roles, work_rolesId>;
  hasWork_role!: Sequelize.HasManyHasAssociationMixin<work_roles, work_rolesId>;
  hasWork_roles!: Sequelize.HasManyHasAssociationsMixin<work_roles, work_rolesId>;
  countWork_roles!: Sequelize.HasManyCountAssociationsMixin;
  // our_works hasMany work_videos via work_id
  work_videos!: work_videos[];
  getWork_videos!: Sequelize.HasManyGetAssociationsMixin<work_videos>;
  setWork_videos!: Sequelize.HasManySetAssociationsMixin<work_videos, work_videosId>;
  addWork_video!: Sequelize.HasManyAddAssociationMixin<work_videos, work_videosId>;
  addWork_videos!: Sequelize.HasManyAddAssociationsMixin<work_videos, work_videosId>;
  createWork_video!: Sequelize.HasManyCreateAssociationMixin<work_videos>;
  removeWork_video!: Sequelize.HasManyRemoveAssociationMixin<work_videos, work_videosId>;
  removeWork_videos!: Sequelize.HasManyRemoveAssociationsMixin<work_videos, work_videosId>;
  hasWork_video!: Sequelize.HasManyHasAssociationMixin<work_videos, work_videosId>;
  hasWork_videos!: Sequelize.HasManyHasAssociationsMixin<work_videos, work_videosId>;
  countWork_videos!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof our_works {
    return our_works.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    subject: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    category: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    publication_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('curdate')
    },
    priority: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'our_works',
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
    ]
  });
  }
}
