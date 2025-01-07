import { IAddress } from "./address.interface";

export interface User {
    cpf: string;
    name: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    birthDate: string;
    responsible: boolean;
    host: boolean;
    address: IAddress;
}
