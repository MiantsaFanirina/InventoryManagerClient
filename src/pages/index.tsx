import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { Icon } from '@iconify/react';


export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>Bienvenue&nbsp;</h1>
          <h1 className={title({ color: "violet" })}>Miantsa Fanirina&nbsp;</h1>
          <h1 className={title()}>!&nbsp;</h1>
          <br />
          <h1 className={title()}>
            Commence à gerer votre inventaire
          </h1>
          <h4 className={subtitle({ class: "mt-4" })}>
            Simplement et Rapidement.
          </h4>
        </div>
{/*         
        <div className="w-full flex justify-center">
            <img src="/img/box.gif" alt="box" className="w-[200px]"/>
        </div> */}

        <div className="flex gap-3">
          <Link
            className={buttonStyles({ variant: "bordered", radius: "full" })}
            href="products"
          >
            <Icon icon="lucide:box" width="16" height="16" />
            Acceder à nos produits
          </Link>
          
          <Link
            className={buttonStyles({ variant: "bordered", radius: "full" })}
            href="stocks"
          >
            <Icon icon="material-symbols:inventory-rounded" width="16" height="16" />
            Voir nos stocks
          </Link>
        </div>

      </section>
    </DefaultLayout>
  );
}
