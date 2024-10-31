import {z} from "zod"

export const usernameValidation=z
.string()
.min(2,"Username must be atleast 2 characters")
.max(20,"username must be no more 20 characters")
.regex(/^[a-zA-Z0-9_]+$/,"username must be contain special charaters")


export const signupSchema = z.object({
    username:usernameValidation,
    email:z.string().email({message:"Invalid email Address"}),
    password:z.string().min(6,{
        message:"password must be atleast 6 character"
    })
})