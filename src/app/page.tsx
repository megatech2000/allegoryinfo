import dynamic from "next/dynamic";

const Banner = dynamic(() => import("../components/home/Banner"));

export default function Home() {
  return (
    <main>
      <div>
        <Banner />
      </div>
    </main>
  );
}
