// import { getQueryClient, trpc } from "@/trpc/server";
// import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
// import { Client } from "./client";
// import { Suspense } from "react";
"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTRPC } from "@/trpc/client";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "sonner";

// const Page = async () => {
//   const queryClient = getQueryClient();
//   void queryClient.prefetchQuery(
//     trpc.createAI.queryOptions({ text: "Antonio PRE" })
//   );

//   return (
//     <HydrationBoundary state={dehydrate(queryClient)}>
//       <Suspense fallback={<p>Loading...</p>}>
//         <Client />
//       </Suspense>
//     </HydrationBoundary>
//   );
// };

const Page = () => {
  const [value, setValue] = useState("");
  const trpc = useTRPC();
  const invoke = useMutation(
    trpc.invoke.mutationOptions({
      onSuccess: () => {
        toast.success("job");
      },
    })
  );
  return (
    <div>
      <Input value={value} onChange={(e) => setValue(e.target.value)} />
      <Button
        disabled={invoke.isPending}
        onClick={() => invoke.mutate({ value })}
      >
        test
      </Button>
    </div>
  );
};

export default Page;
