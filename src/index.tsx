import { Hono } from "hono";
import type { FC } from "hono/jsx";

const app = new Hono();

const Layout: FC = (props) => {
  return (
    <html lang="ja">
      <body>{props.children}</body>
    </html>
  );
};

const Top: FC<{ texts: string; count: number }> = (props: { texts: string; count: number }) => {
  return (
    <Layout>
      <h1>count: {props.count}</h1>
      <p>{props.texts}</p>
    </Layout>
  );
};

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.get("/count", async (c) => {
  const texts = c.req.query("texts") || "";
  return c.html(<Top texts={texts} count={texts.length} />);
});

export default app;
