// components/mobile-nav.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ChevronRight, LogOut, Settings, User, Trophy } from "lucide-react";

interface MobileNavProps {
  items: { label: string; href: string }[];
  setOpen: (open: boolean) => void;
}

export function MobileNav({ items, setOpen }: MobileNavProps) {
  const { data: session } = useSession();
  const pathname = usePathname();

  if (!session) return null;

  return (
    <div className="flex flex-col gap-4 py-4">
      <div className="px-2 py-2">
        <div className="mb-2 flex items-center">
          <span className="text-lg font-semibold">Menu</span>
        </div>
        <nav className="flex flex-col gap-2">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`group flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium ${
                pathname === item.href || pathname.startsWith(`${item.href}/`)
                  ? "bg-accent"
                  : "hover:bg-accent"
              }`}
            >
              {item.label}
              <ChevronRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
            </Link>
          ))}
        </nav>
      </div>
      <Separator />
      <div className="px-2">
        <p className="mb-2 text-xs font-medium text-muted-foreground">User</p>
        <nav className="flex flex-col gap-2">
          <Link
            href="/profile"
            onClick={() => setOpen(false)}
            className="group flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium hover:bg-accent"
          >
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>Profile</span>
            </div>
            <ChevronRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
          </Link>
          <Link
            href="/achievements"
            onClick={() => setOpen(false)}
            className="group flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium hover:bg-accent"
          >
            <div className="flex items-center gap-2">
              <Trophy className="h-4 w-4" />
              <span>Achievements</span>
            </div>
            <ChevronRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
          </Link>
          <Link
            href="/settings"
            onClick={() => setOpen(false)}
            className="group flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium hover:bg-accent"
          >
            <div className="flex items-center gap-2">
              <Settings className="h-4 w-4" />
              <span>Settings</span>
            </div>
            <ChevronRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
          </Link>
        </nav>
      </div>
      <Separator />
      <div className="px-2 py-2">
        <Button
          variant="ghost"
          className="w-full justify-start text-muted-foreground"
          onClick={() => {
            setOpen(false);
            signOut({ callbackUrl: "/" });
          }}
        >
          <LogOut className="mr-2 h-4 w-4" />
          Log out
        </Button>
      </div>
    </div>
  );
}
