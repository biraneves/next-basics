export async function getStaticPaths() {
    const coins = await fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd?order=volume_desc&per_page=10&page=1&sparkline=false`,
    ).then((res) => res.json());

    const paths = coins.map((item: any) => ({
        params: { id: item.id },
    }));

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }: { params: any }) {
    const coins = await fetch(
        `https://api.coingecko.com/api/v3/coins/${params.id}`,
    ).then((res) => res.json());

    return {
        props: {
            coins,
        },
        revalidate: 5,
    };
}

const StaticPaths = (props: any) => {
    const coin = props.coins;

    if (!coin) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <span>
                {coin.name} {coin.block_time_in_minutes}
            </span>
        </div>
    );
};

export default StaticPaths;
