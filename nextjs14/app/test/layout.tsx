import Link from 'next/link'

export default function DashboardLayout({
                                            children,
                                        }: {
    children: React.ReactNode
}) {
    // return <section>{children}</section>

    return <section>
        {/* Include shared UI here e.g. a header or sidebar */}
        <nav>
            <h1>what??</h1>
            <Link href="/dashboard">Dashboard</Link>
        </nav>

        {children}
    </section>
}
