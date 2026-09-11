import "./globals.css";

export const metadata = {
  title: "Netrixa | IT Company & Digital Services",
  description:
    "Static business website for an IT company offering software, cloud, cybersecurity, automation, and support services.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
