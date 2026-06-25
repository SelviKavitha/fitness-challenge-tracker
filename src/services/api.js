import challenges from "../data/challenges.js";

export const getChallenges = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(challenges);
    }, 1000);
  });
};

export const getChallengeById = (id) => {
  return Promise.resolve(
    challenges.find(
      (challenge) => challenge.id === Number(id)
    )
  );
};