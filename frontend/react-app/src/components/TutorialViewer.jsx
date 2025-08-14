import React, { useEffect, useState } from "react";
import { marked } from "marked";

export default function TutorialViewer({ file }) {
  const [content, setContent] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchMarkdown() {
      try {
        const res = await fetch(`/tutorials/${file}`);
        if (!res.ok) throw new Error("Tutorial nicht gefunden");
        const md = await res.text();
        setContent(marked(md));
      } catch (err) {
        setError(err.message);
      }
    }
    fetchMarkdown();
  }, [file]);

  if (error) {
    return <div className="text-red-600 font-bold">Fehler: {error}</div>;
  }

  return (
    <article className="prose max-w-none" dangerouslySetInnerHTML={{ __html: content }} />
  );
}
