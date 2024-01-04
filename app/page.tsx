import Transitions from "@/components/Transitions/Transitions";
import HomePage from "@/pages/Home/HomePage";

export default function app() {
  return (
    <>
      <Transitions>
        <HomePage />
        
      </Transitions>
    </>
  );
}
