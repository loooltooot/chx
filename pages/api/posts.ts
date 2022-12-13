import { Prisma, PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'
import { INew } from '../../models/post'

const prisma = new PrismaClient()

export default async (req: NextApiRequest, res: NextApiResponse) => {
    // query arguments
    let category, id

    let result

    switch(req.method) {
        case 'GET':
            category = req.query['category'] as string ?? ''

            let filter: Prisma.postsFindManyArgs = {
                orderBy: {
                    karma: 'desc'
                }
            }
            if(category) filter.where = {
                category: {
                    equals: category
                }
            }

            result = await prisma.posts.findMany(filter)
            result.forEach((post) => {
                if(post.content.length > 300) 
                    post.content = post.content.substring(0, 299) + '...'
            })

            res.status(200).json(result)
            break
        default:
            res.status(405).json('Wrong request method')
    }
}