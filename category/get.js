import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Returns all categories fully.
export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {
            const result = await prisma.Category.findMany();
            res.status(200).json(result);
        } catch (error) {
            console.error('Error fetching data:', error);
            res.status(500).json({ error: 'An error occurred while fetching data.' });
        }
    } else {
        res.status(405).json({ error: 'Method Not Allowed' });
    }
}