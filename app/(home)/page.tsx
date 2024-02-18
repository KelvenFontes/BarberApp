import { format } from "date-fns";
import Header from "../components/header";
import Search from "./_components/search";
import BookingItem from "../components/booking-item";

export default function Home() {
  return (
    <div>
      <Header />

      <div className="px-5 pt-5">
        <h2 className="text-xl font-bold">Hello, Kelven!</h2>
        <p className="capitalize text-sm">
          {format(new Date(), "EEEE',' MMMM do'")}
        </p>
      </div>

      <div className="px-5 mt-6">
        <Search />
      </div>

      <div className="px-5 mt-6">
        <h2 className="mb-3 text-xs uppercase text-gray-400 font-bold">Appointments</h2>
        <BookingItem />
      </div>

    </div>
  );
}
