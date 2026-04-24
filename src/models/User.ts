import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../config/db';

interface UserAttributes {
  id: string;
  username: string;
  email: string;
  password?: string;
  role: 'admin' | 'staff' | 'customer';
}

interface UserCreationAttributes extends Optional<UserAttributes, 'id'> {}

class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
  public id!: string;
  public username!: string;
  public email!: string;
  public password!: string;
  public role!: 'admin' | 'staff' | 'customer';

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

User.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  role: {
    type: DataTypes.ENUM('admin', 'staff', 'customer'),
    defaultValue: 'customer'
  }
}, {
  sequelize,
  tableName: 'users',
  timestamps: true
});

export default User;
