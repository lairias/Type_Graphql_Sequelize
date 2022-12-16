type Ind = true | false
export enum size {S = 0, M = 0, L = 0, XL = 0, XXL = 0, XXXL = 0}
export interface IshoppingCart{
  cod_user:number;
  cod_product:number;
  createdAtShoppingCart:string;
  updatedAtShippingCart:string;
}
export interface IinteractLike{
  cod_product:number
  cod_user:number
  createdAtInteractLike: string
  updatedAtInteractLike: string
}
export interface ITrend {
  cod_trend:number
  cod_product:number
  cod_category:number
  createdAtTrend: string
  updatedAtTredn: string

}
export interface IProduct{
  cod_product: number
  cod_label_product: string
  hash_product: string
  cod_category: number
  nam_product: string
  price_product: number
  ins_product: Ind
  size_product: size
  des_product: string
  discount_product: number
  stock_product: Ind
  createdAtProduct: string
  updatedAtProduct: string
}
export interface IsavedLater{
  cod_saved_later:number;
  cod_product:number;
  cod_user:number;
  createdAtSavedLater: string;
  updatedAtSaveLater: string;
}

export interface IrecetlySenn{
cod_recetlySenn : number;
cod_user:number;
cod_category?:number;
cod_product?:number;
createdAtRecetlySenn: string;
updatedAtRecetlySenn: string;
}

export interface IOffters {
  cod_offters: number
  cod_category: number
  cod_product: number
  start_time: string
  end_time: string
  ind_offters: Ind
  des_offters: string
  createdAtRecetlySenn:string;
  updatedAtRecetlySenn:string;
}
export interface ILaberProduct {
  cod_label_product: number
  name_label_product: number
  ins_label_product: Ind
  createdAtLabelProduct: string
  updatedAtLabelProduct: string
}

export interface IPhotoProduct {
  cod_photo_product: number
  cod_product: number
  path_photo_product: string
  ins_photo_product: Ind
  createdAtPhotoProduct: string
  updatedAtPhotoProduct: string
}

export interface IProCategory{
  cod_category: number
  nam_category: string
  des_category: string
  cod_product: number
  inv_category: number
  [photo_category: string]
}

export interface ISession {
  cod_session: number
  cod_user: number
  ip_address: string
  user_agent: string
  payload: string
  last_activty: string
  createdAtSession: string
  updatedAtSession: string
}

export interface IPeople {
  cod_people: number
  cod_user: number
  firstName: string
  middleName: string
  lastName: string
  photoProfile: string
  photoBackground: string
  gender: string
  age: number
  birthDate: Date
  createdAtPeople: string
  updatedAtPeople: string
}
export interface IUser {
  cod_user: number
  email: string
  userName: string
  password: string
  email_recovery: string
  _token: string
  verifiedEmail: Ind
  ind_usr: Ind
  ins_usr: Ind
  createdAtUser: string
  updatedAtUser: string
}
export interface IRole{
  cod_role: number
  nam_role: string
  desc_role: string
  ins_role: Ind
  createdAtRole: string
  updatedAtRole: string

}
export interface IPermission{
  cod_permission: number
  nam_permission: string
  desc_permission: string
  createdAtPermission: string
  updatedAtPermission: string

}
export interface IRoleHasPermission {
  cod_role: number
  cod_permission: number

}
export interface IUserHasRole {
  cod_user: number
  cod_role: number

}
export interface IError {
  cod_error_log: number
  des_error: string
  type_error: string
  path_error: string
  createdAtError: string
  updatedAtError: string

}
