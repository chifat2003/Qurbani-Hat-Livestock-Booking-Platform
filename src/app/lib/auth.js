import { betterAuth } from "better-auth";

export const auth = betterAuth({
  database: {
    provider: "mongodb",
    url: process.env.MONGODB_URI || "",
  },
  emailAndPassword: {
    enabled: true,
  },
  trustedOrigins: ["http://localhost:3000"],
});
