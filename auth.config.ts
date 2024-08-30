import bcrypt from "bcryptjs"
import { getUserByEmail } from './data/user';
import Credentials from "next-auth/providers/credentials"
import type { NextAuthConfig } from "next-auth"
import { LoginSchema } from "./schemas"
import { log } from "console";
 
export default { providers: [Credentials({
    async authorize(credentials){
        const validatedFields = LoginSchema.safeParse(credentials)

        if(validatedFields.success){
            const {email,password} = validatedFields.data;
                 
          const user = await getUserByEmail(email)
          log(user)
           if(!user || !user.password)return null;
           

           const passwordMatch = await bcrypt.compare(password,user.password);

           if(passwordMatch)return user;
        }
        return null;
    }
})] ,
} satisfies NextAuthConfig