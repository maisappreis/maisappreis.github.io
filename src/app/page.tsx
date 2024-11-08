'use client'

import { useState } from 'react';
import Header from "@/app/layout/header";
import Sidebar from "@/app/layout/sidebar";
import Content from "@/app/layout/content";
import Footer from "@/app/layout/footer";

export default function Home() {
  const [selectedOption, setSelectedOption] = useState<string>("calendar");

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <main className="app-area">
      <Header selectedOption={selectedOption} />
      <Sidebar onOptionClick={handleOptionClick} />
      <Content selectedOption={selectedOption} />
      <Footer />
    </main>
  );
}
