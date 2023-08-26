

export default async function postDetails({params}) {
    await new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 2000)
    })

    const postId = params.postId ;
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
    next: {
      revalidate: 120,
    },
  });
  const post = await response.json();
    return (
      <div>
        <h1 className="text-center font-bold text-2xl">POST {postId} Details</h1>
        <div className="m-8 rounded bg-slate-100 text-center">
          <h1 className="text-center">{post.title}</h1>
          <p>{post.body}</p>
        </div>
      </div>
    );
}