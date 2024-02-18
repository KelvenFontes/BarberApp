import { Badge } from "@/app/components/ui/badge";
import { Button } from "@/app/components/ui/button";
import { Card, CardContent } from "@/app/components/ui/card";
import { Barbershop } from "@prisma/client";
import { StarIcon } from "lucide-react";
import Image from "next/image";

interface BarbershopItemProps {
  barbershop: Barbershop;
}

const BarbershopItem = ({ barbershop }: BarbershopItemProps) => {

  return (
    <Card className="min-w-[167px] max-w-[167px] rounded-2xl">
      <CardContent className="p-0 pt-1">

        <div className="relative h-[160px] w-full">
          <div className="absolute top-1 left-2 z-50">
          <Badge variant="secondary" className="opacity-90 flex gap-1 items-center">
            <StarIcon size={12} className="fill-primary text-primary"/>
            <span className="text-xs">5,0</span>
          </Badge>
          </div>

          <Image src={barbershop.imageUrl} height={0} width={0} sizes="100W" className="px-1 rounded-2xl" fill style={{ objectFit: 'cover' }} alt={barbershop.name} />
        </div>

        <div className="px-3 pb-3">
          <h2 className="font-bold mt-2 overflow-hidden text-ellipsis text-nowrap">{barbershop.name}</h2>
          <p className="text-sm text-gray-400 overflow-hidden text-ellipsis text-nowrap">{barbershop.address}</p>

          <Button className="w-full mt-3" variant="secondary">Reserve</Button>
        </div>

      </CardContent>
    </Card>
  );
}

export default BarbershopItem;
