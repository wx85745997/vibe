import { prisma } from "@/lib/db";

const Home = async () => {
  const users = await prisma.user.findMany();
  return (
    <div className="font-bold text-rose-500">
      {JSON.stringify(users, null, 10)}
    </div>
  );
};

export default Home;
