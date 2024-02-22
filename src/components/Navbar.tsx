/** @format */
"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import { LiaFileExportSolid } from "react-icons/lia";
import { BiDownArrow } from "react-icons/bi";
import { IoNotifications, IoSearchCircleOutline } from "react-icons/io5";
import { MdContactMail } from "react-icons/md";
import { GrContact, GrContactInfo, GrPersonalComputer } from "react-icons/gr";

export default function Header() {
  return (
    <Navbar className="dark w-full">
      <NavbarContent className="flex gap-4" justify="start">
        <NavbarItem>
          <Link color="foreground" href="#">
            <LiaFileExportSolid className="mr-1 cursor-pointer" />
            <p className="mr-2">PayOuts</p>
            {"  /  "}
          </Link>
          <Button
            className="ml-2"
            as={Link}
            size="sm"
            color="primary"
            href="#"
            variant="flat">
            Single
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" color="foreground">
            <p className="font-thin text-sm">
              Bulk
              <span className="badge badge-secondary text-white ml-2">new</span>
            </p>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            <p className="font-thin text-sm">Payout links</p>
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex" justify="end">
        <NavbarItem>
          <Button as={Link} size="sm" color="primary" href="#" variant="flat">
            <p>
              {" + "}PayOut {" | "}
            </p>
            <BiDownArrow />
          </Button>
        </NavbarItem>
        <NavbarItem>
          <p className="flex justify-center items-center gap-2">
            <IoSearchCircleOutline size={25} />
            <IoNotifications size={25} />
            <GrContactInfo size={25} />
          </p>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
