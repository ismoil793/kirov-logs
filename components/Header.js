import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header({ name }) {
  return (
    <header className="pt-20 pb-12">
      <Link href="/">
        <a className="flex flex-col">
          <div
            className="w-32 h-32 rounded-full mx-auto mb-4 border-2 border-white"
            style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
          >
            <Image
              src="/kirov.jpg"
              alt="Blog brand img"
              width={128}
              height={128}
              className="rounded-full object-cover"
            />
          </div>
          <p className="text-2xl dark:text-white text-center font-medium">
            <span className="typing-demo">
              {name}
            </span>
          </p>
        </a>
      </Link>
    </header>
  );
}
