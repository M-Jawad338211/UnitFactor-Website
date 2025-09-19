import Members from "../components/about-details/members";
import Recognitions from "../components/about-details/recognitions";
import Talents from "../components/about-details/talents";
import Team from "../components/about-details/teams";

export default function AboutPage() {
  return (
    <div>
      <Talents />
      <Team />
      <Recognitions />
      <Members />
    </div>
  );
}
