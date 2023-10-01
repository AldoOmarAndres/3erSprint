export const metadata = {
  name:"PillarBank",
  title: 'PillarBank',
  description: 'Generated by Next.js',
  lang:"es",
  content:"Banco"
}

export default function RootLayout({
  children,
}) {
  return (
    <html lang="es">
      <link rel="icon" href="/image/logo.png" sizes="any" />
      <meta name="PillarBank" lang="es" content="Banco"></meta>
      <body>{children}</body>
    </html>
  )
}
