import { globalStyles } from "@/styles/global"

globalStyles();

export default function App({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
