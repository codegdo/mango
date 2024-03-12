"use server"
import { http } from "@/helpers";

export async function loginAction() {
  console.log('ACTION CALL');
  const baseUrl = process.env.BASE_URL;

  return http.get(`${baseUrl}/todos/1`);
}
