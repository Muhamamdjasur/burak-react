import React, { ReactNode, useState } from "react"
import Cookies from "universal-cookie/es6";
import { Member } from "../../lib/types/member";
import { GlobalContext } from "../hooks/useGlobal";


const ContextProvider: React.FC<{children: ReactNode}> = ({children}) => {
    const cookies = new Cookies();
 if (!cookies.get("acessToken")) localStorage.removeItem("memberData");

    const [authMember, setAuthMember] = useState<Member | null>(
        localStorage.getItem("MemberData") 
        ? JSON.parse(localStorage.getItem("memberData") as string)
        : null
    );

    const [orderBuilder, setOrderBuilder] = useState<Date>( new Date());
    console.log("=== verify === ");

    return (
       <GlobalContext.Provider 
       value={{ authMember, setAuthMember, orderBuilder,  setOrderBuilder }}> 
   {children}
   </GlobalContext.Provider>
    );
};
export default  ContextProvider; 