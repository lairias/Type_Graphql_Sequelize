export type Ind = true | false;

export interface ISession {
    cod_session : number;
    cod_user: number;
    ip_address: string;
    user_agent:string;
    payload:string;
    last_activty:string;
}

export interface IPeople {
    cod_people: number;
    cod_user: number;
    firstName: string;
    middleName: string;
    lastName: string;
    photoProfile: string;
    photoBackground: string;
    gender:string;
    age: number;
    birthDate: Date;
    createdAtPeople: string
updatedAtPeople: string;
}
export interface IUser {
    cod_user: number;
    email: string;
    userName: string;
    password: string;
    email_recovery: string;
    _token: string;
    verifiedEmail: Ind;
    ind_usr: Ind;
    ins_usr: Ind;
    createdAtUser: string
updatedAtUser: string
}
export interface IRole{
    cod_role: number;
    nam_role: string;
    desc_role: string;
    ins_role: Ind;
    createdAtRole: string
updatedAtRole: string

}
export interface IPermission{
    cod_permission: number;
    nam_permission: string;
    desc_permission: string;
    createdAtPermission: string
updatedAtPermission: string
    
}
export interface IRoleHasPermission {
    cod_role: number;
    cod_permission: number;
    
}
export interface IUserHasRole {
    cod_user: number;
    cod_role: number;
    
}
export interface IError {
    cod_error_log:number;
    des_error:string;
    type_error:string;
    path_error:string;
    createdAtError: string;
    updatedAtError: string;
    
}