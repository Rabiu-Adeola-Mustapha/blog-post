import NextAuth from "next-auth";
import bcrypt from "bcrypt";
import CredentialsProvider from "next-auth/providers/credentials";
import dbConnect from "../../../libs/dbConnect";

import User from "../../../models/user.model";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Login Here",
      credentials: {
        email: {
          label: "Email Address",
          type: "email",
          placeholder: "johndoe@email.com",
          required: true,
        },
        password: {
          type: "password",
          label: "Password",
          placeholder: "Please enter your password",
        },
      },
      authorize: async (credentials) => {
          await dbConnect()
        const { email, password } = credentials;

        let user = await User.findOne({ email: email });

        if (!user) {
          return null;
        }

        //checking if password

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) return null;

        return user;
      },
    }),
  ],
  callback: {
    jwt: ({ token, user }) => {
      if (token) {
        token.id = user._id;
        token.firstName = user.firstName;
        token.lastName = user.lastName;
      }
      return token;
    },
    session: ({ session, token }) => {
      if (session) {
        session.id = token.id;
        session.firstName = token.firstName;
        session.lastName = token.lastName;
      }
      return session;
    },
  },
  session: "secret",
  jwt: {
    secret: "ThisIsMySecret",
    encrypt: true,
  },
});
