import Link from "next/link";
export default function Home() {
  return (
    <header>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <nav>
        <ul>
          <li>
            <Link href="week-2">Go to Week 2</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
