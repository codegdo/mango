import { http } from "@/helpers";

export async function loginAction() {
  return await http.get('https://jsonplaceholder.typicode.com/todos/1');
}