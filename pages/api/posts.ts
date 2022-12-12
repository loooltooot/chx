import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const category = req.query['category'] as string ?? ''

    const allPosts = await prisma.posts.findMany({
        where: {
            category: {
                equals: category
            }
       }
    })

    allPosts.forEach((post) => {
        if(post.content.length > 300) 
            post.content = post.content.substring(0, 299) + '...'
    })

    res.status(200).json(allPosts)
}