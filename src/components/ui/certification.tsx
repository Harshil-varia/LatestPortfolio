import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

interface Props {
    name: string;
    issuer: string; 
    dates: string;
}

export function CertificationCard({
    name,
  issuer,
  dates,

}: Props) {
  return (
    <li className="relative ml-10 py-4">
      <div className="absolute -left-16 top-2 flex items-center justify-center bg-white rounded-full">

      </div>
      <div className="flex flex-1 flex-col justify-start gap-1">
        {dates && (
          <time className="text-xs text-muted-foreground">{dates}</time>
        )}
        <h2 className="font-semibold leading-none">{name}</h2>
        {issuer && (
          <p className="text-sm text-muted-foreground">{issuer}</p>
        )}
      </div>
    </li>
  );
}
