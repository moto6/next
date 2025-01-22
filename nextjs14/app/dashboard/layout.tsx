export default function DashboardLayout({
                                            children,
                                        }: {
    children: React.ReactNode
}) {
    // return <section>{children}</section>

    return <section>
        {/* Include shared UI here e.g. a header or sidebar */}
        <nav>
            <h1>sdfsdf</h1>

        </nav>

        {children}
    </section>
}
