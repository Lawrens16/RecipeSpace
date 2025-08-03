
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

export default function loginLayout({ children }: { children?: React.ReactNode }) {

  

  return (
    <div className="min-h-screen bg-white text-black">
      

      <main className="p-6">
        {children}
      </main>

      <footer className="p-4 bg-[hsl(345,86%,49%)] text-center text-white">
        © 2025 RecipeSpace
      </footer>
    </div>
  );
}


