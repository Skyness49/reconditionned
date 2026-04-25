import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LDLC Nice Grimaldi — Gestion Reconditionnés",
  description: "Gestion du parc de PC reconditionnés",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body style={{ margin: 0, padding: 0, background: "#f0f2f6" }}>
        {children}
      </body>
    </html>
  );
}
