import type { Metadata } from 'next'
import Navigation from "../components/navigation";

export default function Page() {
    return (
        <div>
            <Navigation></Navigation>
            <h1>Hello!!</h1>
        </div>
    )
}

export const metadata: Metadata = {
    title: 'dong Nextjs',
}
