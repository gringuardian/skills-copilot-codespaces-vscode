function skillsMember() {
  const member = document.getElementById("member");
  const memberSkills = document.getElementById("member-skills");
  const memberSkillsList = document.getElementById("member-skills-list");
  const memberSkillsClose = document.getElementById("member-skills-close");

  memberSkillsClose.onclick = () => {
    memberSkills.classList.remove("show");
  };

  member.onclick = () => {
    memberSkills.classList.add("show");
  };

  memberSkillsList.onclick = () => {
    memberSkills.classList.remove("show");
  };
}