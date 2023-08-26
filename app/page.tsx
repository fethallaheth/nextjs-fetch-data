import Link from "@/node_modules/next/link"

export default function Home() {
  return (
    <div className="text-center">
      WELCOME HOME
      <button> <Link href='./posts'>GO POSTS</Link> </button>
    </div>
  )
}
