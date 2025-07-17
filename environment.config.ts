import dotenv from "dotenv";
dotenv.config();

export const environmentConfig = {
  baseUrl:
  process.env.URL??
  process.env.BASE_URL??
  "no url defined",
  
  userEmail:
    process.env.USER_EMAil ?? 
    process.env.EMAIL ?? 
    "no user defined",
  userPassword:
    process.env.USER_PASSWORD ??
    process.env.PASSWORD ??
    "no password defined",
}