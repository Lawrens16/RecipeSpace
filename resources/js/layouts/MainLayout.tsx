
import * as React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Link } from '@inertiajs/react';

import { CircleCheckIcon, CircleHelpIcon, CircleIcon } from "lucide-react";

export default function MainLayout({ children }: { children?: React.ReactNode }) {

  

  return (
    <div className="min-h-screen bg-white text-black">
      <header className="p-4 shadow bg-[hsl(345,86%,49%)]">
        <NavigationMenu viewport={false}>
          <NavigationMenuList>
            <NavigationMenuItem>
              <ul className="flex gap-18 ml-160 ">
                <li>
                  <NavigationMenuLink asChild>
                    <Link href="/" className="text-white text-[24px] font-bold">Submit A Recipe</Link>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <Link href="/recipe-page" className="text-white text-[24px] font-bold">Recipes</Link>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <Link href="/about" className="text-white text-[24px] font-bold">About</Link>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </header>

      <main className="p-6">
        {children}
      </main>

      <footer className="p-4 bg-[hsl(345,86%,49%)] text-center">
        © 2025 RecipeSpace
      </footer>
    </div>
  );
}


