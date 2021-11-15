import { ReactElement , cloneElement } from "react";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

interface ActiveLinkProps extends LinkProps {

    children: ReactElement;
    activeClassName : string;
}

export function ActiveLink( {children , activeClassName , ...rest} : ActiveLinkProps ){

    const { asPath } = useRouter();

    const className = asPath === rest.href
    ? activeClassName
    : '';

    // desestrura nas propriedade childer e activeClasseName, o ...rest pega o restante das propriedades do componente link

    return (

        // aqui passa o restante das propriedades para o componete link, menos as duas
        <Link { ...rest}>

            {/* //aqui clona o elemento children adicionando a propriedade nele */}
            {cloneElement(children, {

                className,
            })}


        </Link>



    );






}