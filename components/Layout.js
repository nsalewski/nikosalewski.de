import { Analytics } from "@vercel/analytics/react";

export default function Layout({ children }) {
  return (
    <div>
      <header></header>
      <main>
        {children}
        <Analytics />
      </main>
      <footer></footer>
    </div>
  );
}
