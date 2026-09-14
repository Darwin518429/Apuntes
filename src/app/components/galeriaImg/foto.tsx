import Style_componente from "@/app/ui/componente.module.css"
import Image from 'next/image';
import { FotoUnica } from "@/types";
/*interface fotoUnica{
    Src:string
    Alt:string;

}*/
export default function fotoUnica({Src,Alt}:FotoUnica) {

    return (

        <div className={Style_componente.imgAjustar}>
            <Image
                src={Src}
                alt={Alt}
                fill
                sizes="100vw"
            />
        </div>
    );
}