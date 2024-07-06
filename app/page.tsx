import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="text-6xl text-amber-200">
      <UserButton />
      <p>Dashboard</p>
    </div>
  );
}
