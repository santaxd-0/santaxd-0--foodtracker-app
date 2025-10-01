import { Link } from "@mui/material"

interface UILinkProps {
    linkText: string,
    linkPath: string
}

export const UILink = ({ linkText, linkPath }: UILinkProps) => {
    return (
        <Link href={linkPath} color="success">
            {linkText}
        </Link>
    )
}