export default function DashboardLayout({
                                            children
                                        }: {
    children: React.ReactNode
}) {
    return (
        <section>
            <nav>
                {children}
            </nav>
        </section>
    )
}
