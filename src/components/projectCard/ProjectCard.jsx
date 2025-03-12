function ProjectCard({ project }) {
  return (
    <div className="bg-white shadow rounded">
      <div className="">
        <img
          className="border-b-2 border-[#dddddd]"
          src={project.img}
          alt={project.name}
        />
      </div>
      <div className="py-4 px-4 space-y-4">
        <div className="text-[16px]">{project.name}</div>
        <div className="text-[12px] font-light">
          <p>{project.description}</p>
        </div>
        <div className="">
          <ul className="flex flex-wrap gap-2 text-[12px]">
            {project.techStack.map((ts) => {
              return (
                <li key={ts} className="bg-[#EBEBEB] px-2 rounded-full">
                  {ts}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="px-2 border-t-2 border-[#dddddd] py-2">
        <ul className="flex justify-end space-x-4 text-[14px]">
          <li>
            <a
              className="duration-100 transition-all hover:cursor-pointer hover:text-black"
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-solid fa-link mr-1"></i>Website
            </a>
          </li>
          <li>
            <a
              className="duration-100 transition-all hover:cursor-pointer hover:text-black"
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-github mr-1"></i>Github
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ProjectCard;
