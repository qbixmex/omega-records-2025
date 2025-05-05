'use server';

import { signIn } from '@/auth.config';
import { AuthError } from 'next-auth';

export const authenticate = async (
  _prevState: string | undefined,
  formData: FormData,
): Promise<string> => {
  try {
    await signIn('credentials', {
      ...Object.fromEntries(formData),
      redirect: false,
    });
    return 'Signin Successful 👍';
  } catch(error) {
    if (error instanceof AuthError) {
      switch((error as AuthError & { type: string }).type) {
        case 'CredentialsSignin':
          return 'Invalid credentials !';
        case 'CallbackRouteError':
          return 'Callback route error !';
        default:
          return 'Something went wrong.';
      }
    }
    return 'Unknown error occurred !';
  }
};