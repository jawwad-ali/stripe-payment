import dynamic from "next/dynamic";
// import StripePayment from "./components/StripePayment";

const DynamicComponentWithNoSSR = dynamic(
  () => import('./components/StripePayment'),
  { ssr: false }
)

export default function Home() {
  return (
    <main>
      <DynamicComponentWithNoSSR />
    </main>
  );
}
