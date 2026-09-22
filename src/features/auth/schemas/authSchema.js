import z from "zod"

export const loginSchema = z.object({
    email: z.string().email('Digite um email válido'),
    password: z.string().min(8, 'Senha muito curta')
})

export const cadSchema = z.object({
    name: z.string().min(2, 'Nome muito curto'),
    email: z.string().email('Digite um email válido'),
    password: z.string().min(8, 'Senha muito curta')
})