"use client";
import SiteLoading from "@/components/Loading/Loading";
import { Get } from "@/services/fetchServices";
import { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";

const Transitions = ({children}:any) => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState<any>(null);
    useEffect(() => {
      Get().then((res) => {
        setData(res);
        setLoading(false);
      });
    }, []);
  return (
    <>
      <CSSTransition
        in={loading}
        timeout={300}
        classNames="fade"
        unmountOnExit
      >
        <SiteLoading />
      </CSSTransition>

      <CSSTransition
        in={!loading}
        timeout={300}
        classNames="fade"
        unmountOnExit
      >
        <div>
          {children}
        </div>
      </CSSTransition>
    </>
  )
}

export default Transitions
