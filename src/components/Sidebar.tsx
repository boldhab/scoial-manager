"use client";

import { Home, Calendar, BarChart2, Users, MessageCircle, Settings, UserCheck, Target, X, Eye } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const navItems = [
  { key: "dashboard", label: "Dashboard", icon: Home },
  { key: "overview", label: "Overview", icon: Eye },
  { key: "posts", label: "Posts", icon: Calendar },
  { key: "analytics", label: "Analytics", icon: BarChart2 },
  { key: "engagement", label: "Engagement", icon: MessageCircle },
  { key: "campaigns", label: "Campaigns", icon: Target },
  { key: "customers", label: "Customers", icon: UserCheck },
  { key: "users", label: "Users", icon: Users },
  { key: "settings", label: "Settings", icon: Settings },
];

export function Sidebar({
  selected,
  onSelect,
  isOpen,
  onClose,
}: {
  selected: string;
  onSelect: (key: string) => void;
  isOpen?: boolean;
  onClose?: () => void;
}) {
  const handleItemClick = (key: string) => {
    onSelect(key);
    if (onClose) onClose();
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside className={cn(
        "fixed lg:relative lg:translate-x-0 w-72 min-h-screen glass-card border-r flex flex-col z-50 transition-all duration-500 ease-in-out",
        isOpen ? "translate-x-0 shadow-2xl" : "-translate-x-full lg:translate-x-0"
      )}>
        {/* Mobile Close Button */}
        <div className="lg:hidden flex justify-end p-4">
          <Button variant="ghost" size="icon" onClick={onClose} className="hover:bg-primary/10 transition-colors">
            <X className="h-5 w-5" />
          </Button>
        </div>

        <div className="px-6 py-8 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-primary-foreground shadow-lg shadow-primary/20">
            <Target className="h-6 w-6" />
          </div>
          <div>
            <h2 className="font-bold text-lg tracking-tight">SocialDash</h2>
            <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold">Media Manager</p>
          </div>
        </div>

        <nav className="flex-1 py-4 px-4 space-y-1.5 overflow-y-auto">
          {navItems.map((item) => {
            const isActive = selected === item.key;
            return (
              <button
                key={item.key}
                className={cn(
                  "group flex items-center w-full px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 relative overflow-hidden",
                  isActive
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20 scale-[1.02]"
                    : "text-muted-foreground hover:bg-primary/5 hover:text-primary"
                )}
                onClick={() => handleItemClick(item.key)}
                aria-current={isActive ? "page" : undefined}
              >
                {isActive && (
                  <div className="absolute left-0 w-1 h-6 bg-primary-foreground rounded-r-full" />
                )}
                <item.icon className={cn(
                  "mr-3 h-5 w-5 flex-shrink-0 transition-transform duration-300 group-hover:scale-110",
                  isActive ? "text-primary-foreground" : "text-muted-foreground group-hover:text-primary"
                )} />
                <span className="truncate">{item.label}</span>
                {!isActive && (
                  <div className="ml-auto w-1 h-1 rounded-full bg-primary scale-0 group-hover:scale-100 transition-transform duration-300" />
                )}
              </button>
            );
          })}
        </nav>

        <div className="p-6">
          <div className="p-4 rounded-2xl bg-primary/5 border border-primary/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 bg-primary/10 rounded-full blur-2xl -mr-8 -mt-8" />
            <p className="text-xs font-semibold text-primary mb-1">Pro Account</p>
            <p className="text-[10px] text-muted-foreground mb-3">Get advanced insights & more</p>
            <Button size="sm" className="w-full h-8 text-[10px] font-bold">UPGRADE NOW</Button>
          </div>
        </div>

        <div className="p-4 text-[10px] font-medium text-muted-foreground/60 text-center border-t border-border/50">
          &copy; {new Date().getFullYear()} SocialDash v2.0
        </div>
      </aside>
    </>
  );
}
