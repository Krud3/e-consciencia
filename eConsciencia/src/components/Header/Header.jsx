// Header.jsx
"use client"
import React from "react";
import "./Header.css";
import {Link} from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
  } from "@/components/ui/menubar"
  
import User from "/user.png"

const Header = () => {
    return (
        <header className="header">
            <Menubar className="menubar">
                <div className="avatar">
                <Avatar>
                    <AvatarImage src={User} />
                    
                    <AvatarFallback>EcoUser</AvatarFallback>
                 </Avatar>
                </div>
                <MenubarMenu>
                    <MenubarTrigger>Menu</MenubarTrigger>
                    <MenubarContent>
                    <MenubarItem>
                        Inicio 
                    </MenubarItem>
                    <MenubarItem>
                        Escasez del agua 
                    </MenubarItem>
                    <MenubarItem>
                    <Link to="/contamination">Contaminación del agua</Link>
                    </MenubarItem>
                    <MenubarItem>
                        <Link to="/acidification">Acidificación del agua</Link>
                    </MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>
                        <Link to="/econsciencia">Econsciencia</Link> 
                    </MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>
                        <Link to="/signin">Log out</Link>
                    </MenubarItem>
                    </MenubarContent>
                </MenubarMenu>
            </Menubar>
        </header>
    );
};

export default Header;
