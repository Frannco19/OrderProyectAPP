import BranchItem from "../branchItem/BranchItem";
import "./branchContainer.css"

export default function BranchContainer() {
  const branches = [
    {
      id: 1,
      name: "ADD NEW BRANCH +",
    },
    {
      id: 2,
      name: "Rock And Fellers - Oroño",
      image: "/src/assets/RockAndFeller.webp",
    },
    // {
    //   id: 3,
    //   name: "Sucursal Sur",
    //   image: "/src/assets/sucursalSur.webp",
    // },
  ];

  return (
    <section className="branches-grid">
      {branches.map((branch) => (
        <BranchItem
          key={branch.id}
          name={branch.name}
          image={branch.image}
        />
      ))}
    </section>
  );
}
