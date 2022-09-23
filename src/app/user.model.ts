export interface Roles{
    editor?:boolean;
   
}
export interface user{
    uid:string;
    email:string;
    roles:Roles;
    password:string;
    name:string;
    admin?:boolean;

    
}
