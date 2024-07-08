import { useContext } from "react";
import { UserContext } from "../features/Adminfeatures/contexts/UsersContext";

export default function useUser() {
    return useContext(UserContext);
}

