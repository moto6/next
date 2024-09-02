export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            {/* Layout UI */}
            <body>{children}</body>
        </html>
    )
}