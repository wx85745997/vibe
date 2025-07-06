// import { getQueryClient, trpc } from "@/trpc/server";
// import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
// import { Client } from "./client";
// import { Suspense } from "react";
"use client";

import { Button } from "@/components/ui/button";
import { useTRPC } from "@/trpc/client";
import { useMutation } from "@tanstack/react-query";
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
      <Button
        disabled={invoke.isPending}
        onClick={() => invoke.mutate({ text: "123 " })}
      >
        test
      </Button>
    </div>
  );
};

export default Page;
