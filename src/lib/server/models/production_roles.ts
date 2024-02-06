import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { work_employees_participated, work_employees_participatedId } from './work_employees_participated';
import type { work_roles, work_rolesId } from './work_roles';

export interface production_rolesAttributes {
  id: number;
  production_role: string;
}

export type production_rolesPk = "id";
export type production_rolesId = production_roles[production_rolesPk];
export type production_rolesOptionalAttributes = "id";
export type production_rolesCreationAttributes = Optional<production_rolesAttributes, production_rolesOptionalAttributes>;

export class production_roles extends Model<production_rolesAttributes, production_rolesCreationAttributes> implements production_rolesAttributes {
  id!: number;
  production_role!: string;

  // production_roles hasMany work_employees_participated via production_role_id
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
  // production_roles hasMany work_roles via role_id
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

  static initModel(sequelize: Sequelize.Sequelize): typeof production_roles {
    return production_roles.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    production_role: {
      type: DataTypes.STRING(45),
      allowNull: false,
      unique: "production_role_UNIQUE"
    }
  }, {
    sequelize,
    tableName: 'production_roles',
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
        name: "production_role_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "production_role" },
        ]
      },
    ]
  });
  }
}
