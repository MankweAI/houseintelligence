import { redirect } from 'next/navigation';

// Redirect /sell-house to /sell-house/sandton since it's the only live city
export default function SellRedirect() {
    redirect('/sell-house/sandton');
}
