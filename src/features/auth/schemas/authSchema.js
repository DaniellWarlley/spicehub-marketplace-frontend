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

export const otpSchema = z.object({
    code: z.string().regex(/^[0-9]{6}$/, 'Digite os 6 dígitos do código')
})

export const passwordRecoverySchema = z.object({
    email: z.string()
        .trim()
        .email('Digite um e-mail válido')
        .max(320, 'O e-mail deve ter no máximo 320 caracteres'),

    code: z.string()
        .regex(/^[0-9]{6}$/, 'Digite os 6 dígitos do código'),

    newPassword: z.string()
        .min(8, 'A senha deve ter pelo menos 8 caracteres')
        .max(72, 'A senha deve ter no máximo 72 caracteres')
        .refine(
            (value) => value.trim().length > 0,
            'A senha não pode conter apenas espaços'
        ),

    confirmPassword: z.string()
        .min(1, 'Confirme a nova senha'),
}).refine(
    (data) => data.newPassword === data.confirmPassword,
    {
        message: 'As senhas não coincidem',
        path: ['confirmPassword'],
    }
)