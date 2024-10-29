// Header.jsx
"use client"
import React from "react";
import "./Header.css";

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
  
  //import User from "../../assets/PNG/logo-solo.svg";
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
                        Escasez del agua 
                    </MenubarItem>
                    <MenubarItem>Contaminación del agua</MenubarItem>
                    <MenubarItem>Acidificación del agua</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>Econsciencia</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>Log out</MenubarItem>
                    </MenubarContent>
                </MenubarMenu>
            </Menubar>
        </header>
    );
};

export default Header;
