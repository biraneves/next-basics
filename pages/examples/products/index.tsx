import Link from 'next/link';

const Products = () => {
    const products = [
        { id: 1, name: 'Product 1' },
        { id: 2, name: 'Product 2' },
        { id: 3, name: 'Product 3' },
        { id: 4, name: 'Product 4' },
        { id: 5, name: 'Product 5' },
    ];

    return (
        <div>
            <ul>
                {products.map((item) => (
                    <li key={item.id}>
                        <Link href={`/examples/products/${item.id}`}>
                            <a>{item.name}</a>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Products;
