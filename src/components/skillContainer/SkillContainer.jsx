import { useEffect } from "react";
import { skill } from "../../utils/optionList";

function SkillContainer() {
  useEffect(() => {
    console.log(skill);
  }, []);

  return (
    <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-8 gap-4 py-8" id="skill">
      {skill.map((s) => {
        return (
          <div key={s.name} className="text-center">
            <img
              className="w-[48px] h-[48px] transition-all duration-150 mx-auto hover:scale-120"
              src={s.photoUrl}
              alt={s.name}
            />
            <div className="font-light mt-2">{s.name}</div>
          </div>
        );
      })}
    </div>
  );
}

export default SkillContainer;
