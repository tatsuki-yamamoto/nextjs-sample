import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1 className="text-5xl">TOP</h1>
      <ul>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </div>
  )
}
