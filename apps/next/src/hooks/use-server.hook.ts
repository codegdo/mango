import { RequestOptions } from '@/helpers';

// Custom hook to call server action
export const useServer = <T>(
  action: (options?: RequestOptions) => Promise<T>
) => {
  const serverAction = async (options?: RequestOptions) => {
    try {
      const result = await action(options);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    action: serverAction,
  };
};
