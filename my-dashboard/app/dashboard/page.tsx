/*
 * This is how you can create different pages in Next.js: 
 * create a new route segment using a folder, and add a page file inside it.
*/

//3 Component below ( Card, RevenueChart, and LatestInvoices) all recieves data.
import { Card } from '@/app/ui/dashboard/cards';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { fetchRevenue, fetchLatestInvoices } from '@/app/lib/data';
import { lusitana } from '@/app/ui/fonts';
 

export default async function Page() { //This is an async component. Allows to use await to fetch data
  const revenue = await fetchRevenue(); // To Fetch data for the RevenueChart component (receives data)
  const latestInvoices = await fetchLatestInvoices();
  return (
    <main>
      <h1 className={` mb-4 text-xl md:text-2xl`}>
        Dashboard Page
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {/* <Card title="Collected" value={totalPaidInvoices} type="collected" /> */}
        {/* <Card title="Pending" value={totalPendingInvoices} type="pending" /> */}
        {/* <Card title="Total Invoices" value={numberOfInvoices} type="invoices" /> */}
        {/* <Card
          title="Total Customers"
          value={numberOfCustomers}
          type="customers"
        /> */}
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <RevenueChart revenue={revenue}  />
        <LatestInvoices latestInvoices={latestInvoices} />
      </div>
    </main>
  );
}