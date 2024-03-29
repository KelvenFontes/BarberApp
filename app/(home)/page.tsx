import { format } from "date-fns";
import Header from "../components/header";
import Search from "./_components/search";
import BookingItem from "../components/booking-item";
import { db } from "../lib/prisma";
import BarbershopItem from "./_components/barbershop-item";

export default async function Home() {

  // Chamar prima e pegar barbearia
  const barbershops = await db.barbershop.findMany({})

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

      <div className="mt-6">
        <h2 className="px-5 text-xs mb-3 uppercase text-gray-400 font-bold">Recommended</h2>

        <div className="px-5 flex gap-4 overflow-x-auto [&::webkit-scrollbar]:hidden">
          {barbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>

      <div className="mt-6 mb-[4.5rem]">
        <h2 className="px-5 text-xs mb-3 uppercase text-gray-400 font-bold">popular</h2>

        <div className="px-5 flex gap-4 overflow-x-auto [&::webkit-scrollbar]:hidden">
          {barbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>

    </div>
  );
}
