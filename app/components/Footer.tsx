import React from "react";
import Link from "next/link";
// --- Simple Icons SVG Paths (Brand logos) ---
const BRAND_ICONS = {
  Instagram: "M12 2.163c3.204 0 3.584.012 4.85.07 1.166.054 1.8.249 2.223.413.56.218.959.479 1.379.899.42.42.681.819.899 1.379.164.423.359 1.057.413 2.223.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.166-.249 1.8-.413 2.223-.218.56-.479.959-.899 1.379-.42.42-.819.681-1.379.899-.423.164-1.057.359-2.223.413-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.166-.054-1.8-.249-2.223-.413-.56-.218-.959-.479-1.379-.899-.42-.42-.681-.819-.899-1.379-.164-.423-.359-1.057-.413-2.223-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.054-1.166.249-1.8.413-2.223.218-.56.479-.959.899-1.379.42-.42.819-.681 1.379-.899.423-.164 1.057-.359 2.223-.413 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.277.057-2.148.258-2.911.555-.788.306-1.457.714-2.122 1.379-.665.665-1.073 1.334-1.379 2.122-.297.763-.498 1.634-.555 2.911-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.057 1.277.258 2.148.555 2.911.306.788.714 1.457 1.379 2.122.665.665 1.334 1.073 2.122 1.379.763.297 1.634.498 2.911.555 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.277-.057 2.148-.258 2.911-.555.788-.306 1.457-.714 2.122-1.379.665-.665 1.073-1.334 1.379-2.122.297-.763.498-1.634.555-2.911.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.057-1.277-.258-2.148-.555-2.911-.306-.788-.714-1.457-1.379-2.122-.665-.665-1.334-1.073-2.122-1.379-.763-.297-1.634-.498-2.911-.555-1.28-.058-1.688-.072-4.947-.072zM12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
  Facebook: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
  X: "M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
};
import {
  Mail,
  Phone,
  Globe,
  ArrowRight
} from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#431404] text-stone-200 pt-16 pb-8 mt-20">
      <div className="container mx-auto px-6 max-w-7xl">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">

          {/* Column 1: Brand & Mission */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-2">
              <Globe className="text-yellow-500 w-8 h-8" />
              <h3 className="text-2xl font-bold text-white tracking-tight">Nomad Yatri</h3>
            </div>
            <p className="text-stone-300 leading-relaxed max-w-md">
              India’s first purpose-travel ecosystem connecting volunteers, hosts, and digital nomads with meaningful, affordable, and community-led experiences.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4">
              <SocialLink href="https://instagram.com"
                path={BRAND_ICONS.Instagram}
                label="Instagram" />
              <SocialLink href="https://facebook.com" path={BRAND_ICONS.Facebook} label="Facebook" />
              <SocialLink href="https://twitter.com" path={BRAND_ICONS.X} label="Twitter" />
            </div>
          </div>

          {/* Column 2: Experiences */}
          <div className="space-y-6">
            <h4 className="text-white font-bold uppercase tracking-wider text-sm">Experiences</h4>
            <ul className="space-y-4">
              <FooterLink href="/experiences/volunteer-programs">Volunteer Programs</FooterLink>
              <FooterLink href="/experiences/work-exchange">Work Exchange</FooterLink>
              <FooterLink href="/experiences/digital-nomad-stays">Nomad Stays</FooterLink>
              <FooterLink href="/experiences/cultural-experiences">Cultural Trips</FooterLink>
            </ul>
          </div>
          <Link href="/admin/login" className="text-gray-400 text-xs hover:underline">
            Staff Portal
          </Link>
          {/* Column 3: Company */}
          <div className="space-y-6">
            <h4 className="text-white font-bold uppercase tracking-wider text-sm">Company</h4>
            <ul className="space-y-4">
              <FooterLink href="/about">About Us</FooterLink>
              <FooterLink href="/blog">Our Stories</FooterLink>
              <FooterLink href="/pricing">Membership</FooterLink>
              <FooterLink href="/host/register">Become a Host</FooterLink>
            </ul>
          </div>

          {/* Column 4: Contact & Legal */}
          <div className="space-y-6">
            <h4 className="text-white font-bold uppercase tracking-wider text-sm">Get in Touch</h4>
            <div className="space-y-4 text-sm">
              <a href="mailto:support@nomadyatri.com" className="flex items-center gap-3 hover:text-yellow-400 transition-colors">
                <Mail size={18} className="text-yellow-500" />
                support@nomadyatri.com
              </a>
              <a href="tel:+918894108119" className="flex items-center gap-3 hover:text-yellow-400 transition-colors">
                <Phone size={18} className="text-yellow-500" />
                +91 88941 08119
              </a>
            </div>
            <div className="pt-4 border-t border-white/10 space-y-2 text-xs">
              <Link href="/privacy-policy" className="block hover:underline">Privacy Policy</Link>
              <Link href="/terms-of-use" className="block hover:underline">Terms of Use</Link>
            </div>
          </div>

        </div>

        {/* Copyright Section */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-stone-400">
          <p>© {currentYear} Nomad Yatri. Crafted for the modern traveler.</p>
          <p className="flex items-center gap-1">
            Made with ❤️ in India
          </p>
        </div>
      </div>
    </footer>
  );
};

/* --- Helper Components for Cleanliness --- */

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <li>
    <Link
      href={href}
      className="text-stone-400 hover:text-yellow-400 hover:translate-x-1 transition-all duration-200 inline-flex items-center gap-1 group"
    >
      <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
      {children}
    </Link>
  </li>
);
const SocialLink = ({ href, path, label }: { href: string; path: string; label: string }) => (
  <a
    href={href}
    aria-label={label}
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-yellow-500 hover:text-[#431404] transition-all duration-300 group"
  >
    <svg
      viewBox="0 0 24 24"
      className="w-5 h-5 fill-current"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d={path} />
    </svg>
  </a>
);

export default Footer;