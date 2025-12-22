import { Link } from 'lucide-react';
import { ReactNode } from 'react';

interface PrimaryBtnProps {
  text: ReactNode;
  action: string;
  className?: string;
}

export default function PrimaryBtn({ text, action, className }: PrimaryBtnProps) {
  const href = `/${action}`;

  return (

    <Link
      href={href}
      className={`mt-12 flex items-center gap-3 bg-yellow-400 text-black px-8 py-4 rounded-full font-bold transition-all shadow-xl shadow-[#431404]/10
        ${className}
      `}
    >
      {text}
    </Link>
  );
}
