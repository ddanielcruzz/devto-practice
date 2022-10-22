import React from "react";
import { Card } from "./components/Card";
import { CardArticle } from "./components/CardArticle";
import { RightAside } from "./scenes/RightAside";

function App() {
  return (
    <section className="grid grid-cols-3">
      <aside>Links</aside>
      <main>Posts</main>
      <RightAside />
    </section>
  );
}

export default App;
