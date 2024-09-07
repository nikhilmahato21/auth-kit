import { db } from "@/lib/db"

interface User {
    id: string;
    email: string | null;
    password: string | null;
    emailVerified?: Date | null,
     image?: string | null,
     name?:string | null,
  
    // any other fields that exist on the user
  }

export const getUserByEmail = async (email:string):Promise<User | null> =>{
   
    
    try {
        const user = await db.user.findUnique({
            where:{
                email,
            }
         })  
         return user; 
    } catch (error) {
        return null
    }
    return null;
}
export const getUserById = async (id:string)=>{
   
    
    try {
        const user = await db.user.findUnique({
            where:{
                id,
            }
         }) 
         return user 
    } catch (error) {
        return null
    }
}