import React from "react";
import Link from "next/link";
import { Text } from "@/components/custom/text";

const Footbar: React.FC = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Text variant="heading" size="xl" className="mb-4">
              About Me
            </Text>
            <Text variant="default" size="sm">
              I am a newbie watch lover and I love to collect Seiko. I am also a
              software engineer and I love to code.
            </Text>
          </div>
          <div>
            <Text variant="heading" size="xl" className="mb-4">
              Quick Links
            </Text>
            <ul className="space-y-2">
              <li>
                <Link href="/collections" className="hover:underline">
                  Collections
                </Link>
              </li>
              <li>
                <Link href="/finder" className="hover:underline">
                  Watch Finder
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:underline">
                  About Seiko
                </Link>
              </li>
              <li>
                <Link href="/support" className="hover:underline">
                  Customer Support
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="mb-4">
              <Text variant="heading" size="xl" className="mb-4">
                Contact Us
              </Text>
              <address className="not-italic">
                <Text variant="default" size="sm">
                  123 Watch Street
                </Text>
                <Text variant="default" size="sm">
                  Tokyo, Japan 123-4567
                </Text>
                <Text variant="default" size="sm">
                  Email: info@seiko.com
                </Text>
                <Text variant="default" size="sm">
                  Phone: +81 3-1234-5678
                </Text>
              </address>
            </div>
            <div>
              <Text variant="heading" size="xl">
                Website made with:
              </Text>
              <Text variant="default" size="sm">
                NextJS, NestJS, AWS, TailwindCSS, Shadcn
              </Text>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center">
          <Text variant="default" size="sm">
            Made by: Angelo Carlos
          </Text>
        </div>
      </div>
    </footer>
  );
};

export default Footbar;
