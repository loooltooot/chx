import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient()

export default async (req: NextApiRequest, res: NextApiResponse) => {
    switch (req.method) {
        case 'GET':
            const result = await prisma.posts.findMany({
                select: {
                    code: true,
                    title: true
                },
                orderBy: {
                    id: 'desc'
                },
                take: 3
            })

            res.status(200).json(result)
            break
        default:
            res.status(405).json('Wrong action method')
            break
    }
}