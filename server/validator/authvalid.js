const z = require("zod");
const signupschema = z.object({
    username: z
    .string({required_error:"name is required"})
    .trim()
    .min(3,{message:"name must be of atleast 3 chars"})
    .max(20,{message:"name cannot be greater than 20 chars"}),
    email: z
    .string({required_error:"email is required"})
    .trim()
    .email({message:"invalid email address"})
    .min(3,{message:"email must be of atleast 3 chars"}),
    phone: z
    .string({required_error:"name is required"})
    .trim()
    .min(10,{message:"phone must be of atleast 10 chars"})
    .max(10,{message:"phone cannot be greater than 10 chars"}),
    password: z
    .string({required_error:"password is required"})
    .trim()
    .min(7,{message:"password must be of atleast 3 chars"})
    .max(20,{message:"password cannot be greater than 20 chars"}),

});

module.exports = signupschema;