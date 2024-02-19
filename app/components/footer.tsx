import { format } from "date-fns";

const Footer = () => {
  return (
    <div className="w-full bg-secondary py-6 px-5">
      <p className="text-gray-400 text-xs font-bold opacity-75">© {format(new Date(), "u")} Copyright BarberApp</p>
    </div>
   );
}

export default Footer;
