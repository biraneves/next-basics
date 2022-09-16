export async function getStaticPaths() {
    return { paths: [{ params: { id: 'bitcoin' } }], fallback: false };
}

export async function getStaticProps({ params }: { params: any }) {
    const coins = await fetch(
        `https://api.coingecko.com/api/v3/coins/${params.id}`,
    ).then((res) => res.json());

    return {
        props: {
            coins,
        },
    };
}

const StaticPaths = (props: any) => {
    const coin = props.coins;
    return (
        <div>
            <span>
                {coin.name} {coin.block_time_in_minutes}
            </span>
        </div>
    );
};

export default StaticPaths;
