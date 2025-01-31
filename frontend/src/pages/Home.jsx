import Greetings from "../components/home/Greetings";
import BottomNav from "../components/shared/BottomNav";

export default function Home() {
  return (
    <section className="bg-[#1f1f1f] gap-3 flex h-[calc(100vh-5rem)] overflow-hidden">

      {/* Left div */}
      <div className="flex-[3] bg-red-600">
        <Greetings />
      </div>

      {/* Right div */}
      <div className="flex-[2] bg-blue-600">
        <h1>Hello</h1>
      </div>
      <BottomNav />

    </section>
  );
}