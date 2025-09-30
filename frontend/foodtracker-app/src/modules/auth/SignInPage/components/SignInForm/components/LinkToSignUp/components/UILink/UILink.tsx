import { Link } from "@mui/material"

interface UILinkProps {
    linkText: string
}

export const UILink = ({ linkText }: UILinkProps) => {
    return (
        <Link href="#" color="success">
            {linkText}
        </Link>
    )
}