import React from "react";
import Lottie from "lottie-react";
import upigif from "../../icons/upi.json";
import { Input } from "@nextui-org/react";
function Upi({ upiId, setUpiId }: { upiId: string; setUpiId: any }) {
  const style = {
    height: 100,
    width: 100,
  };
  return (
    <div className="flex  items-center justify-evenly">
      <Lottie animationData={upigif} style={style} className=" " />
      <Input
        value={upiId}
        onChange={(e) => setUpiId(e.target.value)}
        type="text"
        label="Upi Id"
        defaultValue="ayush@upi"
        accept="text"
        description="We'll never share your upi with anyone else."
        className="max-w-xs "
        color="secondary"
      ></Input>
    </div>
  );
}

export default Upi;
