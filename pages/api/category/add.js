import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const { name, images, description } = req.body;
            const result = await prisma.Category.create({
                data: {
                    name,
                    images,
                    description,
                },
            });
            res.status(200)
        } catch (error) {
            console.error('Error saving data:', error);
            res.status(500).json({ error: 'An error occurred while saving data.' });
        }
    } else {
        res.status(405).json({ error: 'Method Not Allowed' });
    }
    res.end();
}