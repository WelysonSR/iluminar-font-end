import { Iconeluminar } from "./Iconeluminar";
import { IconePerfil } from "./IconePerfil";

export function Header() {
  return (
    <section className="flex justify-center">
      <div className="flex items-center justify-between mt-[18px] w-[386px]">
        <Iconeluminar />
        <IconePerfil />
      </div>
    </section>
  )
}