import "./global.css";
import styles from "./App.module.css";

import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <Post
            author="Edson Rodrigues"
            content="Um post legal do Edson Rodrigues."
          />
          <Post
            author="João Ninguém"
            content="Outro post incrível, mas de um desconhecido."
          />
        </main>
      </div>
    </div>
  );
}
