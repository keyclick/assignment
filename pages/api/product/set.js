import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const { id, name, description, long_description, attributes, price, sale_price, stock, images, tax, categories } = req.body;
            const result = await prisma.Product.update({
                where: {
                    id: id,
                },
                data: {
                    name,
                    description,
                    long_description,
                    attributes,
                    price,
                    sale_price,
                    stock,
                    images,
                    tax,
                    categories: {
                        connect: categories.map((category_id) => ({
                            id: category_id,
                        })),
                    },
                },
            });
            console.log("changed!")
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