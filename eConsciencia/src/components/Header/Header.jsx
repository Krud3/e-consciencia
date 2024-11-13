import React from 'react';
import { Link } from 'react-router-dom';
import { CircleUser, Menu, Package2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const Header = () => {
  return (
    <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <Link to="/econsciencia" className="flex items-center gap-2 text-lg font-semibold md:text-base">
          <img src='logo-solo.svg' alt='logo-eConsciencia' className="h-6 w-6" />
          <span className="sr-only">Home</span>
        </Link>
        <Link to="/Shortage" className="text-foreground transition-colors hover:text-foreground whitespace-nowrap">
          Water Shortage
        </Link>
        <Link to="/contamination" className="text-muted-foreground transition-colors hover:text-foreground whitespace-nowrap">
          Water Contamination
        </Link>

        <Link to="/acidification" className="text-muted-foreground transition-colors hover:text-foreground whitespace-nowrap">
          Water Acidification
        </Link>
      </nav>

      {/* Sheet para el menú móvil (hamburguesa) */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="grid gap-6 text-lg font-medium">
            <Link to="/" className="flex items-center gap-2 text-lg font-semibold">
            <img src='logo-solo.svg' alt='logo-eConsciencia' className="h-6 w-6" />
              <span className="sr-only">eConsciencia</span>
            </Link>
            <Link to="#" className="hover:text-foreground">
            Water Shortage
            </Link>
            <Link to="/contamination" className="text-muted-foreground hover:text-foreground">
            Water Contamination
            </Link>

            <Link to="/acidification" className="text-muted-foreground hover:text-foreground">
            Water Acidification
            </Link>
          </nav>
        </SheetContent>
      </Sheet>

      <div className="ml-auto flex-1 sm:flex-initial">
        <div className="ml-auto flex-1 sm:flex-initial flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <CircleUser className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Languages</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
        </div>
      </div>
    </header>
  );
};

export default Header;
