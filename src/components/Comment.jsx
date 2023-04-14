import styles from "./Comment.module.css";
import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "./Avatar";

export function Comment() {
  return (
    <div className={styles.comment}>
        <Avatar
            hasBorder={false}
            src="https://avatars.githubusercontent.com/u/79758730?s=400&u=d84869edc03239f2a54f67fd25e011493a43196e&v=4"
        />

        <div className={styles.commentBox}>
            <div className={styles.commentContent}>
                <header>
                    <div className={styles.authorAndTime}>
                        <strong>Edson Rodrigues</strong>
                        <time title="13 de abril, às 14:54" dateTime="2023-04-13 14:54:39">
                            Cerca de 1h atrás
                        </time>
                    </div>

                    <button title="Deletar comentário">
                        <Trash size={24} />
                    </button>
                </header>

                <p>Muito bom Devon, parabéns!! 👏👏</p>
            </div>

            <footer>
                <button>
                    <ThumbsUp /> Aplaudir <span>20</span>
                </button>
            </footer>
        </div>
    </div>
  );
}
