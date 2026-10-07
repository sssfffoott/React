// import { useState } from "react";
// import Post from "./Post";

function ProfileCard() {
    // const [posts, setPosts] = useState([

    return (
        <section className="profile-card">
            <div className="profile">
                <img className="avatar" src="/src/assets/kai.jpeg"/>
                <div className="profile-info">
                    <h2>Kai Angel</h2>
                    <p>@kai</p>
                </div>
            </div>
            <p className="profile-description">
                Fronted devolped on React🥞
            </p>

            {/* <form className="post-form" onSubmit={addPost}>
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
            </form> */}

            {/* {posts.map((post) => (
                <Post
                    key={post.id}
                    id={post.id}
                    author={post.author}
                    title={post.title}
                    text={post.text}
                    image={post.image}
                    onDelete={deletePost}
                />
            ))} */}
        </section>
    )
}

export default ProfileCard;