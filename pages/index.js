import path from 'path';
import fs from 'fs/promises';

export async function getStaticProps() {
    const filePath = path.join(process.cwd(), 'data');
    const jsonData = await fs.readFile(filePath);
    const data = JSON.parse(jsonData)

    console.log(data);

    return {
        props: {
            products: data.products
        }
    }
}

function HomePage({products}) {
  return (
    <ul>
        {products.map(product => (
            <li key={product.id}>{product.title}</li>

        ))}


    </ul>
  );
}

export default HomePage;
