// src/components/ModulePageLayout.tsx
import { Header } from "./Header";

interface ModulePageLayoutProps {
  menuItems: string[];
  children: React.ReactNode;
}

export const ModulePageLayout = ({ menuItems, children }: ModulePageLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-black">
      <Header />
      <div className="flex flex-1">
        {/* Left Sidebar */}
        <aside className="w-64 border-r border-gray-200 p-6 sticky top-16 h-screen overflow-y-auto">
          <h2 className="text-lg font-semibold mb-4 text-gray-700">Module Units</h2>
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.replace(/\s+/g, "-")}`}
                  className="text-blue-600 hover:underline"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </aside>

        {/* Page Content */}
        <main className="flex-1 px-8 py-6 space-y-12 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
};
