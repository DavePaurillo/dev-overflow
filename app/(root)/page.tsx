import { auth } from "@/auth";

async function Home() {
  const session = await auth();

  console.log(session);

  return (
    <>
      <h1 className="h1-bold">Welcome to the world of nextjs</h1>
    </>
  );
}

export default Home;
