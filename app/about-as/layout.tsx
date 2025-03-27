// import Navigation from "../components/navigation"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      {children}
      &copy; Next
    </div>
  )
}
