import Link from 'next/link';
import { usePathname } from 'next/navigation';

type CategoryLinkProps = {
  label: string;
  href: string;
  onClick?: () => void;
};

export default function CategoryLink({
  label,
  href,
  onClick,
}: CategoryLinkProps) {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`link ${isActive ? 'font-bold' : 'text-gray-600'}`}
      onClick={onClick}
    >
      {label}
    </Link>
  );
}
