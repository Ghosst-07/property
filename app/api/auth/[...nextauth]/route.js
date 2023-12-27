import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs"; // Add missing import statement for bcrypt package

const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},

      async authorize(credentials) {
        const { email, password } = credentials;
        console.log(email, password);
        try {
          await connectMongoDB();
          const user = await User.findOne({
            email,
          });

          if (!user) {
            console.log("User not found");
            return null;
          } else {
            console.log(user.password);
            const passwordsMatch = await bcrypt.compare(
              password,
              user.password
            );

            if (!passwordsMatch) {
              console.log("Incorrect password");
              return null;
            } else {
              console.log("User authenticated successfully");
              return user;
            }
          }
        } catch (error) {
          console.error(error);
          throw new Error("An error occurred during authentication");
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/",
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
