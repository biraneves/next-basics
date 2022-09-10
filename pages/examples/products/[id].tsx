import { useRouter } from 'next/router';

const Product = () => {
    const router = useRouter();
    const { id } = router.query;

    return <div>Rendering information about product with id {id}.</div>;
};

export default Product;
