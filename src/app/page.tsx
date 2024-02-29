import Link from "next/link";

export default function Home() {
  return (
    <main>
        <h1>Home</h1>
        <div>Let's start</div>
        <p><Link href={'/meals'}>Meals</Link></p>
        <p><Link href={'/meals/share'}>Meals Share</Link></p>
        <p><Link href={'/community'}>Community</Link></p>
    </main>
  );
}
