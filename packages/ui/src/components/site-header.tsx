"use client";

import { MenuIcon } from "lucide-react";

import { SearchForm } from "@workspace/ui/components/search-form";

import { Button, buttonVariants } from "@workspace/ui/components/button";
import { Separator } from "@workspace/ui/components/separator";
import { useSidebar } from "@workspace/ui/components/sidebar";

type Props = {
  appName?: string;
};

export function SiteHeader({appName}: Props) {
  const { toggleSidebar } = useSidebar();

  return (
    <header className="sticky top-0 z-50 w-full items-center border-b bg-background">
      <div className="flex h-[--header-height] w-full items-center gap-2 px-4">
        <Button
          className="h-8 w-8 md:hidden"
          variant="ghost"
          size="icon"
          onClick={toggleSidebar}
        >
          <MenuIcon />
        </Button>
        <Separator orientation="vertical" className="mr-2 h-4 md:hidden" />

        <a href="/">{appName || 'LOGO'}</a>

        <SearchForm className="w-full sm:ml-auto sm:w-auto" />
        
        <div>
          <a className={buttonVariants({ variant: "default", size: "sm" })} href="/login">  
            Login
          </a>
        </div>
      </div>

      
    </header>
  );
}
