import { Button } from "@/app/components/ui/button";
import { db } from "@/app/lib/prisma";
import { ChevronLeftIcon, MapPinIcon, MenuIcon, StarIcon } from "lucide-react";
import Image from "next/image";

interface BarbershopDetailsPageProps {
  params: {
    id: string;
  }
}

const BarbershopDetailsPage = async ({ params }: BarbershopDetailsPageProps) => {

  console.log(params);

  if (!params.id) {
    // To do redirect to home page
    return null;
  }

  const barbershop = await db.barbershop.findUnique({
    where: {
      id: params.id,
    },
  });

  console.log(barbershop);

  if (!barbershop) {
    // To do redirect to home page
    return null;
  }

  return (
    <div>
      <div className="h-[250px] w-full relative">
        <Button variant="outline" size="icon" className="z-50 absolute top-4 left-4">
          <ChevronLeftIcon />
        </Button>

        <Button variant="outline" size="icon" className="z-50 absolute top-4 right-4">
          <MenuIcon />
        </Button>

        <Image src={barbershop.imageUrl} fill alt={barbershop.name} style={{ objectFit: 'cover' }} />
      </div>

      <div className="px-5 py-3 pb-6 border border-b border-solid border-secondary">
        <h1 className="text-xl font-bold">{barbershop.name}</h1>
        <div className="flex items-center gap-1 mt-2">
          <MapPinIcon className="text-primary" size={18}/>
          <p className="text-sm ">{barbershop.address}</p>
        </div>

        <div className="flex items-center gap-1 mt-2">
          <StarIcon className="text-primary" size={18}/>
          <p className="text-sm ">4,9 (510 svaliações)</p>
        </div>
      </div>
      
    </div>
  );
}

export default BarbershopDetailsPage;
