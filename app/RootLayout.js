import "./globals.css";
import ClientLayout from "./ClientLayout";

export const metadata = {
  title: "My App",
  description: "Awesome store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
