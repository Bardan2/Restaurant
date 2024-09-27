import React from "react";
import { Button } from "@/components/ui/button";
import ok from "../../assets/thanks/ok.png";

const OrderConfirm = () => {
  return (
    <section className="container mx-auto my-10">
      <div className="bg-[var(--background-hero)] text-center w-1/2 mx-auto py-6 rounded-lg">
        <h1 className="text-4xl font-bold text-amber-500 pt-10 tracking-wider">
          Your Order Is Confirmed!
        </h1>
        <div className="flex justify-center mt-8">
          <img src={ok} alt="" className="bg-amber-500 rounded-full p-4 w-20" />
        </div>
        <p className="py-8 font-medium w-1/2 mx-auto">
          Thank you for choosing us, and we look forward to welcoming you soon.
          
        </p>
        <Button
          className="lg:grid-cols-3 border-none mb-14 w-1/2 h-12 bg-amber-500 text-slate-900 font-bold hover:bg-amber-400 transition duration-300 hover:text-slate-900"
          variant="outline"
        >
          Back To Home
        </Button>
      </div>
    </section>
  );
};

export default OrderConfirm;
