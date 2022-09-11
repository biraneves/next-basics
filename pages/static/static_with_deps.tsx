export async function getStaticProps() {
    const coins = await fetch(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=volume_desc&per_page=10&page=1&sparkline=false',
    ).then((res) => res.json());

    return {
        props: {
            coins,
            propTest: 'This is a test!',
        },
    };
}

type coinsProps = { coins: any[]; propTest: string };

const Static = ({ coins, propTest }: coinsProps) => {
    return <div>Static component</div>;
};

export default Static;
