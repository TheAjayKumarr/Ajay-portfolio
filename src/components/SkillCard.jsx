function SkillCard({ name, icon: Icon }) {
  return (
    <div className="flex flex-col items-center gap-1.5 py-3 border rounded-lg">
      <Icon className="text-lg" />
      <p className="text-xs sm:text-sm font-medium">{name}</p>
    </div>
  );
}

export default SkillCard;
