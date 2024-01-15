import { createContext } from "react";

type ContactIdContextType = {
    handleDelete: (idContact: string) => void;
}

export const ContactIdContext = createContext<ContactIdContextType | null>(null)