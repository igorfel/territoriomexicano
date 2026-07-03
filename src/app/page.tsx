import { SceneOpening } from "@/components/scenes/SceneOpening";
import { SceneArrival } from "@/components/scenes/SceneArrival";
import { SceneHands } from "@/components/scenes/SceneHands";
import { SceneFire } from "@/components/scenes/SceneFire";
import { SceneMargarita } from "@/components/scenes/SceneMargarita";
import { SceneTable } from "@/components/scenes/SceneTable";
import { SceneInvite } from "@/components/scenes/SceneInvite";
import { SceneEpilogue } from "@/components/scenes/SceneEpilogue";

/*
 * A home não é uma página — é um curta-metragem de sexta-feira à noite.
 * Cada viewport é um frame: abertura fria, chegada, as mãos, o fogo,
 * o bar, a mesa, o convite. Os créditos levam ao resto do site.
 */
export default function Home() {
  return (
    <>
      <SceneOpening />
      <SceneArrival />
      <SceneHands />
      <SceneFire />
      <SceneMargarita />
      <SceneTable />
      <SceneInvite />
      <SceneEpilogue />
    </>
  );
}
