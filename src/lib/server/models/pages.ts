import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { employees, employeesId } from './employees';

export interface pagesAttributes {
  id: number;
  target_page_name: string;
  component: string;
  classes: string;
  parent_component_id: number;
}

export type pagesPk = "id";
export type pagesId = pages[pagesPk];
export type pagesOptionalAttributes = "id" | "component" | "classes" | "parent_component_id";
export type pagesCreationAttributes = Optional<pagesAttributes, pagesOptionalAttributes>;

export class pages extends Model<pagesAttributes, pagesCreationAttributes> implements pagesAttributes {
  id!: number;
  target_page_name!: string;
  component!: string;
  classes!: string;
  parent_component_id!: number;

  // pages belongsTo employees via target_page_name
  target_page_name_employee!: employees;
  getTarget_page_name_employee!: Sequelize.BelongsToGetAssociationMixin<employees>;
  setTarget_page_name_employee!: Sequelize.BelongsToSetAssociationMixin<employees, employeesId>;
  createTarget_page_name_employee!: Sequelize.BelongsToCreateAssociationMixin<employees>;

  static initModel(sequelize: Sequelize.Sequelize): typeof pages {
    return pages.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    target_page_name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      references: {
        model: 'employees',
        key: 'page'
      }
    },
    component: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: "div"
    },
    classes: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ""
    },
    parent_component_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'pages',
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
        name: "pages_target_page_FK",
        using: "BTREE",
        fields: [
          { name: "target_page_name" },
        ]
      },
    ]
  });
  }
}
