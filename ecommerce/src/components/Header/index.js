import React from "react"
import HeaderDesktop from "./HeaderDesktop"
import HeaderMobile from "./HeaderMobile"
import MenuMobile from "./MenuMobile"

export default function Header() {
    return (
        <header className="header1">
            <HeaderDesktop />
            <HeaderMobile />
            <MenuMobile />
        </header>
    )
}