import { useState } from "react";

import styles from "./Post.module.css";

import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

import { Comment } from "./Comment";
import { Avatar } from "./Avatar";

export function Post({ author, content, publishedAt }) {
  const [comments, setComments] = useState([1, 2]);

  const publishedDateFormatted = format(
    publishedAt,
    "dd 'de' LLLL, 'às' HH:mm",
    { locale: ptBR }
  );

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  function handleCreateNewComment(e) {
    e.preventDefault();
    setComments([...comments, comments.length + 1]);
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar hasBorder src={author.avatarUrl} />

          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((line, index) =>
          line.type === "paragraph" ? (
            <p key={index}>{line.content}</p>
          ) : (
            <p key={index}>
              <a href="#">{line.content}</a>
            </p>
          )
        )}
      </div>

      <form
        className={styles.commentForm}
        onSubmit={(e) => handleCreateNewComment(e)}
      >
        <strong>Deixe seu comentário:</strong>

        <textarea placeholder="Deixe seu comentário" />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment, index) => (
          <Comment key={index} />
        ))}
      </div>
    </article>
  );
}
