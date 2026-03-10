import Link from "next/link";
export default function Home() {
  return (
    <header className="bg-gray-100 p-6 rounded-lg shadow-md border border-gray-200 mb-3
                       text-gray-800
                       dark:bg-gray-600 dark:border-gray-600 dark:text-pink-400">
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <nav>
        <ul>
          <li>
            <Link href="week-2">Go to Week 2</Link>
          </li>
          <li>
            <Link href="week-3">Go to Week 3</Link>
          </li>
          <li>
            <Link href="week-4">Go to Week 4</Link>
          </li>
          <li>
            <Link href="week-5">Go to Week 5</Link>
          </li>        
          <li>
            <Link href="week-6">Go to Week 6</Link>
          </li>
          <li>
            <Link href="week-7">Go to Week 7</Link>
          </li>
          <li>
            <Link href="week-8">Go to Week 8</Link>
          </li>
          
        </ul>
      </nav>
    </header>
  );
}
