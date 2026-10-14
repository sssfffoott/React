import Actions from "./Actions";

function Post({ author, title, text, image, onDelete, id }) {
    return (
        <article className="post">
            <h2>{title}</h2>
            <p className="post-text">{text}</p>
            <p className="post-author">Автор: {author}</p>

            {image && (
                <img className="post-image" src={image} alt={title} />
            )}

            <Actions />

            {onDelete && (
                <button className="delete-button" onClick={() => onDelete(id)}>
                    Удалить
                </button>
            )}
        </article>
    )
}

export default Post;