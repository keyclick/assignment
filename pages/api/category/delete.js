import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
    // Don't use DELETE here.
    if (req.method === 'POST') {
        try {
            const { id } = req.body;
            const result = await prisma.Category.delete({
                where: {
                    id: id
                },
            });
            res.status(204)
        } catch (error) {
            console.error('Error saving data:', error);
            res.status(500).json({ error: 'An error occurred while saving data.' });
        }
    } else {
        res.status(405).json({ error: 'Method Not Allowed' });
    }
    res.end();
}