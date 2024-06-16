import { useRouter } from "next/router";

export default function CatchAll() {
  const router = useRouter();
  const { params } = router.query;

  return (
    <div>
      <h1>Catch-All Route</h1>
      <p>This is a catch-all route example in Next.js using the appRouter method.</p>
      <p>Current params: {Array.isArray(params) ? params.join("/") : "None"}</p>
    </div>
  );
}
