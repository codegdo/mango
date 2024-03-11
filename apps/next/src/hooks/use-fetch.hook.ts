import { useState } from "react";

export const useFetch = (action: any) => {
  const [isSuccess, setIsSuccess] = useState();

  const query = async () => {
    return await action();
  }

  return { query };
}