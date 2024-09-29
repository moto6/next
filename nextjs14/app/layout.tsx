import Navigation from "../components/navigation";

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en">
        {/*<h1>root H1</h1>*/}
        {/* Layout UI */}
        <body>
        <Navigation/>
        {children}
        &copy; {new Date().getFullYear()}
        </body>
        </html>
    )
}