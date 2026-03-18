import { Button } from "@/shared/components/ui/button";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: App });

function App() {
  return (
    <main className="">
      kikikikiki
      <Button>press me</Button>
    </main>
  );
}
