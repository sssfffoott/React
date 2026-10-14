import Post from "../components/Post";

function Home() {
    const posts = [
        { id: 1, author: 'kai angel', title: 'shhh', text: "andy warhol", image: '/src/assets/shh.webp' },
        { id: 2, author: 'kai angel', title: 'shhh', text: "shhh", image: '/src/assets/shh.webp' },
        { id: 3, author: 'kai angel', title: 'shhh', text: "shhh", image: '/src/assets/shh.webp' },
    ]
    return (
        <section className="page">
            <h1>Главная страница</h1>
            <div className="feed">
                <h2>Лента</h2>
                {posts.map((post) => (
                    <Post key={post.id} {...post} />
                ))}
            </div>
        </section>
    )
}

export default Home;