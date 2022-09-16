export async function getStaticProps() {
    const coins = await fetch(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=volume_desc&per_page=10&page=1&sparkline=false',
    ).then((res) => res.json());

    return {
        props: {
            coins,
            propTest: 'This is a test!',
        },
        revalidate: 10,
    };
}

type coinsProps = { coins: any[]; propTest: string };

const Isr = ({ coins }: coinsProps) => {
    return (
        <ul>
            {coins
                .sort((a, b) =>
                    a.name > b.name ? 1 : a.name < b.name ? -1 : 0,
                )
                .map((coin: any) => (
                    <li key={coin.id}>{coin.name}</li>
                ))}
        </ul>
    );
};

export default Isr;
