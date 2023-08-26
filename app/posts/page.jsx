import Link from "@/node_modules/next/link";
export default async function Home() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      revalidate: 120,
    },
  });
  const posts = await response.json();

  const postJsx = posts.map((post) => {
    return (
      // eslint-disable-next-line react/jsx-key
      <Link href={`/posts/${post.id}`}>
        <div className="m-8 rounded bg-slate-100 text-center">
          <h1 className="text-center">{post.title}</h1>
          <p>{post.body}</p>
        </div>
      </Link>
    );
  });

  return (
    <div>
      <h1>Posts Page</h1>
      <div>{postJsx}</div>
    </div>
  );
}
