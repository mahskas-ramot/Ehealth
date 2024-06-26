import {PrismaAdapter} from '@auth/prisma-adapter'
import NextAuth from 'next-auth/next'
import prisma from './app/lib/prisma'
import Google from 'next-auth/providers/google'


export const {handlers,signIn,signOut,auth} = NextAuth({
    adapter: PrismaAdapter(prisma),
    providers: [Google],
})