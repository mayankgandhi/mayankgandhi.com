import { redirect } from "@remix-run/node";

export const loader = () => {
  return redirect("https://www.apple.com/legal/internet-services/itunes/");
};

export default function TickerTerms() {
  return null;
}
