import { marketingHeadlines } from '@/lib/data';
import { Github, Linkedin, Youtube } from 'lucide-react';
import Link from 'next/link';

export default function Sidebar() {
  return (
    <div className="rounded-xl border bg-card text-card-foreground shadow flex flex-col space-y-2 p-4 h-fit top-24">
      <div className="text-xl md:text-2xl font-bold tracking-tight">
        {marketingHeadlines.mainHeadline}
      </div>
      <div className="text-sm md:text-base text-muted-foreground">
        {marketingHeadlines.subHeadline}
      </div>
      {/* Description */}
      <p className="text-sm text-muted-foreground tracking-tight">
        {`👋 Hi visitor, I'm a software developer who loves building scalable and
        maintainable apps from scratch. 
        Other than by day job I love building side projects for fun, 
        trying out the latest tech trends. 
        If you're into apps that won't crash and projects that won't make you pull your hair out, let's connect!`}
      </p>
      {/* Social Media Icons */}
      <div className="flex space-x-3 pt-2">
        <Link href="https://github.com/ashiqsultan">
          <Github />
        </Link>
        <Link href="https://www.linkedin.com/in/ashiq-sultan/">
          <Linkedin />
        </Link>
        <Link href="https://www.youtube.com/@csbeam">
          <Youtube />
        </Link>
      </div>
    </div>
  );
}
