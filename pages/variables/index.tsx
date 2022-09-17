export async function getServerSideProps() {
    console.log(process.env.DB_PASSWORD);
    console.log(process.env.NEXT_PUBLIC_USER_NAME);

    return { props: {} };
}

const Variables = () => {
    console.log(process.env.DB_PASSWORD);
    console.log(process.env.NEXT_PUBLIC_USER_NAME);

    return <div>Variables</div>;
};

export default Variables;
