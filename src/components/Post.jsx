import Actions from "./Actions";

function Post({ author, title, text, image, onDelete, id}) {
    return (
        <div>
            <article className="post">
                <h2>{title}</h2>
                <p className="post-text">{text}</p>

                {image && (
                    <img
                        className="post-image"
                        src={image}
                        alt={title}
                    />
                )}

                <p className="post-author">Автор: {author}</p>

                <Actions />

                <button
                    className="delete-button"
                    onClick={() => onDelete(id)}>
                    Удалить
                </button>
            </article>
        </div>
    )
}

export default Post;