import { IAddress } from "./address.interface";

export interface IUser {
    cpf: string;
    name: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    birthDate: string;
    address: IAddress;
}
