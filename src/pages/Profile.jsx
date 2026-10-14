import { useEffect, useState } from "react";
import ProfileCard from "../components/ProfileCard";
import Post from "../components/Post";

function Profile(){
    const [posts, setPosts] = useState(()=>{
        const savedPosts = localStorage.getItem("posts");

        if(savedPosts){
            return JSON.parse(savedPosts);
        }
        return[
         {
            id: 1,
            author: 'kai angel',
            title: 'shhh',
            text: "andy warhol",
            image: '/src/assets/shh.webp'
        },
    ];
    });

    const [title, setTitle] = useState(''); 
    const [text, setText] = useState("");
    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState("");
    const [error, setError] = useState("")


    useEffect(() => {
        console.log("Количество постов", posts.length);
        localStorage.setItem("posts", JSON.stringify(posts));
    }, [posts]
)

    function deletePost(id){
        setPosts(
            posts.filter((post) => post.id !==id)
        )
    }

    function clearPosts(){
        setPosts([]);
    }

    function handleImageChange(event) {
        const file = event.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onloadend = () => {
            setImage(reader.result);
            setPreview(reader.result);
        };
        reader.readAsDataURL(file);
    }

    function removeImage() {
        setImage(null);
        setPreview("");
    }

    function addPost(event) {
        event.preventDefault();
        if(title.trim() || !text.trim()){
            setError("Заполните заголовок и текст");
            return;
        }

        const newPost = {
            id: Date.now(),
            title: title,
            text: text,
            author: "Kai Angel",
            image: image,
        }

        setPosts([...posts, newPost]);
        setTitle("");
        setText("");
        setImage(null);
        setPreview("");
        setError("");
    }
    
    return(
        <section>
            <h1>Мой профиль</h1>
            <ProfileCard />
            <div className="feed">
                <h2>Мои публикации</h2>
                <p>Всего публикаций {posts.length}</p>
                 <form className="post-form" onSubmit={addPost}>
                    {error &&(
                        <p className="form-error">
                            {error}
                        </p>
                    )}
                <input
                    type="text"
                    placeholder="Заголовок"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                />
                <textarea
                    placeholder="текст для поста"
                    value={text}
                    onChange={(event) => setText(event.target.value)}
                />

                <label className="upload-btn">
                    Загрузить фото
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        hidden
                    />
                </label>

                {preview && (
                    <div className="preview">
                        <img src={preview} alt="preview" />
                        <button
                            type="button"
                            className="remove-photo"
                            onClick={removeImage}
                        >
                            ✕
                        </button>
                    </div>
                )}
                <button type="submit">
                    Опубликовать
                </button>
            </form>

            <button onClick={clearPosts}>Удалить все посты</button>

            {posts.map((post) => (
                <Post
                    key={post.id}
                    id={post.id}
                    author={post.author}
                    title={post.title}
                    text={post.text}
                    image={post.image}
                    onDelete={deletePost}
                />
            ))}


            </div>
        </section>
    )
}

export default Profile;