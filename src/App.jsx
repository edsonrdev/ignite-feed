import "./global.css";
import styles from "./App.module.css";

import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

export function App() {
  const posts = [
    {
      id: 1,
      author: {
        avatarUrl: "https://avatars.githubusercontent.com/u/79758730?v=4",
        name: "Edson Rodrigues",
        role: "Web Developer",
      },
      content: [
        { type: "paragraph", content: "Fala galeraa 👋" },
        {
          type: "paragraph",
          content:
            "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
        },
        { type: "link", content: "👉 jane.design/doctorcare" },
      ],
      publishedAt: new Date("2023-04-14 18:48:17"),
    },
    {
      id: 2,
      author: {
        avatarUrl: "https://avatars.githubusercontent.com/u/2254731?v=4",
        name: "Diego Fernandes",
        role: "CTO @Rocketseat",
      },
      content: [
        { type: "paragraph", content: "Faaaaaaaaaaaaaala Dev!!!" },
        { type: "paragraph", content: "Tudo bem com vocês?" },
        {
          type: "paragraph",
          content:
            "Passando aqui para desejar uma ótima Páscoa para todos os Devs(as) da nossa imensa Comunidade Rocketseat!",
        },
        { type: "link", content: "👉 diego3g/felizpascoa" },
      ],
      publishedAt: new Date("2023-04-08 07:16:54"),
    },
  ];

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}
