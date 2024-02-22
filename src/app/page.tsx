/** @format */

import Header from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import TableContent from "@/components/Table";

export default function Home() {
  return (
    <>
      <Header />
      <div className="absolute left-16 mt-4 ">
        <TableContent />
      </div>
      <div className="z-40 relative">
        <Sidebar />
      </div>
    </>
  );
}
