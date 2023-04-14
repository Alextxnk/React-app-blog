import * as z from 'zod';

export const userAuthSchema = z.object({
   email: z.string().email('Email введен некорректно'),
   password: z.string().min(8, {message: 'Пароль должен состоять минимум из 8 символов'})
});
