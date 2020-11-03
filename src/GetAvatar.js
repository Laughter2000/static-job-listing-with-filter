import {
  account,
  eyecam,
  faceit,
  insure,
  loopstudios,
  manage,
  myhome,
  photosnap,
  shortly,
  theair,
} from "./images/_index";

const GetAvatar = (name) => {
  let x = name.replace("./images/", "").replace(".svg", "");
  switch (x) {
    default:
      return "";
    case "photosnap":
      return photosnap;
    case "manage":
      return manage;
    case "account":
      return account;
    case "myhome":
      return myhome;
    case "loop-studios":
      return loopstudios;
    case "faceit":
      return faceit;
    case "shortly":
      return shortly;
    case "insure":
      return insure;
    case "eyecam-co":
      return eyecam;
    case "the-air-filter-company":
      return theair;
  }
};

export default GetAvatar;
