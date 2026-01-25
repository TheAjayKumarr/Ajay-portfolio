function SkillCard({ name, icon: Icon }) {
  return (
    <div className="flex flex-col items-center gap-2 p-4 border rounded-xl  hover:border-orange-500">
      <Icon className="text-3xl  hover:border-orange-500" />
      <p className="text-sm font-medium">{name}</p>
    </div>
  );
}

export default SkillCard;
