import User, { IUser } from '../models/userModel';
import bcrypt from 'bcryptjs';

export const getUsers = async (): Promise<IUser[]> => {
    return await User.find();
};

export const getUserById = async (id: string): Promise<IUser | null> => {
    return await User.findById(id);
};

export const createUser = async (data: IUser): Promise<IUser> => {
    const salt = await bcrypt.genSalt(10);
    data.password = await bcrypt.hash(data.password, salt);
    const user = new User(data);
    return await user.save();
};

export const updateUser = async (id: string, data: Partial<IUser>): Promise<IUser | null> => {
    if (data.password) {
        const salt = await bcrypt.genSalt(10);
        data.password = await bcrypt.hash(data.password, salt);
    }
    return await User.findByIdAndUpdate(id, data, { new: true });
};

export const deleteUser = async (id: string): Promise<IUser | null> => {
    return await User.findByIdAndDelete(id);
};
