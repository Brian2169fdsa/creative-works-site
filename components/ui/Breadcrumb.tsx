import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-500">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-2">
            {item.href ? (
              <Link
                href={item.href}
                className="text-gray-500 hover:text-navy-midnight transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-navy-midnight font-semibold">
                {item.label}
              </span>
            )}
            {i < items.length - 1 && (
              <span aria-hidden="true" className="text-gray-400">
                /
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
