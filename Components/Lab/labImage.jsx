import Image from "next/image";

export function LabImage(props) {
    return (
        <Image
            placeholder="blur" {...props}
            // blurDataURL="..."
        />
    );
}