
export class Daten {
  platform: string;
  username: string ;
 password: string ;
 email: string ;
 constructor( id:string,username:string,password:string,email:string)
{
this.platform=id || '';    
this.username=username || '';
this.password=password || '';
this.email=email || '';
}}

