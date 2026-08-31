import "./globals.css";

export const metadata = {
  title: "Dolophino | Language Academy",
  description:
    "Learn languages with engaging courses, practical lessons and a better way to build real communication skills.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}