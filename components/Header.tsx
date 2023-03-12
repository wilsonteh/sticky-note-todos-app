import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-indigo-500 text-gray-100 p-4">
      <Link href="/" className="text-lg font-semibold">Sticky Note Todos</Link>
    </header>
  );
}
 
export default Header;