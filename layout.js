export const metadata = {
  title: "ترحال - رحلات سياحية",
  description: "أفضل الرحلات السياحية حول العالم بأفضل الأسعار",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
