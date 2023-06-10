import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Returns all categories fully.
export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {
            const result = await prisma.Product.findMany();
            const serialized_products = result.map((product) => ({
                ...product,
                stock: product.stock.toString(), // Convert BigInt to String
            }));
            res.status(200).json(serialized_products);
        } catch (error) {
            console.error('Error fetching data:', error);
            res.status(500).json({ error: 'An error occurred while fetching data.' });
        }
    } else {
        res.status(405).json({ error: 'Method Not Allowed' });
    }
}
