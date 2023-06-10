import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const { name, description, long_description, attributes, price, sale_price, stock, images, tax, categories } = req.body;
            const new_product = await prisma.Product.create({
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
                },
            });

            await prisma.Product.update({
                where: {
                  id: new_product.id,
                },
                data: {
                  categories: {
                    connect: categories.map((category_id) => ({
                      id: category_id,
                    })),
                  },
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