import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { employees, employeesId } from './employees';
import type { production_roles, production_rolesId } from './production_roles';
import type { work_videos, work_videosId } from './work_videos';

export interface work_employees_participatedAttributes {
  id: number;
  employee_id: number;
  work_id: number;
  production_role_id: number;
}

export type work_employees_participatedPk = "id";
export type work_employees_participatedId = work_employees_participated[work_employees_participatedPk];
export type work_employees_participatedCreationAttributes = work_employees_participatedAttributes;

export class work_employees_participated extends Model<work_employees_participatedAttributes, work_employees_participatedCreationAttributes> implements work_employees_participatedAttributes {
  id!: number;
  employee_id!: number;
  work_id!: number;
  production_role_id!: number;

  // work_employees_participated belongsTo employees via employee_id
  employee!: employees;
  getEmployee!: Sequelize.BelongsToGetAssociationMixin<employees>;
  setEmployee!: Sequelize.BelongsToSetAssociationMixin<employees, employeesId>;
  createEmployee!: Sequelize.BelongsToCreateAssociationMixin<employees>;
  // work_employees_participated belongsTo production_roles via production_role_id
  production_role!: production_roles;
  getProduction_role!: Sequelize.BelongsToGetAssociationMixin<production_roles>;
  setProduction_role!: Sequelize.BelongsToSetAssociationMixin<production_roles, production_rolesId>;
  createProduction_role!: Sequelize.BelongsToCreateAssociationMixin<production_roles>;
  // work_employees_participated belongsTo work_videos via work_id
  work!: work_videos;
  getWork!: Sequelize.BelongsToGetAssociationMixin<work_videos>;
  setWork!: Sequelize.BelongsToSetAssociationMixin<work_videos, work_videosId>;
  createWork!: Sequelize.BelongsToCreateAssociationMixin<work_videos>;

  static initModel(sequelize: Sequelize.Sequelize): typeof work_employees_participated {
    return work_employees_participated.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    employee_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'employees',
        key: 'id'
      }
    },
    work_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'work_videos',
        key: 'id'
      }
    },
    production_role_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'production_roles',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'work_employees_participated',
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
        name: "combo_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "employee_id" },
          { name: "work_id" },
          { name: "production_role_id" },
        ]
      },
      {
        name: "fk_work_id_idx",
        using: "BTREE",
        fields: [
          { name: "work_id" },
        ]
      },
      {
        name: "fk_employee_id_idx",
        using: "BTREE",
        fields: [
          { name: "employee_id" },
        ]
      },
      {
        name: "fk_production_role_id_idx",
        using: "BTREE",
        fields: [
          { name: "production_role_id" },
        ]
      },
    ]
  });
  }
}
