import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-p-green h-screen container w-screen flex flex-col justify-center items-center">
      <h1 className="font-sacramento text-5xl text-center">
        Happy Birthday Tajju!
      </h1>

      <Link
        href="/surprise"
        className="bg-p-orange text-p-blue text-3xl mt-8 px-4 py-2 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out"
      >
        Check out the Surprise
      </Link>
    </main>
  );
}
