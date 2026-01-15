import { useEffect } from "react";

function EffectLog() {
  useEffect(() => {
    console.log("EffectLog: komponen di-render atau di-update");
  });

  return <p>EffectLog aktif </p>;
}

export default EffectLog;
