import Image from "next/image";
import { socialLinks } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="shell flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <div className="max-w-md">
          <div className="flex items-center gap-4">
          <div className="relative h-12 w-12 overflow-hidden rounded-full border border-white/10 bg-white/[0.04]">
            <Image
              src="/flora-fantasia-logo.jpeg"
              alt="Flora Fantasia logo"
              fill
              sizes="48px"
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-lg font-semibold text-[var(--text-100)]">Flora Fantasia</p>
            <p className="text-sm text-[var(--text-500)]">
              Malabar’s Own Amusement Park
            </p>
          </div>
        </div>
          <p className="mt-5 text-sm leading-7 text-[var(--text-300)]">
            Flora Fantasia is one of Malappuram’s most loved leisure destinations,
            built for family-friendly fun, thrill rides, water experiences, and
            unforgettable holiday memories.
          </p>
        </div>

        <div className="flex flex-wrap gap-5 text-sm text-[var(--text-300)]">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-[var(--text-100)]"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
