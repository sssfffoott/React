import { useState } from "react";
import Post from "./Post";

function ProfileCard() {
    const [posts, setPosts] = useState([
         {
            id: 1,
            author: 'kai angel',
            title: 'shhh',
            text: "andy warhol",
            image: '/src/assets/shh.webp'
        },
        {
            id: 2,
            author: 'kai angel',
            title: 'shhh',
            text: "shhh",
            image: '/src/assets/shh.webp'
        },
        {
            id: 3,
            author: 'kai angel',
            title: 'shhh',
            text: "shhh",
            image: '/src/assets/shh.webp'
        },
    ])

    const [title, setTitle] = useState('');
    const [text, setText] = useState("");
    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState("");

    function deletePost(id){
        setPosts(
            posts.filter((post) => post.id !==id)
        )
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
    }

    return (
        <section className="profile-card">
            <div className="profile">
                <img className="avatar" src="/src/assets/kai.jpeg"/>
                <div className="profile-info">
                    <h2>Kai Angel</h2>
                    <p>@kai</p>
                </div>
            </div>

            <form className="post-form" onSubmit={addPost}>
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
        </section>
    )
}

export default ProfileCard;