import Link from 'next/link';

interface LinkProps {
  href: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

const StyledLink = ({ href, children, style }: LinkProps) => {
  return (
    <Link href={href} style={{ textDecoration: 'none', ...style }}>
      {children}
    </Link>
  );
};

export default StyledLink;
