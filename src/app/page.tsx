"use client";

// Social Media Management Dashboard Main Page

import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggler } from "../components/ThemeToggler";
import { Sidebar } from "../components/Sidebar";
import { DashboardHome } from "../components/DashboardHome";

export default function Home() {
  const [selectedSection, setSelectedSection] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-overview-gradient text-foreground transition-colors duration-500 overflow-hidden">
      <Sidebar
        selected={selectedSection}
        onSelect={setSelectedSection}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />
      <main className="flex-1 flex flex-col min-w-0 relative">
        <header className="sticky top-0 z-30 flex items-center justify-between px-6 py-4 border-b bg-card/60 backdrop-blur-xl supports-[backdrop-filter]:bg-card/40">
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="icon"
              className="lg:hidden rounded-xl border-primary/20 bg-primary/5 hover:bg-primary/10 transition-colors"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu className="h-5 w-5 text-primary" />
            </Button>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-glow">Dashboard</h1>
                <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              </div>
              <p className="text-[10px] sm:text-xs text-muted-foreground font-medium uppercase tracking-[0.2em] mt-0.5">
                {selectedSection === "dashboard" ? "Real-time Metrics" : selectedSection === "overview" ? "Performance Overview" : `${selectedSection} Hub`}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-[10px] font-bold text-primary uppercase tracking-wider">
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
              <span>Live Updates</span>
            </div>
            <ThemeToggler />
          </div>
        </header>
        <section className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-10 scroll-smooth">
          <div className="max-w-[1600px] mx-auto animate-fade-in-up">
            <DashboardHome section={selectedSection} />
          </div>
        </section>
      </main>
    </div>
  );
}
