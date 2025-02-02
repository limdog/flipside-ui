import { Thread } from "@/components/assistant-ui/thread";
import { AssistantRuntimeProvider, useEdgeRuntime } from "@assistant-ui/react";

export default function Home() {
  const runtime = useEdgeRuntime({ api: "/api/chat" });

  return (
    <AssistantRuntimeProvider runtime={runtime}>
      <main className="h-dvh">
        <Thread />
      </main>
    </AssistantRuntimeProvider>
  );
}
