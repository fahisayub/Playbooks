import { useRouter } from "next/router";

export default function BlogPost() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div>
      <h1>Blog Post</h1>
      <p>This is a dynamic route example in Next.js using the appRouter method.</p>
      <p>Current slug: {slug}</p>
    </div>
  );
}
