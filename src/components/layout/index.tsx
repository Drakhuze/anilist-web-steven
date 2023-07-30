import Link from "next/link";

type Props = {
  children: string | JSX.Element | JSX.Element[],
}

const MainLayout = ({ children }: Props) => {
  return (
    <div>
      <div className="flex border-b">
        <div className="m-4">
          <Link href="/">Dashboard</Link>
        </div>
        <div className="m-4">
          <Link href="/collection">Collection</Link>
        </div>
      </div>
      <div className="container m-auto">
        {children}
      </div>
    </div>
  )
}

export default MainLayout;